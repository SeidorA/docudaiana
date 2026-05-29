---
title: Integracion Daiana Studio + HubSpot MCP
description: Integracion Daiana Studio + HubSpot MCP
sidebar_position: 2
sidebar_label: Instalacion y config
---

## 1. Resumen Ejecutivo

Esta guía describe el procedimiento completo para conectar Daiana Studio con HubSpot a través del servidor MCP oficial de HubSpot, utilizando mcp-proxy como capa de transporte y Docker como entorno de ejecución.

Una vez completada la configuración, los agentes de Daiana Studio podrán ejecutar acciones de HubSpot en tiempo real: crear y actualizar contactos, buscar empresas, gestionar negocios (deals), consultar propiedades del CRM y enviar comunicaciones, sin necesidad de desarrollar código personalizado.

> ✅ **Resultado esperado:** El nodo Custom MCP en Daiana Studio listará automáticamente todas las herramientas disponibles en HubSpot y podrá invocarlas desde cualquier flujo de agente.

---

## 2. Prerrequisitos

### 2.1 Infraestructura requerida

| Componente | Versión mínima | Observaciones |
|---|---|---|
| Docker Engine | 20.x o superior | Con soporte para Docker Compose v2 |
| Docker Compose | v2.x | Plugin integrado en Docker Desktop |
| Daiana Studio  | 3.1.x o superior | Contenedor ya en ejecución en `daiana-net` |
| Node.js (dentro del contenedor) | 18 o superior | Se usa la imagen `node:22-slim` |
| Acceso a internet | Requerido | Para descargar imagen y paquetes npm |

### 2.2 Credenciales de HubSpot

Para autenticar el MCP de HubSpot se necesita un **Private App Access Token** con los scopes adecuados. Siga estos pasos para obtenerlo:

1. Inicie sesión en su cuenta de HubSpot.
2. Navegue a **Configuración** (ícono engranaje) → **Integraciones** → **Aplicaciones privadas**.
3. Haga clic en **Crear una aplicación privada**.
4. Complete nombre y descripción. En la pestaña **Scopes**, habilite al menos los siguientes:
   - `crm.objects.contacts.read` / `write`
   - `crm.objects.companies.read` / `write`
   - `crm.objects.deals.read` / `write`
   - `crm.schemas.contacts.read` / `write` (para propiedades)
5. Haga clic en **Crear aplicación** y luego en **Mostrar token**.
6. Copie el token — solo se muestra una vez. Guárdelo de forma segura.

> ⚠️ **Seguridad del token:** Nunca incluya el token directamente en archivos `docker-compose.yml` que se suban a repositorios Git. Use variables de entorno del sistema operativo host o un gestor de secretos (AWS Secrets Manager, HashiCorp Vault, etc.).

---

## 3. Arquitectura de la Solución

![Arquitectura](/img/studio/tutoriales/hunspot/arq.png)

La arquitectura utiliza tres capas diferenciadas que se comunican dentro de la red Docker interna (`daiana-net`):

| Capa | Componente | Puerto | Rol |
|---|---|---|---|
| Capa 1 — Frontend IA | Daiana Studio (Flowise) | 3000 (interno) | Orquesta agentes y flujos |
| Capa 2 — Proxy de transporte | mcp-proxy | 3000 (contenedor) / 3002 (host) | Traduce HTTP ↔ stdio |
| Capa 3 — MCP oficial | @hubspot/mcp-server | stdio (local al contenedor) | Ejecuta herramientas de HubSpot |

### 3.1 Flujo de comunicación

```
Daiana Studio  →  Custom MCP Node  →  mcp-proxy :3000  →  @hubspot/mcp-server (stdio)  →  API HubSpot
```

Cada petición del agente viaja por HTTP con el endpoint `/mcp` (Streamable HTTP). mcp-proxy la recibe, lanza el proceso Node del MCP de HubSpot como hijo, y reenvía la respuesta. El flag `--stateless` evita gestión de sesiones persistentes, lo que simplifica el despliegue en entornos de contenedores efímeros.

---

## 4. Configuración Paso a Paso

### ▶ PASO 1 — Crear o actualizar docker-compose.yml

Añada el servicio `mcp-hubspot` al archivo `docker-compose.yml` de Daiana Studio. Si ya dispone de un compose para Flowise, agregue el bloque siguiente dentro de la clave `services` y verifique que la red `daiana-net` esté declarada.

```yaml
services:

  mcp-hubspot:
    image: node:22-slim
    container_name: mcp-hubspot
    networks:
      - daiana-net
    environment:
      - HUBSPOT_ACCESS_TOKEN=${HUBSPOT_ACCESS_TOKEN}
      - NODE_PATH=/usr/local/lib/node_modules
    ports:
      - "3002:3000"
    command: >
      sh -c "
        npm install -g @hubspot/mcp-server mcp-proxy --quiet &&
        mcp-proxy --port 3000 --server stream --stateless \
          node /usr/local/lib/node_modules/@hubspot/mcp-server/dist/index.js"
    restart: unless-stopped

networks:
  daiana-net:
    external: true   # Si la red ya existe; eliminar esta línea si se crea aquí
```

> ⚠️ **Variable de entorno del host:** La sintaxis `${HUBSPOT_ACCESS_TOKEN}` lee la variable del sistema operativo del host. Asegúrese de exportarla antes de ejecutar `docker compose up`:
>
> ```bash
> # Linux/macOS
> export HUBSPOT_ACCESS_TOKEN=pat-na1-xxxxxxxxxxxx
>
> # PowerShell
> $env:HUBSPOT_ACCESS_TOKEN = 'pat-na1-xxxxxxxxxxxx'
> ```

---

### ▶ PASO 2 — Habilitar HTTP_SECURITY_CHECK en Daiana Studio

Daiana Studio incluye una protección anti-SSRF que bloquea por defecto peticiones hacia IPs privadas (rangos `10.x`, `172.x`, `192.168.x`). Como `mcp-hubspot` vive en la red Docker interna, esta protección debe deshabilitarse explícitamente en el contenedor de Daiana.

Añada la variable en el bloque `environment` del servicio de Daiana Studio:

```yaml
  daiana-studio:       # (o flowise, según como se llame el servicio)
    environment:
      - HTTP_SECURITY_CHECK=false
      # ... resto de variables existentes
```

---

### ▶ PASO 3 — Levantar los contenedores

Desde el directorio donde reside `docker-compose.yml`, ejecute:

```bash
# Primera vez (descarga imagen y paquetes npm ~ 2-3 min)
docker compose up -d

# Verificar que ambos contenedores estén en estado 'Up'
docker compose ps
```

La salida esperada de `docker compose ps` debe mostrar algo similar a:

```
NAME              IMAGE          STATUS          PORTS
daiana-studio     ...            Up 2 minutes    0.0.0.0:3000->3000/tcp
mcp-hubspot       node:22-slim   Up 2 minutes    0.0.0.0:3002->3000/tcp
```

---

### ▶ PASO 4 — Verificar que mcp-proxy está listo

Revise los logs del contenedor para confirmar que el servidor MCP está en escucha:

```bash
docker logs mcp-hubspot --tail 20
```

> ✅ **Mensaje esperado en los logs:**
> ```
> Server connected. Waiting for requests...
> ```
> Si aparece un error de autenticación como `Unauthorized` o `Invalid token`, verifique que `HUBSPOT_ACCESS_TOKEN` está correctamente exportada en el host.

También puede verificar desde el navegador del host (fuera de Docker):

```bash
# Debe responder con un JSON de inicialización MCP (no un error 404)
curl http://localhost:3002/mcp
```

---

### ▶ PASO 5 — Configurar el nodo Custom MCP en Daiana Studio

Con el contenedor `mcp-hubspot` corriendo, abra Daiana Studio y siga estos pasos:

1. Abra o cree un flujo (Flow) en Daiana Studio.
2. En el panel de nodos, busque **Custom MCP Tool**.
3. Arrastre el nodo al canvas.
4. En el campo **URL** del nodo, ingrese exactamente la siguiente dirección:

   ```
   http://mcp-hubspot:3000/mcp
   ```

   Usar el nombre del contenedor (`mcp-hubspot`) en lugar de `localhost` es obligatorio: ambos contenedores están en la misma red Docker y se resuelven por nombre de servicio. El puerto `3000` es el interno del contenedor, no el `3002` expuesto al host.

5. Haga clic en el botón **Cargar herramientas** (o Load Tools). El nodo debe listar automáticamente las herramientas de HubSpot disponibles.
6. Conecte el nodo Custom MCP a su agente y guarde el flujo.

> ⚠️ **Endpoint correcto:** Use siempre `/mcp` (Streamable HTTP). El endpoint `/sse` está deprecado en MCP SDK >= 1.0 y solo acepta peticiones GET, lo que impide el intercambio bidireccional que requiere Daiana Studio.

---

## 5. Herramientas HubSpot Disponibles

Una vez conectado, el nodo Custom MCP expone automáticamente las herramientas publicadas por el MCP oficial de HubSpot:

| Categoría | Herramienta (ejemplo) | Descripción |
|---|---|---|
| Contactos | `hubspot_create_contact` | Crea un nuevo contacto con propiedades personalizadas |
| Contactos | `hubspot_search_contacts` | Busca contactos por email, nombre u otras propiedades |
| Contactos | `hubspot_update_contact` | Actualiza propiedades de un contacto existente |
| Empresas | `hubspot_create_company` | Crea una nueva empresa en el CRM |
| Empresas | `hubspot_search_companies` | Busca empresas por nombre, dominio u otras propiedades |
| Negocios | `hubspot_create_deal` | Crea un negocio (deal) asociado a contacto/empresa |
| Negocios | `hubspot_update_deal_stage` | Mueve un negocio entre etapas del pipeline |
| Propiedades | `hubspot_get_properties` | Lista las propiedades disponibles de un objeto CRM |
| Asociaciones | `hubspot_associate_objects` | Asocia contactos, empresas y negocios entre sí |

La lista completa puede variar según la versión del paquete. Para obtener el listado actualizado:

```bash
docker exec mcp-hubspot node /usr/local/lib/node_modules/@hubspot/mcp-server/dist/index.js --help
```

---

## 6. Verificación y Prueba Funcional

### 6.1 Checklist de validación

| # | Verificación | Cómo comprobarlo | Estado esperado |
|---|---|---|---|
| 1 | Contenedor activo | `docker compose ps` | `Up (healthy)` |
| 2 | Logs sin errores | `docker logs mcp-hubspot` | `"Waiting for requests..."` |
| 3 | Endpoint responde | `curl localhost:3002/mcp` | JSON MCP (no 404) |
| 4 | Herramientas cargadas | Nodo Custom MCP en Daiana | Lista de tools visible |
| 5 | Acción ejecutada | Prueba desde agente Daiana | Respuesta de HubSpot API |

### 6.2 Prueba rápida desde Daiana Studio

Para validar la integración de extremo a extremo, use el siguiente prompt en un flujo de prueba:

```
"Busca en HubSpot si existe un contacto con el email test@ejemplo.com."
```

Si la integración está correctamente configurada, el agente invocará `hubspot_search_contacts`, retornará el resultado de la API y lo presentará en lenguaje natural.

---

## 7. Resolución de Problemas Frecuentes

| Síntoma | Causa probable | Solución |
|---|---|---|
| El nodo Custom MCP no carga herramientas | URL incorrecta o contenedor no iniciado | Verifique que la URL sea `http://mcp-hubspot:3000/mcp` y que `docker compose ps` muestre `Up` |
| Error `Connection refused` en Daiana | Daiana y mcp-hubspot no comparten red | Confirme que ambos servicios declaran `daiana-net` en su bloque `networks` |
| Error de autenticación en logs del MCP | Token de HubSpot inválido o no exportado | Verifique `export HUBSPOT_ACCESS_TOKEN=...` en el host y reinicie el contenedor |
| Daiana bloquea la petición (SSRF error) | `HTTP_SECURITY_CHECK` no está en `false` | Añada `HTTP_SECURITY_CHECK=false` al bloque `environment` de Daiana Studio y reinicie |
| Error al usar endpoint `/sse` | Solo GET funciona en `/sse`; Daiana necesita POST | Cambie la URL del nodo a `http://mcp-hubspot:3000/mcp` |
| Contenedor mcp-hubspot se reinicia en bucle | npm install falla o token ausente al arrancar | Revise logs con `docker logs mcp-hubspot --tail 50` para identificar el error |

---

## 8. Consideraciones para Producción

### 8.1 Gestión de secretos

En entornos productivos evite variables de entorno planas para el token. Las opciones recomendadas son:

- **Docker Secrets** (Docker Swarm / Compose con `secrets:`).
- **Variables inyectadas por CI/CD** (GitHub Actions, GitLab CI).
- **Gestores de secretos nativos:** AWS Secrets Manager, HashiCorp Vault, Azure Key Vault.

### 8.2 Health checks y reinicio automático

Añada un health check al servicio para que Docker verifique periódicamente que el endpoint responde:

```yaml
  mcp-hubspot:
    # ... resto de configuración ...
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/mcp"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s
```

### 8.3 Actualización del MCP de HubSpot

Cuando HubSpot publique nuevas herramientas en `@hubspot/mcp-server`, basta con recrear el contenedor:

```bash
docker compose up -d --force-recreate mcp-hubspot
```

No es necesario modificar Daiana Studio ni el nodo Custom MCP. El nodo redescubrirá automáticamente las nuevas herramientas al recargarse el flujo.

### 8.4 Escalar a otros MCPs

Este mismo patrón es directamente replicable para otras plataformas. Solo requiere:

1. Añadir un nuevo servicio en `docker-compose.yml` (p. ej. `mcp-salesforce`, `mcp-jira`).
2. Reemplazar el paquete npm (`@salesforce/mcp-server`, etc.) y las variables de entorno correspondientes.
3. Agregar un nuevo nodo Custom MCP en Daiana Studio apuntando al nuevo contenedor.

---

*Seidor Analytics · Base de Conocimiento · Integración MCP · Mayo 2026*
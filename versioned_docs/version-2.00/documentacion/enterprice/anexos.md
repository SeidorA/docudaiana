---
sidebar_position: 10
title: "Anexos"
---

## Anexo A: Glosario de Términos Técnicos

Este anexo proporciona definiciones de términos técnicos y acrónimos utilizados en la documentación técnica de Daiana, facilitando una mejor comprensión de la plataforma y sus capacidades.

-   **AES-256:** Advanced Encryption Standard con una clave de 256 bits. Es uno de los algoritmos de cifrado más seguros y se utiliza para cifrar datos en reposo dentro de la plataforma Daiana.
-   **API:** Application Programming Interface. Un conjunto de rutinas y protocolos que permite la integración de la plataforma Daiana con otros sistemas de software, facilitando la automatización y sincronización de datos.
-   **CRM:** Customer Relationship Management. Sistema que permite a las empresas administrar y analizar interacciones con clientes, ayudando a mejorar las relaciones comerciales y la retención de clientes.
-   **ERP:** Enterprise Resource Planning. Software que gestiona y automatiza muchas prácticas de negocio asociadas con las operaciones o la producción y distribución de una compañía.
-   **GDPR:** General Data Protection Regulation. Regulación de protección de datos y privacidad en la Unión Europea que impone directrices para la recopilación y procesamiento de información personal.
-   **ISO/IEC 27001:** Norma internacional que describe cómo gestionar la seguridad de la información en una empresa. Daiana está certificado bajo esta norma, asegurando la protección de datos corporativos y de clientes.
-   **PCI DSS:** Payment Card Industry Data Security Standard. Norma de seguridad de datos que las organizaciones deben seguir para proteger y asegurar información de tarjetas de crédito.
-   **RBAC:** Role-Based Access Control. Método de gestión de acceso a la red y a los sistemas basado en los roles individuales de los usuarios dentro de una organización.
-   **TLS:** Transport Layer Security. Protocolo diseñado para proporcionar seguridad en las comunicaciones a través de una red, como Internet. TLS 1.3 es la versión más reciente y segura del protocolo.
-   **Webhook:** Método para alterar el comportamiento de una página web o aplicación web con llamadas de retorno personalizables. Los webhooks permiten a otras aplicaciones recibir información en tiempo real, facilitando la integración de servicios como los de Daiana.
-   **WebSocket:** Protocolo de comunicación que proporciona canales de comunicación bidireccional y full-duplex sobre un único socket TCP. Utilizado por Daiana para mantener una conexión constante y en tiempo real para el servicio de mensajería.

Esta terminología es esencial para entender las operaciones y características técnicas de Daiana, permitiendo a los usuarios y desarrolladores interactuar más eficazmente con la plataforma.

## Anexo B: Entrenamiento

Este anexo proporciona definiciones del proceso de entrenamiento de los asistentes virtuales en Daiana para lograr que los mismos mejoren en su calidad y efectividad al momento de responder las preguntas de los usuarios.

### Parte 1: Entrenamiento para Asistentes Virtuales Basados en Documentos

El proceso de entrenamiento para asistentes virtuales basados en documentos se centra en la capacidad del asistente para comprender y proporcionar respuestas precisas basadas en la información contenida en documentos cargados por los usuarios. Este tipo de entrenamiento implica las siguientes etapas:

**1) Carga de Documentos:**

-   **Selección de Documentos:** El usuario selecciona los documentos relevantes que contienen la información que el asistente necesita manejar. Estos pueden ser archivos en formatos como PDF, DOC, TXT, CSV, entre otros.
-   **Subida de Documentos:** Los documentos se cargan a la plataforma Daiana a través de la sección de “Fuentes”. Los usuarios pueden arrastrar y soltar los archivos o seleccionarlos desde su dispositivo.

**2) Procesamiento de Documentos:**

-   **Extracción de Texto:** Una vez cargados, los documentos son procesados para extraer el texto significativo. Este texto es analizado y segmentado en unidades de información manejables.
-   **Análisis de Contenido:** El contenido textual se analiza utilizando técnicas de procesamiento del lenguaje natural (NLP) para identificar entidades, conceptos clave y relaciones importantes dentro del texto.

**3) Entrenamiento del Modelo:**

-   **Indexación de Contenido:** El texto extraído y analizado se indexa para facilitar el acceso rápido y preciso durante las consultas.
-   **Creación de Respuestas:** Se generan respuestas automáticas basadas en el contenido indexado. El asistente es entrenado para comprender preguntas en lenguaje natural y mapearlas a las respuestas más significativas dentro de los documentos.

**4) Evaluación y Ajuste:**

-   **Calificación de Respuestas:** Los usuarios pueden interactuar con el asistente y calificar la precisión y utilidad de las respuestas proporcionadas. Estas calificaciones se utilizan para ajustar y mejorar el modelo.
-   **Actualización de Datos:** Los documentos y la información pueden actualizarse regularmente para reflejar cambios o agregar nuevos datos. El asistente se reentrena periódicamente para incorporar estas actualizaciones.

### Parte 2: Entrenamiento para Asistentes Virtuales Basados en Bases de Datos

El entrenamiento de asistentes virtuales que utilizan bases de datos se enfoca en la capacidad del asistente para interactuar directamente con bases de datos estructuradas y proporcionar respuestas basadas en consultas SQL. Este proceso incluye los siguientes pasos:

**1) Configuración de la Conexión a la Base de Datos:**

-   **Detalles de Conexión:** El usuario proporciona los detalles de conexión a la base de datos, incluyendo el tipo de base de datos (PostgreSQL, MySQL, SQL Server, etc.), host, esquema, usuario, puerto, nombre y contraseña.
-   **Verificación de Conexión:** La plataforma verifica la conexión a la base de datos para asegurar que el asistente pueda acceder a los datos necesarios.

**2) Definición de Esquemas y Tablas:**

-   **Mapeo de Esquemas:** El esquema de la base de datos se mapea para que el asistente pueda comprender la estructura de las tablas y las relaciones entre ellas.
-   **Identificación de Datos Relevantes:** Se identifican las tablas y columnas relevantes que el asistente utilizará para responder a las consultas de los usuarios.

**3) Entrenamiento del Modelo:**

-   **Calificación de Respuestas:** Similar al proceso basado en documentos, los usuarios pueden calificar la exactitud y relevancia de las respuestas proporcionadas por el asistente. Estas calificaciones se utilizan para refinar el modelo.
-   **Monitoreo de Rendimiento:** Se monitorea el rendimiento del asistente en términos de tiempo de respuesta y precisión. Cualquier problema identificado se aborda y se realizan ajustes para mejorar la eficiencia y exactitud.

Ambos métodos de entrenamiento, basados en documentos y en bases de datos, se enfocan en utilizar las calificaciones de los usuarios para mejorar continuamente la precisión y utilidad de las respuestas del asistente virtual, asegurando que proporcione el mejor soporte posible a los usuarios finales.
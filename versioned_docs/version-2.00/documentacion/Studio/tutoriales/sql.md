---
title: SQL Agent
sidebar_position: 3
---

Este tutorial te guiará para construir un Agente SQL inteligente que pueda interactuar con bases de datos, generar consultas SQL, validarlas, ejecutarlas y autocorregirse cuando ocurran errores.


## Resumen
El flujo de Agentes SQL implementa un sistema robusto de interacción con bases de datos que:

1. Recupera información del esquema de la base de datos
2. Genera consultas SQL basadas en las preguntas del usuario
3. Valida las consultas generadas para detectar errores comunes
4. Ejecuta consultas sobre la base de datos
5. Comprueba los resultados en busca de errores y se autocorrige cuando es necesario
6. Proporciona respuestas en lenguaje natural basadas en los resultados de la consulta

![SQL Agent](/img/tutoriales/sql/1.png)

## Paso 1: Configurar el nodo de inicio

Empieza añadiendo un **nodo Start** a tu lienzo. Esto sirve como punto de entrada para tu agente SQL.

![SQL Agent](/img/tutoriales/sql/2.png)

### Configuración:

- **Tipo de entrada:** Selecciona "Entrada de chat" para aceptar preguntas de usuarios
- **Estado de flujo**: Añadir una variable de estado con clave "" y valor vacío ```sqlQuery```

El nodo Start inicializa el estado del flujo con una variable vacía que almacenará la consulta SQL generada a lo largo del proceso. ```sqlQuery```

## Paso 2: Recuperación del esquema de la base de datos
Añade un nodo de **Función Personalizada** y conéctalo al nodo Inicio.

![SQL Agent](/img/tutoriales/sql/3.png)

### Configuración:

- **Función Javascript:** Esta es una función de ejemplo que se conecta a tu base de datos y recupera el esquema completo, incluyendo estructuras de tablas, definiciones de columnas y datos de ejemplo.

```js
const { DataSource } = require('typeorm');

const HOST = 'localhost';
const USER = 'testuser';
const PASSWORD = 'testpwd';
const DATABASE = 'testdatabase';
const PORT = 5432;

let sqlSchemaPrompt = '';

const AppDataSource = nueva DataSource({
  Tipo: 'Postgres',
  PRESENTADOR: PRESENTADOR,
  PUERTO: PUERTO,
  nombre de usuario: USUARIO,
  contraseña: CONTRASEÑA,
  base de datos: DATABASE,
  sincronizar: false,
  Registro: falso,
});

función async getSQLPrompt() {
  Prueba {
    espera AppDataSource.inicializar();
    const queryRunner = AppDataSource.createQueryRunner();

    // Consigue todas las tablas definidas por el usuario
    const tablesResult = await queryRunner.Consulta(`
 SELECCIONAR table_name
 DE information_schema.tables
 DONDE table_schema = 'PÚBLICO' Y table_type = 'TABLA BASE'
    `);

    para (const tableRow of tablesResult) {
      const tableName = tableRow.table_name;
      const schemaInfo = await queryRunner.Consulta(`
 SELECCIONA column_name, data_type is_nullable
 DE information_schema.columnas
 DONDE table_name = '${tableName}'
      `);

      const createColumns = [];
      columna const Nombres = [];

      para (columna const de schemaInfo ) {
        nombre const = columna.column_name;
        tipo const = columna.data_type.toMajúsculas();
        const notNull = columna.is_nullable === 'NO'? 'NO NULO': '';
        columnaNombres.push(nombre);
        createColumns.push('${name} ${type} ${notNull}`);
      }

      const sqlCreateTableQuery = 'CREATE TABLE ${tableName} (${createColumns.Úne(', ')})`;
      const sqlSelectTableQuery = 'SELECT * FROM ${tableName} LÍMITE 3`;

      sea allValues = [];
      Prueba {
        filas const = await queryRunner.query(sqlSelectTableQuery);
        allValues = filas.map(row) =>
          columnaNombres.map(col = > fila[col]).Únete(' ')
        );
      } Atrapar (err) {
        todosValores.push('[ERROR AL BUSCAR FILAS]');
      }
      sqlSchemaPrompt +=
        sqlCreateTableQuery + '\n' +
        sqlSelectTableQuery + '\n' +
        columnaNombres.unirse(' ') + '\n' +
        todosValores.Úne('\n') + '\n\n';
    }

    espera a la consultaCorredor.Lanzamiento();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

await getSQLPrompt();
return sqlSchemaPrompt;
```

## Paso 3: Generación de consultas SQL

Añade un nodo LLM conectado al nodo "Get DB Schema".

![Pasp 3](/img/tutoriales/sql/4.png)

### Configuración

- **Mensajes:** Añadir un mensaje del sistema:

```

Here is the relevant table info:
{{ customFunctionAgentflow_0 }}
Note:
- Only generate ONE SQL query

```

- **Salida estructurada JSON:** Aquí indicamos al modelo que solo devuelva la salida estructurada, para evitar que el LLM incluya otro texto distinto de la consulta SQL.

    - Clave: `"sql_query"`
    - Tipo: "cuerda"
    - Descripción: "consulta SQL"

- Actualizar estado del flujo: Establecer clave "" con valor `sql_query` `{{ output.sql_query }}`

Este nodo transforma la pregunta de lenguaje natural del usuario en una consulta SQL estructurada utilizando la información del esquema de la base de datos.

## Paso 4: Validación de la sintaxis de consultas SQL

Añade un nodo **Agente de Condición** conectado al LLM "Generar consulta SQL".

![Pasp 4](/img/tutoriales/sql/5.png)

### Configuración
- **Instrucciones:**

```
You are a SQL expert with a strong attention to detail. Double check the SQL query for common mistakes, including:
- Using NOT IN with NULL values
- Using UNION when UNION ALL should have been used
- Using BETWEEN for exclusive ranges
- Data type mismatch in predicates
- Properly quoting identifiers
- Using the correct number of arguments for functions
- Casting to the correct data type
- Using the proper columns for joins
```


- Entrada: `{{ $flow.state.sqlQuery }}`
- Escenarios:
    - Escenario 1: "La consulta SQL es correcta y no contiene errores"
    - Escenario 2: "La consulta SQL contiene errores"

Este paso de validación detecta errores SQL comunes antes de la ejecución.


## Paso 5: Gestión de la regeneración de consultas (ruta de error)

Para consultas incorrectas (salida 1) del nodo anterior del Agente de Condición, añade un nodo **Loop**.

![Pasp 5](/img/tutoriales/sql/6.png)

### Configuración:
![Pasp 5](/img/tutoriales/sql/7.png)

- Volver a a: "Generar consulta SQL"
- Recuento máximo de bucles: Configurado a 5

Esto crea un bucle de retroalimentación que permite al sistema intentar de nuevo la generación de consultas cuando falla la validación.


## Paso 6: Ejecutar consultas SQL válidas
Para consultas correctas (salida 0), añadir un nodo de **Función Personalizada.**

![Pasp 6](/img/tutoriales/sql/8.png)

### Configuración:

![Pasp 6](/img/tutoriales/sql/9.png)

- **Variables de entrada:** Aquí pasamos la consulta SQL generada como variable para usarse en la función.
    - Nombre de la variable: "sqlQuery"
    - Valor variable: `{{ $flow.state.sqlQuery }}`

- **Función Javascript:** Esta función ejecuta la consulta SQL validada contra la base de datos y formatea los resultados.


```js
const { DataSource } = require('typeorm');

const HOST = 'localhost';
const USER = 'testuser';
const PASSWORD = 'testpwd';
const DATABASE = 'testdatabase';
const PORT = 5432;

const sqlQuery = $sqlQuery;

const AppDataSource = nueva DataSource({
  Tipo: 'Postgres',
  PRESENTADOR: PRESENTADOR,
  PUERTO: PUERTO,
  nombre de usuario: USUARIO,
  contraseña: CONTRASEÑA,
  base de datos: DATABASE,
  sincronizar: false,
  Registro: falso,
});

let formattedResult = '';

función async  runSQLQuery(query) {
  Prueba {
    espera AppDataSource.inicializar();
    const queryRunner = AppDataSource.createQueryRunner();

    filas const = await queryRunner.consulta(consulta));
    consola.log('rows =', rows);

    si (filas.longitud === 0) {
      formattedResult = '[No se devolvieron resultados]';
    } si no, {
      const columnNames = Object.claves(filas[0]);
      encabezado const = nombrescolumn.Únete(' ');
      valores const = filas.map(row) =>
        columnaNombres.map(col = > fila[col]).Únete(' ')
      );

      formattedResult = consulta + '\n' + cabecera + '\n' + valores.Úne('\n');
    }

    espera a la consultaCorredor.Lanzamiento();
  } Atrapar (err) {
    consola.error('[ERROR]', err);
    formattedResult = '[Error al ejecutar la consulta]: ${err}`;
  }

  return formattedResult;
}

await runSQLQuery(sqlQuery);
return formattedResult;
```


## Paso 7: Comprobación de resultados de ejecución de consultas

Añade un nodo Agente de Condición conectado a la función **"Ejecutar consulta SQL"**.

![Pasp 7](/img/tutoriales/sql/10.png)

### Configuración:

- **Instrucciones:** "Eres un experto en SQL. Comprueba si el resultado de la consulta es correcto o contiene error."

- **Entrada:** `{{ customFunctionAgentflow_1 }}`

- **Escenarios:**
    - Escenario 1: "El resultado de la consulta es correcto y no contiene errores"
    - Escenario 2: "El resultado de la consulta contiene errores"

Este paso valida los resultados de la ejecución y determina si es necesaria una corrección adicional.



## Paso 8: Generar la respuesta final (Camino de Éxito)
Para resultados exitosos (salida 0 del Agente de Condición), añade un nodo **LLM**.

![Pasp 8](/img/tutoriales/sql/11.png)

### Configuración:

- **Mensaje de entrada:** `{{ customFunctionAgentflow_1 }}`

Este nodo genera una respuesta en lenguaje natural basada en los resultados exitosos de la consulta.


## Paso 9: Gestión de la regeneración de consultas (ruta de error en tiempo de ejecución)

Para ejecuciones fallidas (salida 1 desde Agent de Condición), añade un nodo **LLM.**

![Pasp 9](/img/tutoriales/sql/12.png)

### Configuración:

![Pasp 9](/img/tutoriales/sql/13.png)

- **Mensaje** Añadir el mismo mensaje de sistema que el Paso 3
- Mensaje de entrada:

```
Given the generated SQL Query: {{ $flow.state.sqlQuery }}
I have the following error: {{ customFunctionAgentflow_1 }}
Regenerate a new SQL Query that will fix the error
```

- **Salida estructurada en JSON:** igual que el Step 3
- **Actualizar estado del flujo:** Establecer clave "sqlQuery" con valor `{{ output.sql_query }}`

Este nodo analiza errores en tiempo de ejecución y genera consultas SQL corregidas.

## Paso 10: Añadir el segundo lazo de nuevo
Añade un nodo **Loop** conectado al LLM "Regenerate SQL Query".

![Pasp 10](/img/tutoriales/sql/14.png)

### Configuración:

- Volver a a: "Generar consulta SQL"
- Recuento máximo de bucles: Configurado a 5

Esto crea un segundo bucle de retroalimentación para la corrección de errores en tiempo de ejecución.

## Resumen

1. Empieza → consigue el esquema de la base de datos
2. Obtener el esquema de la base de datos → generar consulta SQL
3. Generar consulta SQL → comprobar consulta SQL
4. Comprobar consulta SQL (correcto) → ejecutar consulta SQL
5. Comprobar consulta SQL (incorrecta) → regenerar consulta (volver a bucle)
6. Ejecutar consulta SQL → Comprobar resultados
7. Comprobar resultado (éxito) → respuesta de devolución
8. Comprobar resultado (error) → regenerar consulta SQL
9. Regenerar consulta SQL → Volver a comprobar SQL Query (Loop back)


## Probando tu Agente SQL
Prueba a tu agente con varios tipos de preguntas sobre bases de datos:

- Preguntas sencillas: "Muéstrame a todos los clientes"
- Preguntas complejas: "¿Cuáles son los 5 productos más vendidos?"
- Consultas analíticas: "Calcular el valor medio del pedido por mes"

![Pasp 11](/img/tutoriales/sql/15.png)

Este flujo de Agentes SQL proporciona un sistema robusto y autocorrectible para interacciones con bases de datos que puede gestionar consultas SQL en lenguaje natural.
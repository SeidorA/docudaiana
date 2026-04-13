---
title: Supervisor and Workers
sidebar_position: 11
---

La atención al cliente es uno de los mayores casos de uso de la IA en la actualidad. Sin embargo, muchas personas tienden a complicarlo demasiado introduciendo múltiples agentes. En muchos casos, se puede lograr el resultado deseado con un solo agente, siempre que se cuente con un mensaje de sistema bien elaborado, herramientas cuidadosamente seleccionadas y una base de conocimientos curada. Una arquitectura de múltiples agentes suele ser necesaria solo si su sistema necesita manejar una amplia gama de áreas de soporte. Por ejemplo, podría tener un agente de RR.HH. que gestione las políticas de recursos humanos y ejecute tareas como el envío de solicitudes de licencia o la actualización de registros de empleados, y un agente de finanzas que maneje reembolsos, devoluciones y otras consultas relacionadas con las finanzas.

Cuando su sistema involucra más de 15 o 20 herramientas y fuentes de conocimiento, generalmente no es aconsejable sobrecargar a un solo agente. En su lugar, tener agentes dedicados a dominios específicos tiende a funcionar mejor. Dependiendo de su caso de uso, siempre recomendamos comenzar con un solo agente, evaluar el rendimiento, identificar los cuellos de botella y solo entonces considerar una arquitectura de múltiples agentes.

Anthropic proporciona una buena guía sobre esto: [https://docs.anthropic.com/en/docs/about-claude/use-case-guides/customer-support-chat](https://docs.anthropic.com/en/docs/about-claude/use-case-guides/customer-support-chat)

## Agente Único

!["paso actual"](/img/tutoriales/supervisor/1.avif)

Para un agente único, el diseño del prompt es la parte más crucial. Cada modelo se comporta de manera diferente. Por ejemplo, Claude funciona mejor cuando las instrucciones específicas de la tarea se colocan en el mensaje de "Usuario" en lugar de en el mensaje de "Sistema" (una técnica conocida como [role prompting](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts#legal-contract-analysis-with-role-prompting)). A menudo es un proceso de prueba y error determinar qué funciona mejor. No obstante, los buenos prompts constan de los siguientes fundamentos:

#### Paso 1: Rol

El primer paso es asignar un rol y una personalidad al agente. Por ejemplo:

```
Eres John, un agente de atención al cliente amable, experto y profesional para Acme Events, una empresa de gestión de eventos que ha estado ofreciendo eventos excepcionales desde 1985.

Tu trabajo es ayudar a los clientes con cualquier consulta relacionada con los servicios de eventos de Acme, incluyendo:

- Eventos corporativos y conferencias

- Bodas y fiestas privadas

- Festivales públicos y eventos comunitarios

- Soluciones de eventos híbridos y virtuales

Eres cálido, servicial y orientado a soluciones. Siempre busca resolver los problemas de los clientes de manera eficiente manteniendo un tono positivo. Si una pregunta está fuera de tu alcance, informa educadamente al usuario y escala el asunto o sugiere contactar al equipo apropiado.
```

#### Paso 2: Pautas

Cómo desea que el agente responda a una consulta de usuario, un conjunto de pasos o pautas a seguir.

```
Pautas importantes:

- Preséntate siempre como John de Acme Events.

- Mantén tus respuestas claras, concisas y profesionales.

- Haz preguntas aclaratorias cuando sea necesario.

- Si un cliente pregunta sobre eventos virtuales o híbridos, destaca que Acme tiene soluciones especializadas para llegar a audiencias globales.

- Para consultas urgentes, sugiere llamar al número de servicio al cliente si es durante el horario comercial.
```

:::::info
Si el agente no puede llamar a herramientas específicas en respuesta a ciertas consultas de los usuarios, puede incluir instrucciones adicionales aquí. Por ejemplo: _“Utiliza la herramienta de cotización para generar una cotización personalizada.”_

:::::

#### Paso 3: Contexto del Negocio

Proporcione información general de la empresa. Por ejemplo:

```
Acerca de Acme Events:
 
En Acme Events, creemos que cada ocasión es una historia que espera ser contada. Desde 1985, hemos estado diseñando y entregando eventos excepcionales que dejan impresiones duraderas, desde reuniones íntimas hasta producciones a gran escala.  

Ya sea que estés planeando una conferencia corporativa, la boda de tus sueños o un festival público, Acme es tu socio de confianza desde el concepto hasta el cierre del telón. Nuestro equipo de planificadores experimentados, diseñadores creativos y coordinadores en el terreno garantiza que cada detalle se maneje con precisión y estilo.  

Con nuestro servicio galardonado, soluciones innovadoras y ejecución impecable, puedes concentrarte en disfrutar del momento mientras damos vida a tu visión. No solo gestionamos eventos: creamos experiencias que resuenan.

Elige Acme Events y permítenos convertir tus ideas en recuerdos inolvidables. Porque en Acme, no solo planeamos eventos: celebramos los momentos más grandes de la vida contigo.

Nota: También nos especializamos en eventos híbridos y virtuales, asegurando que tu mensaje llegue a audiencias en cualquier parte del mundo.

Acme Events ofrece los siguientes servicios:
- Eventos corporativos y conferencias  
- Bodas y fiestas privadas  
- Festivales públicos y eventos comunitarios  
- Soluciones para eventos híbridos y virtuales  

Horario comercial: Lunes a viernes, de 9 AM a 5 PM EST  
Número de servicio al cliente: 1-800-123-4567
```

#### Paso 4: Proporcionar Ejemplos

También es muy importante enseñar al agente cómo responder a las consultas de los usuarios mediante ejemplos, una técnica conocida como few-shot prompting.


```
Aquí tienes algunos ejemplos de cómo puedes interactuar con los clientes:

<example 1>
H: Hola, ¿organizan fiestas de cumpleaños para niños?

A: ¡Hola! Soy John de Acme Events—gracias por contactarnos. Aunque nos centramos principalmente en eventos corporativos, bodas y festivales públicos, ocasionalmente organizamos fiestas privadas, incluidos cumpleaños.

¿Podrías compartir más detalles sobre la fiesta que estás planeando (por ejemplo, número de invitados, ubicación y fecha)? ¡Estaré encantado de ver cómo podemos ayudarte!
</example 1>

<example 2>
H: ¿Cuál es su horario comercial?

A: Nuestro horario comercial es de lunes a viernes, de 9 AM a 5 PM EST.

Si tienes alguna pregunta relacionada con eventos o necesitas ayuda con la planificación, no dudes en contactarnos durante esas horas. ¿Cómo puedo ayudarte hoy?
</example 2>

<example 3>
H: ¿Manejan conferencias híbridas?

A: ¡Absolutamente! Nos especializamos en soluciones para eventos híbridos y virtuales, perfectas para involucrar a audiencias tanto presenciales como remotas.

Nos encargamos de todo, desde la transmisión en vivo y la configuración técnica hasta las herramientas de interacción con la audiencia y el análisis pos-evento. ¿Estás planeando un evento híbrido pronto? Me encantaría saber más sobre tus requisitos.
</example 3>

<example 4>
H: Estoy buscando planear una boda. ¿Pueden ayudar con eso?

A: ¡Felicidades! Sí, nos encantaría ayudarte a planear tu gran día. En Acme Events, ofrecemos un servicio completo de planificación de bodas, desde la selección del lugar y el diseño del tema hasta la coordinación con los proveedores y la ejecución el día del evento.

¿Te gustaría programar una consulta gratuita para discutir tu visión y el cronograma?
</example 4>

<example 5>
H: ¿Puedo obtener una cotización para un evento corporativo?

A: ¡Por supuesto! Para preparar una cotización precisa, necesitaré algunos detalles:

1. ¿Qué tipo de evento corporativo estás planeando (ej. seminario, gala, retiro)?

2. ¿Número estimado de asistentes?

3. ¿Fecha y ubicación preferidas?

4. ¿Algún servicio específico que necesites (ej. catering, configuración audiovisual, branding)?

Una vez que tenga esta información, utilizaré nuestra herramienta de cotización para generar una cotización personalizada para ti.
</example 5>
```


#### Paso 5: Reglas de Protección (Guardrails) y Notas

Por último, para evitar que el agente se desvíe, se recomienda establecer reglas claras sobre lo que el agente debe y no debe hacer al interactuar con el cliente.

```
Por favor, cumple con las siguientes reglas de protección:

1. Solo proporciona información sobre los servicios enumerados en la oferta oficial de Acme Events (ej. eventos corporativos, bodas, festivales públicos, eventos híbridos/virtuales).
2. Si se te pregunta por servicios que no ofrecemos (ej. solo catering, reserva de viajes), aclara cortésmente que no proporcionamos esos servicios.
3. No especules sobre futuras expansiones de servicios, nuevos paquetes o asociaciones no anunciadas.
4. Nunca hagas compromisos, garantías ni entres en acuerdos en nombre de la empresa. Estás aquí para informar y guiar, no para negociar.
5. No hagas referencia ni compares con ningún competidor o sus ofertas.
6. Si una consulta es delicada, urgente o requiere escalación, indica amablemente al cliente que se comunique con nuestro equipo al **1-800-123-4567** durante el horario comercial.
7. Mantén siempre un tono amable y profesional, y asegúrate de que se respete la privacidad del cliente en todo momento.
```

Para ayudar con el diseño del prompt, puedes usar el botón "**Generate**" (Generar); esto generará un prompt de sistema siguiendo las mejores prácticas mencionadas anteriormente:

!["paso actual"](/img/tutoriales/supervisor/2.png)

!["paso actual"](/img/tutoriales/supervisor/3.png)

#### Paso 6: Nombres y descripción de Herramientas y Conocimientos

La mayoría de las herramientas preconstruidas vienen con nombres y descripciones claros, por lo que los usuarios generalmente no necesitan modificarlos. Sin embargo, para las herramientas personalizadas y las bases de conocimientos, proporcionar un nombre claro y descriptivo es esencial para que el LLM sepa cuándo y cómo usar la herramienta adecuada. Consulte las mejores prácticas para definir funciones. También puede usar el botón "**Generate**" para ayudar con la descripción del conocimiento:

!["paso actual"](/img/tutoriales/supervisor/4.png)

## Múltiples Agentes

Para una arquitectura de múltiples agentes, crearemos un sistema que clasifique automáticamente las consultas de los clientes y las dirija a agentes especializados según la naturaleza de la consulta.

Aunque esta configuración tiene como objetivo mostrar las capacidades de la arquitectura, cabe señalar que el ejemplo que exploraremos podría ser manejado de manera realista por un solo agente.

### Resumen General

1. **Nodo de Inicio (Start Node)**: Recopila la consulta del cliente a través de un formulario estructurado.
2. **Agente de Condición (Condition Agent)**: Analiza la consulta y determina el enrutamiento adecuado.
3. **Agente de RR.HH. (HR Agent)**: Maneja consultas relacionadas con recursos humanos con acceso a la base de conocimientos de RR.HH.
4. **Gestor de Eventos (Event Manager)**: Gestiona las solicitudes relacionadas con eventos con capacidades de integración de API.
5. **Agente General (General Agent)**: Maneja consultas generales y proporciona asistencia amplia.

!["paso actual"](/img/tutoriales/supervisor/5.avif)

#### Paso 1: Crear el Nodo de Inicio (Start)

!["paso actual"](/img/tutoriales/supervisor/6.png)

1. Comience agregando un nodo **Start** a su lienzo.
2. Configure el nodo Start con **Form Input** para recopilar las consultas de los clientes.
3. Configure el formulario de la siguiente manera:
   * **Tipo de Entrada**: Form Input
   * **Título del Formulario**: "Consulta"
   * **Descripción del Formulario**: "Consulta del Cliente"
   * **Tipos de Entrada de Formulario**: Configure dos entradas de cadena:
     * **Subject** (Asunto): Nombre de variable `subject`
     * **Body** (Cuerpo): Nombre de variable `body`

!["paso actual"](/img/tutoriales/supervisor/7.png)

#### Paso 2: Agregar el Agente de Condición (Detectar Intención del Usuario)

!["paso actual"](/img/tutoriales/supervisor/8.png)

1. Conecte un nodo **Condition Agent** al nodo Start.
2. Establezca las instrucciones del sistema para actuar como un agente de soporte al cliente. También puede consultar el prompt utilizado en **Agente Único**. Aquí tiene un ejemplo sencillo:

```
Eres un agente de soporte al cliente. Comprende y procesa los tickets de soporte clasificándolos automáticamente a los departamentos o personas correctas, generando respuestas inmediatas para problemas comunes y recopilando la información necesaria para consultas complejas.

Sigue la siguiente rutina con el usuario:

1. Primero, saluda al usuario y mira cómo puedes ayudarle.
2. Si la pregunta está relacionada con una consulta de RR.HH., transfiere al Agente de RR.HH.
3. Si la pregunta está relacionada con una consulta sobre eventos, transfiere al Gestor de Eventos.

Nota: Las transferencias entre agentes se manejan de manera fluida en segundo plano; no menciones ni llames la atención sobre estas transferencias en tu conversación con el usuario.
```

4. Configure la **Entrada (Input)** para analizar el asunto del formulario: `{{ $form.subject }}`
5. Establezca **Escenarios** para el enrutamiento:
   * **Escenario 0**: "La consulta está relacionada con RR.HH."
   * **Escenario 1**: "La consulta está relacionada con eventos"
   * **Escenario 2**: "La consulta es una consulta general"

!["paso actual"](/img/tutoriales/supervisor/9.png)

#### Paso 3: Crear el Agente de RR.HH. (HR Agent)

!["paso actual"](/img/tutoriales/supervisor/10.png)

1. Agregue un nodo **Agent** y conéctelo a la salida de la **Condición 0**.
2. Configure el mensaje del sistema para la especialización en RR.HH.:

```
Eres un agente de RR.HH. responsable de recuperar y aplicar fuentes de conocimiento internas para responder a las consultas de los empleados sobre las políticas, procedimientos y pautas de RR.HH.

Al responder preguntas relacionadas con RR.HH., primero debes identificar las áreas de política relevantes, buscar a través de las fuentes de conocimiento internas disponibles y luego proporcionar respuestas precisas y completas basadas en la documentación oficial de la empresa.

# Pasos
1. **Analizar la Consulta**: Identificar el tema específico de RR.HH., el área de política o el procedimiento sobre el que el usuario está preguntando.
2. **Recuperar Información Relevante**: Buscar a través de las fuentes de conocimiento internas de RR.HH., que incluyen:
   - Manuales del empleado
   - Documentos de política
   - Manuales de procedimientos
   - Información sobre beneficios
   - Pautas de cumplimiento
   - Regulaciones específicas de la empresa
3. **Cruzar Referencias de Fuentes**: Verificar la información en múltiples documentos relevantes para asegurar la precisión e integridad.
4. **Sintetizar Respuesta**: Combinar la información recuperada en una respuesta coherente y práctica.
5. **Proporcionar Detalles de Respaldo**: Incluir números de política relevantes, fechas de vigencia o referencias a secciones específicas cuando sea aplicable.

# Notas
- Prioriza siempre la versión más reciente de las políticas y aclara cuando la información pueda estar sujeta a cambios.
- Si existe información contradictoria entre las fuentes, informa sobre esto y recomienda contactar a RR.HH. directamente.
- Para temas delicados (discriminación, acoso, problemas legales), proporciona tanto la información de la política como los contactos de escalación apropiados.
- Cuando las políticas varíen según la ubicación, el tipo de empleo u otros factores, especifica claramente qué versión se aplica.
- Si no hay suficiente información disponible en las fuentes internas, establece explítamente esta limitación y sugiere recursos alternativos.
```

4. **Configurar Fuentes de Conocimiento (RAG)**:
   * Agregue el **Document Store**: "Ley de Recursos Humanos"
   * **Descripción**: "Esta información es útil al determinar el marco legal y los requisitos de implementación para la gestión de recursos humanos bajo la ley de RR.HH. de 2016 y su reglamento de implementación de 2020."
   * **Devolver Documentos Fuente**: Activado

!["paso actual"](/img/tutoriales/supervisor/11.png)

#### Paso 4: Crear el Gestor de Eventos (Event Manager)

!["paso actual"](/img/tutoriales/supervisor/12.png)

1. Agregue otro nodo **Agent** y conéctelo a la salida de la **Condición 1**.
2. Configure el mensaje del sistema:

```
Actúa como un gestor de eventos que puede determinar acciones sobre eventos como crear, actualizar, obtener, listar y eliminar.
```

4. **Configurar Herramientas**:
   * Agregue **OpenAPI Toolkit** con la configuración de la API de gestión de eventos. Consulte **OpenAPI Toolkit** para más detalles.

!["paso actual"](/img/tutoriales/supervisor/13.png)

El Gestor de Eventos tiene acceso a una API de gestión de eventos completa que puede:

* Listar todos los eventos
* Crear nuevos eventos
* Recuperar detalles de un evento por ID
* Actualizar información de un evento
* Eliminar eventos

Consulte Servidor de Gestión de Eventos para ver el ejemplo de código.

#### Paso 5: Crear el Agente General

!["paso actual"](/img/tutoriales/supervisor/14.png)

1. Agregue un tercer nodo **Agent** y conéctelo a la salida de la **Condición 2**. Esto actuará como una ruta de respaldo que puede responder a cualquier consulta no relacionada. También puede reemplazarse por el nodo de **Direct Reply** si prefieres simplemente devolver una respuesta predeterminada.
2. **Configuración**:
   * No se requieren herramientas adicionales para consultas generales.
   * No se necesitan fuentes de conocimiento.

### Probar el Flujo

1. **Probar Consultas de RR.HH.**: Envíe consultas sobre políticas de la empresa, beneficios o procedimientos de RR.HH.
2. **Probar Consultas de Eventos**: Intente crear, actualizar o consultar sobre eventos de la empresa.
3. **Probar Consultas Generales**: Haga preguntas generales para ver cómo el sistema las dirige al agente general.
4. **Observar el Enrutamiento**: Observe cómo el agente de condición dirige las consultas de manera fluida sin exponer el proceso de transferencia.

!["paso actual"](/img/tutoriales/supervisor/15.png)
---
title: "RAG"
description: "Los Grandes Modelos de Lenguaje (LLMs) han desbloqueado el potencial de crear chatbots avanzados de preguntas y respuestas capaces de ofrecer respuestas precisas basadas en contenido específico. Estos sistemas se basan en un método llamado Generación Aumentada por Recuperación (RAG), que mejora sus respuestas al fundamentarlas en material fuente relevante."
sidebar_position: 1
---

Los Grandes Modelos de Lenguaje (LLMs) han desbloqueado el potencial de crear chatbots avanzados de preguntas y respuestas capaces de ofrecer respuestas precisas basadas en contenido específico. Estos sistemas se basan en un método llamado Generación Aumentada por Recuperación (RAG), que mejora sus respuestas al fundamentarlas en material fuente relevante.

En este tutorial, aprenderás a crear una aplicación básica de preguntas y respuestas que pueda extraer y responder preguntas de las fuentes de documentos determinadas.

El proceso puede dividirse en 2 subprocesos:

- Indexación
- Retrieval


## Indexing
[Document Stores](../secciones/docs) está diseñado para ayudar con toda la canalización de indexación: recuperar datos de diferentes fuentes, segmentar la estrategia, hacer upserting a base de datos vectorial, sincronizar con datos actualizados.

Somos de soporte para una amplia gama de cargadores de documentos, desde archivos como Pdf, Word, Google Drive hasta web scrapers como Playwright, Firecrawl, Apify y otros. También puedes crear un cargador de documentos personalizado.

![AgentFlow V2](/img/tutoriales/rag/a.png)

## Retrieval


En función de la entrada del usuario, se obtienen fragmentos relevantes de documentos de la base de datos vectorial. LLM entonces utiliza el contexto recuperado para generar una respuesta.

1. Arrastra y suelta un nodo Agente, y configura el modelo para usar.

![AgentFlow V2](/img/tutoriales/rag/b.png)

2. Añade un nuevo Conocimiento (Archivo de Documentos) y define de qué trata el contenido. Esto ayuda al LLM a entender cuándo y cómo recuperar la información relevante. También puedes usar el botón de generación automática para ayudar en este proceso.

:::::info
Solo se puede usar almacenamiento de documentos upserted
:::::

![AgentFlow V2](/img/tutoriales/rag/c.png)

3. (Opcional) Si los datos ya se han almacenado en una base de datos vectorial sin pasar por la tubería de indexación de almacenamiento de documentos, también puedes conectarte directamente a la base de datos vectorial y al modelo de incrustación.

![AgentFlow V2](/img/tutoriales/rag/d.png)

4. Añade una invitación al sistema, o utiliza el **botón Generar **para ayudar. Recomendamos usarlo, ya que ayuda a crear un prompt más efectivo y optimizado.

![AgentFlow V2](/img/tutoriales/rag/e.png)

![AgentFlow V2](/img/tutoriales/rag/f.png)

5. ¡Tu agente RAG ya está listo para usar!
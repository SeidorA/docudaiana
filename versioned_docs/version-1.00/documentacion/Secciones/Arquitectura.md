---
title: "Arquitectura del sistema"
sidebar_position: 1
---
## Descripción General

La plataforma Daiana se basa en una arquitectura cliente-servidor, donde el servidor es una aplicación web que gestiona la creación y publicación de los asistentes virtuales basados en Inteligencia Artificial.

## Componentes del Sistema

-   **Frontend:** Capa de presentación de la aplicación, la cual fue desarrollada sobre el framework NextJs y paquetizada por medio de contenedores. El usuario final accede a la misma por medio de su navegador.
-   **Backend:** Capa de lógica de la aplicación, la cual interactúa con la base de datos que aloja la información a consultar, el modelo de IA y la base de datos de la aplicación (PostgreSQL).
-   **Base de datos:** Base de datos que contiene la información a consultar, la cual se presentara al usuario ante cada consulta.
-   **Modelo IA:** Este componente es el que permite traducir las preguntas realizadas por los usuarios en lenguaje natural a consultas SQL.
-   **PostgreSQL:** Es la base de datos de la aplicación, que aloja información de los bots creados, usuarios, teams, historial de conversaciones, etc.

![](../img/mood.png)
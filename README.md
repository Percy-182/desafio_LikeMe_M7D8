# Desafío - Like Me 🎵

Consultas con texto parametrizado, JSON como argumento de una consulta, Insertando registros, Consultando registros y Actualizando registros.

## Descripción

La red social “Like Me” está apenas iniciando el proceso de desarrollo, se encuentra
estudiando el mercado y analizando la competencia, ha descubierto que el éxito de esta
industria se enfoca en los likes de los posts emitidos por los usuarios, por lo que decidió
iniciar con el desarrollo de la lógica correspondiente a la creación de posts y a la interacción
de likes que este puede tener.
En este desafío serás un desarrollador full stack developer de la empresa “Like Me” y
deberás crear un servidor que disponibilice las rutas para guardar y consultar los posts en
una base de datos PostgreSQL con el paquete pg, además de una ruta que utilice un
parámetro “id” para sumar likes al post clickeado desde la aplicación cliente

## Requerimientos📜

1. Disponibilizar una ruta POST /post que utilice una función asíncrona para emitir una
   consulta SQL parametrizada y almacenar un nuevo post en la tabla posts.
   (3 Puntos)
2. Disponibilizar una ruta PUT /post que utilice una función asíncrona para emitir una
   consulta SQL y sume un like a un post identificado por su id. Considera que este dato
   es enviado como query strings.
   (3 Puntos)
3. Disponibilizar una ruta GET /posts que utilice una función asíncrona para emitir una
   consulta SQL y devuelva todos los posts de la tabla posts.
   (4 Puntos)

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

```bash
git git@github.com:Percy-182/desafio_LikeMe_M7D8.git
```

### Pre-requisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo (Ubuntu 20.04, Windows 10, MacOS 10.15)
- Navegador (Firefox, Opera, Chrome, Brave, Safari)

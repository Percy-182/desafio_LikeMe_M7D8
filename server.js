const express = require("express"); //Importa el módulo Express, que es un framework web para Node.js.
const app = express(); //Crea una aplicación Express.
const port = 3000; //Define el número de puerto en el que la aplicación escuchará las solicitudes.
const path = require("path");

app.use(express.json());

const { guardarPost, getPosts, like } = require("./consultas");

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Guardar posts.
app.post("/post", async (req, res) => {
  try {
    //Variables del script en el HTML que guardan la info del usuario.
    const { usuario, URL, descripcion } = req.body;
    const likes = 0;
    const result = await guardarPost([usuario, URL, descripcion, likes]);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

//devuelve
app.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/post", async (req, res) => {
  try {
    let { id } = req.query;
    const posts = await like(id);
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Define una ruta genérica para manejar cualquier otra solicitud que no coincida con las rutas definidas anteriormente. En este caso, simplemente devuelve un mensaje indicando que la página no existe.
app.get("*", (req, res) => {
  //
  res.send("Esta página no existe");
});

//Inicia el servidor Express y lo hace escuchar en el puerto especificado. También imprime un mensaje en la consola indicando la URL donde se puede acceder al servidor.
app.listen(
  port,
  console.log(
    `El servidor está inicializado en el puerto http://localhost:${port}`
  )
);

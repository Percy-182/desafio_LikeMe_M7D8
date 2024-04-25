// Importa un módulo llamado "pool" desde el archivo "./dbConfig.js". Presumiblemente, este módulo contiene una configuración de conexión a la base de datos.
const pool = require("./dbConfig");

//Guardar posts
const guardarPost = async (titulo, img, descripcion, likes) => {
  const consulta = {
    text: "INSERT INTO posts (titulo, img, descripcion, likes) values ($1, $2, $3, $4)",
    values: titulo,
    img,
    descripcion,
    likes,
  };
  const result = await pool.query(consulta);
  return result;
};

//devolver posts
const getPosts = async () => {
  const result = await pool.query(`SELECT * FROM posts`);
  return result.rows;
};

const like = async (id) => {
  const result = await pool.query(
    `UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *`,
    [id]
  );
  return result.rows;
};

module.exports = { guardarPost, getPosts, like };

//( titulo, img, descripcion, likes )

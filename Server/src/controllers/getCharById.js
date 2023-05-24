const axios = require("axios");

const getCharById = (res, id) => {
  return axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { data } = response;
      const { name, gender, species, origin, image, status } = data;

      //Se crea el objeto con las propiedades del personaje
      const character = { id, name, gender, species, origin, image, status };

      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(character));
      // res.writeHead(200).json(character)
    })
    .catch((error) => {
      res.writeHead(500, { "Content-type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = { getCharById };

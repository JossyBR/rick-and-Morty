const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params.id;

  return axios
    .get(`${URL}${id}`)
    .then((response) => {
      const character = response.data;

      if (character.error) {
        res.status(404).json({ message: "Not fount" });
      } else {
        const { id, status, name, species, origin, image, gender } =
        character;
        res.json({
          id,
          status,
          name,
          species,
          origin,
          image,
          gender,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

module.exports = { getCharById };

// const getCharById = (res, id) => {
//   return axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const { data } = response;
//       const { name, gender, species, origin, image, status } = data;

//       //Se crea el objeto con las propiedades del personaje
//       const character = { id, name, gender, species, origin, image, status };

//       res.writeHead(200, { "Content-type": "application/json" });
//       res.end(JSON.stringify(character));
//       // res.writeHead(200).json(character)
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-type": "text/plain" });
//       res.end(error.message);
//     });
// };

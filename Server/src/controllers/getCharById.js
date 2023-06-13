const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  
    try {
      const { id } = req.params;
      const { status, name, species, origin, image, gender } = (await axios.get(URL + id)).data;
      const character = { id, status, name, species, origin, image, gender };

      return character.name
        ? res.status(200).json(character)
        : res.status(404).send("Not fount");

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = getCharById;









// const getCharById = async (req, res) => {
//   const { id } = req.params;

//   await axios.get(URL + id)
//     .then(({ data }) => {
//       const { status, name, species, origin, image, gender } = data;
//       const character = { id, status, name, species, origin, image, gender };

//       // res.status(200).json(character);
//       return character.name
//         ? res.status(200).json(character)
//         : res.status(404).send("Not fount");

//       // if (character.name) {
//       //   res.status(200).json(character);
//       // } else {
//       //   res.status(404).send("Not fount");
//       //   // const { id, status, name, species, origin, image, gender } =
//       //   // character;
//       //   // res.json({ id, status, name,species, origin, image, gender,
//       //   // });
//       // }
//     })
//     .catch((error) => {
//       return res.status(500).send(error.message);
//     });
// };





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

/*
res.status(200).json({})

*/

const PORT = 3001;
const server = require("./app");

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});







// const express = require("express");
// const server = express();

// const router = require("./routes/routes");

// //Middlewares
// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });

//  server.use(express.json());

//  server.use('/rickandmorty', router);

// const data = require("./utils/data.js");
// const http = require("http");
// const { getCharById } = require("./controllers/getCharById");

// const PRQ = 3001;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if (url.includes("/rickandmorty/character/")) {
//       const id = url.split("/").pop();
//       getCharById(res, +id);
//     }

//     //   if (url.includes("/rickandmorty/character")) {
//     //     const id = Number(url.split("/").pop()); //Se utiliza el método split para dividir la URL por el carácter "/" y  pop para obtener el último elemento del array resultante, que corresponde al ID del personaje.
//     //     const character = data.find((char) => {
//     //       return char.id === id;
//     //     });

//     //     res.writeHead(200, { "Content-type": "application/json" });
//     //     res.end(JSON.stringify(character));
//     //   }
//   })
//   .listen(PRQ, "localhost");

// const express = require("express");
// const router = express.Router();

//Tambien Puedo desestructurar
// const { Router } = require("express");
// const router = Router();

// const getCharById = require("../controllers/getCharById.js");
// const { postFav, deleteFav } = require("../controllers/handleFavorites.js");
// const login = require("../controllers/login.js");

// //Rutas
// router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);

// module.exports = router;

const router = require('express').Router();

const {getCharById} = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

router.get("/character/:id", getCharById)
router.get("/login", login)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;

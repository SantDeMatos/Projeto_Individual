var express = require("express");
var router = express.Router();

var gerenteController = require("../controllers/gerenteController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.get("/listar_clubes/:id", function (req, res) {
    gerenteController.listar_clubes(req, res);
})



router.post("/autenticar", function (req, res) {
    gerenteController.autenticar(req, res);
});

module.exports = router;
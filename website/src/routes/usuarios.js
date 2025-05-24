var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/resposta", function (req, res) {
    usuarioController.resposta(req, res);
})

router.post("/favoritarclube", function (req, res) {
    usuarioController.favoritarclube(req, res);
})


router.post("/favoritarjogador", function (req, res) {
    usuarioController.favoritarjogador(req, res);
})

router.get("/listar_jogadores/:id", function (req, res) {
    usuarioController.listar_jogadores(req, res);
})

router.get("/listar_clubes/:id", function (req, res) {
    usuarioController.listar_clubes(req, res);
})



router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;
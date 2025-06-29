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


router.get("/listar_jog/:id", function (req, res) {
    usuarioController.listar_jog(req, res);
})


router.get("/listar_clu/:id", function (req, res) {
    usuarioController.listar_clu(req, res);
})

router.get("/dicas/:id", function (req, res) {
    usuarioController.dicas(req, res);
})



router.get("/listar_clubes/:id", function (req, res) {
    usuarioController.listar_clubes(req, res);
})



router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


router.post("/del_clu", function (req, res) {
    usuarioController.del_clu(req, res);
});


router.post("/del_jog", function (req, res) {
    usuarioController.del_jog(req, res);
});

module.exports = router;
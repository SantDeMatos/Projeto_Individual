var express = require("express");
var router = express.Router();

var gerenteController = require("../controllers/gerenteController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.get("/kpi", function (req, res) {
    gerenteController.kpi(req, res);
})


router.get("/kpi2", function (req, res) {
    gerenteController.kpi2(req, res);
})


router.get("/kpi3", function (req, res) {
    gerenteController.kpi3(req, res);
})


router.get("/dados_graf", function (req, res) {
    gerenteController.dados_graf(req, res);
})

router.get("/dados_graf2", function (req, res) {
    gerenteController.dados_graf2(req, res);
})

router.get("/dados_graf3", function (req, res) {
    gerenteController.dados_graf3(req, res);
})









module.exports = router;
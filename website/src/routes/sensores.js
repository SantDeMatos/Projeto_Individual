var express = require("express");
var router = express.Router();

var sensoresController = require("../controllers/sensoresController");

router.get("/listar/:idviveiro", function (req, res) {
    sensoresController.listar(req, res);
});

module.exports = router;
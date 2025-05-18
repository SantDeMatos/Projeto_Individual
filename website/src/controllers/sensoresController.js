var sensoresModel = require("../models/sensoresModel");

function listar(req, res) {
    var idviveiro = req.params.idviveiro

    sensoresModel.listar(idviveiro).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar
}


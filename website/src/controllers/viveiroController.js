var viveiroModel = require("../models/viveiroModel");

function vizualizarViveiros(req, res) {
    var id = req.params.id;

    viveiroModel.vizualizarViveiros(id)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    vizualizarViveiros
};

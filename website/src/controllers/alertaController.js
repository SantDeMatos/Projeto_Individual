var alertaModel = require("../models/alertaModel")

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeSensor = req.body.nomeSensor;
    var ppmAlerta = req.body.ppmAlerta;
    var descricaoAlerta = req.body.descricaoAlerta;
    var nomeViveiro = req.body.nomeViveiro;
    var nomeAlerta = req.body.nomeAlerta;
    var areaSensor = req.body.areaSensor;


    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    alertaModel.cadastrar(nomeAlerta, nomeSensor, ppmAlerta, descricaoAlerta, nomeViveiro, areaSensor)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarViveiros(req, res) {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    alertaModel.listarViveiros()
        .then(function (resultado) {

            // precisamos informar que o resultado voltará para o front-end como uma resposta em json
            res.json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            })
}

function listarAlertas(req, res){

     alertaModel.listarAlertas()
        .then(function (resultado) {

            // precisamos informar que o resultado voltará para o front-end como uma resposta em json
            res.status(200).json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            })
}


let filtroAtual = null; // variavel temporária (você pode usar sessões ou banco depois)
let SegundoFiltro = null;

function receberFiltro(req, res) {
    var filtro = req.body.nomeViveiro;

    filtroAtual = filtro;
    res.json({ mensagem: 'Filtro recebido com sucesso' });
};

function receberFiltroSensor(req, res) {
    var filtro = req.body.nomeViveiro;
    var segundo = req.body.areaSensor;

    filtroAtual = filtro;
    SegundoFiltro = segundo;
    res.json({ mensagem: 'Filtro recebido com sucesso' });
};

function listarSensores(req, res) {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    alertaModel.listarSensores(filtroAtual, SegundoFiltro)
        .then(function (resultado) {

            // precisamos informar que o resultado voltará para o front-end como uma resposta em json
            res.status(200).json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            })
}


function listarAreas(req, res) {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    alertaModel.listarAreas(filtroAtual)
        .then(function (resultado) {

            // precisamos informar que o resultado voltará para o front-end como uma resposta em json
            res.status(200).json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            })
}

module.exports = {
    cadastrar,
    listarViveiros,
    listarSensores,
    listarAreas,
    receberFiltro,
    receberFiltroSensor,
    listarAlertas
}
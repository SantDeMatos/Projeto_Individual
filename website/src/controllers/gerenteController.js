var gerenteModel = require("../models/gerenteModel");


function kpi(req,res){
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gerenteModel.kpi()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a inserção do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


    
function kpi2(req,res){
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gerenteModel.kpi2()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a inserção do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


    
function kpi3(req,res){
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gerenteModel.kpi3()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a inserção do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


       
function dados_graf(req,res){
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gerenteModel.dados_graf()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a inserção do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


    

       
function dados_graf2(req,res){
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gerenteModel.dados_graf2()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a inserção do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


    function dados_graf3(req,res){
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gerenteModel.dados_graf3()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a inserção do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }






module.exports = {
    kpi,
    kpi2,
    kpi3,
    dados_graf,
    dados_graf2,
    dados_graf3
}
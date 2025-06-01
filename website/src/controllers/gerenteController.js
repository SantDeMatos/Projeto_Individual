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



    
    function cadastrar_gen(req, res){
    
        var nome = req.body.nome;
        var email = req.body.email;
        var telefone = req.body.telefone;
      
    
         if (nome == undefined) {
            res.status(400).send("Seu nome está undefined");
        }  else if (email == undefined) {
            res.status(400).send("Seu email está undefined");
        } else if(telefone == undefined){
            res.status(400).send("Seu telefone está undefined");
        } else{
    
                    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            gerenteModel.cadastrar_gen(nome,email,telefone)
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
    
    
    }
    
      function listar(req,res){

     var id = req.params.id

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gerenteModel.listar(id)
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
    


    
    function deletar(req, res){
    
        var id= req.body.id;
       
         if (id == undefined) {
            res.status(400).send("Seu id está undefined");
        } else{  
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            gerenteModel.deletar(id)
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
    
    
    }

module.exports = {
    kpi,
    kpi2,
    kpi3,
    dados_graf,
    dados_graf2,
    dados_graf3,
    cadastrar_gen,
    listar,
    deletar
}
var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    res.json({
                        id: resultadoAutenticar[0].idusuario,
                        email: resultadoAutenticar[0].email,
                        cargo: resultadoAutenticar[0].cargo,
                          telefone: resultadoAutenticar[0].telefone,
                        senha: resultadoAutenticar[0].senha,
                        nome: resultadoAutenticar[0].nome
                    });
                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}




function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var telefone = req.body.telefoneServer;
    var senha = req.body.senhaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, telefone,senha)
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
}

function resposta(req, res){

    var posicao = req.body.posicao
    var nota = req.body.nota
    var id = req.body.idusuario

     if (posicao == undefined) {
        res.status(400).send("Seu op1 está undefined!");
    }  else if (nota == undefined) {
        res.status(400).send("Sua nota está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.resposta(posicao,nota,id)
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


function listar_jogadores(req,res){

         var id = req.params.id

    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.listar_jogadores(id)
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


    
function listar_clubes(req,res){

     var id = req.params.id

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.listar_clubes(id)
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


    function listar_jog(req,res){

     var id = req.params.id

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.listar_jog(id)
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


    
    function listar_clu(req,res){

     var id = req.params.id

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.listar_clu(id)
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




function favoritarclube(req, res){

    var idusuario = req.body.idusuario
    var idclu = req.body.idclu

  

     if (idusuario == undefined) {
        res.status(400).send("Seu id do usuário está undefined");
    }  else if (idclu == undefined) {
        res.status(400).send("Sua nota está undefined!");
    } else{

                
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.favoritarclube(idusuario,idclu)
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


function favoritarjogador(req, res){

    var idusuario = req.body.idusuario
    var idjog = req.body.idjog



     if (idusuario == undefined) {
        res.status(400).send("Seu id do usuário está undefined");
    }  else if (idjog == undefined) {
        res.status(400).send("Sua idjog está undefined!");
    } else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.favoritarjogador(idusuario,idjog)
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




    function dicas(req,res){

     var id = req.params.id

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.dicas(id)
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
    autenticar,
    cadastrar,
    resposta,
    listar_jogadores,
    listar_clubes,
    favoritarclube,
    favoritarjogador,
    listar_jog,
    listar_clu,
    dicas
}
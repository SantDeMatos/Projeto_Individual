var database = require("../database/config")

function cadastrar(nomeAlerta, nomeSensor, ppmAlerta, descricaoAlerta, nomeViveiro, areaSensor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeSensor, ppmAlerta, descricaoAlerta);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into Alerta (nomeSensor, nomeAlerta, ppmAlerta, descricaoAlerta, fkSensor)
            select '${nomeSensor}','${nomeAlerta}', ${ppmAlerta}, '${descricaoAlerta}', idSensor
            from sensor
                where nomeSensor = '${nomeSensor}' and fkViveiro =
                    (select fkViveiro 
                        from sensor
                            join viveiro v
                                on fkViveiro = idViveiro
                                where v.nome = '${nomeViveiro}'
                                and nomeSensor = '${nomeSensor}')
                    and areaSensor = '${areaSensor}'


            `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarViveiros() {
    var instrucao = ` 
        select nome from viveiro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAlertas() {
    var instrucao = ` 
        select *, v.nome from alerta
                      join sensor on fkSensor = idSensor
                        join viveiro v on fkViveiro = idViveiro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarSensores(nomeViveiro, areaSensor) {
    var instrucao = ` 
        select nomeSensor from sensor
        where fkViveiro = (select idViveiro from viveiro where nome = '${nomeViveiro}')
        and areaSensor = '${areaSensor}'; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAreas(nomeViveiro) {
    var instrucao = ` 
        select areaSensor from sensor
        where fkViveiro = (select idViveiro from viveiro where nome = '${nomeViveiro}'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarViveiros,
    listarSensores,
    listarAreas,
    listarAlertas
};
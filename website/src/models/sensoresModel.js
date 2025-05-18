var database = require("../database/config")

function listar(idviveiro) {
    var instrucao = `
               select sensor.nomeSensor,sensor.areaSensor, registros.qtdPpm, viveiro.nome,viveiro.fkTipoCafe, tpcafe.nome  from sensor join registros on fksensor = idsensor join viveiro on fkViveiro = idViveiro join tpCafe on fkTipoCafe = idtipo where idViveiro = ${idviveiro};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};



var database = require("../database/config");

function vizualizarViveiros(id) {
    const instrucaoSql = `
        SELECT 
            v.idViveiro,
            v.nome AS nomeViveiro,
            v.tamanho,
            e.nomeFantasia AS empresa,
            t.nome AS tipoCafe,
            t.ppmMin,
            t.ppmMax,
            vc.statusCultivo,
            r.qtdPpm
        FROM viveiro v
        JOIN sensor s ON v.idViveiro = s.fkViveiro
        JOIN Empresa e ON v.fkEmpresa = e.idEmpresa
        JOIN tpcafe t ON v.fkTipoCafe = t.idTipo
        JOIN Registros r on r.fkSensor = s.idSensor
        LEFT JOIN ViveiroCafe vc ON v.idViveiro = vc.fkViveiro where e.idEmpresa = ${id};
    `;
    console.log(id + "Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    vizualizarViveiros
}
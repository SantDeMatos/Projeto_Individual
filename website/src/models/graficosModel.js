var database = require("../database/config");

console.log("ENTROU EM graficosModel.js");

function exibirGraficos(id) {

    var instrucaoSql = `

  select 
    reg.qtdPpm, 
    reg.dtRegistro, 
    reg.horaRegistro
from
    Registros as reg
join 
    sensor as sen on reg.fkSensor = sen.idSensor
join 
    viveiro as viv on sen.fkViveiro = viv.idViveiro
join
    empresa as emp on viv.fkEmpresa = emp.idEmpresa
where 
    emp.idEmpresa = ${id} and 
order by
    reg.dtRegistro, reg.horaRegistro;
`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    exibirGraficos
}

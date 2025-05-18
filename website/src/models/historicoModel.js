
var database = require("../database/config")

function listar(id) {
    var instrucao = `
    select 
    reg.qtdPpm, 
    reg.dtRegistro, 
    viv.nome, 
    reg.horaRegistro, 
    sen.areaSensor, 
    al.nomeAlerta 
    from 
    Registros 
    as reg join alerta as al on 
    reg.fkalerta = al.idalerta 
    join sensor as sen on reg.fksensor = sen.idSensor 
    join viveiro as viv on  
    sen.fkViveiro = viv.idViveiro 
    join empresa as emp on viv.fkEmpresa = emp.idEmpresa 
    where idEmpresa = ${id} order by dtRegistro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao + id);
    return database.executar(instrucao);
}

module.exports = {
    listar
};



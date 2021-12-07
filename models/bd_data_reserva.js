const connection = require('../infraestrutura/connection');
const controle_data_hora = require('../infraestrutura/data');

class Reservas{
    criar_reserva(reserva, res){

        const sql = 'INSERT INTO data SET ?';

       // noticia["dia"]=controle_data_hora.data();

       
        connection.query(sql, reserva, (erro, result) => {
            if(erro){
                res.status(400).send({
                    status:"400",
                    msg:"Erro ao cadastrar reserva",
                    detalhe:erro
                });
            }else{
                res.status(200).send({
                    status:"200",
                    msg:"Reserva cadastrada com sucesso",
                    detalhe:result
                });
            }
        });
    }

    exibir_reservas(res){

        const sql = `SELECT * from data ORDER BY dia,mes,ano desc`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    buscar_disponibilidade(dia, mes, ano, res){

        const sql = `SELECT * from data WHERE dia=${dia},mes=${mes},ano=${ano}`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    editar_reserva(reserva, id, res){

        const sql = `UPDATE data SET ? WHERE id=${id}`;

        connection.query(sql, noticia, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    excluir_reserva(id, res){

        const sql = `DELETE from data WHERE reservaid=${id}`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });

    }
}

module.exports = new Reservas
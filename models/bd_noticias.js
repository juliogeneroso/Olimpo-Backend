const connection = require('../infraestrutura/connection');
const controle_data_hora = require('../infraestrutura/data');

class Noticias{
    criar_noticia(noticia, res){

        const sql = 'INSERT INTO noticias SET ?';

        noticia["dia"]=controle_data_hora.data();

        connection.query(sql, noticia, (erro, result) => {
            if(erro){
                res.status(400).send({
                    status:"400",
                    msg:"Erro ao cadastrar notícia",
                    detalhe:erro
                });
            }else{
                res.status(200).send({
                    status:"200",
                    msg:"Noticia cadastrada com sucesso",
                    detalhe:result
                });
            }
        });
    }

    exibir_noticias(res){

        const sql = `SELECT * from noticias`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }
    buscar_noticia(id, res){

        const sql = `SELECT * from noticias WHERE id=${id}`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    editar_noticia(noticia, id, res){

        const sql = `UPDATE noticias SET ? WHERE id=${id}`;

        connection.query(sql, noticia, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    excluir_noticia(id, res){

        const sql = `DELETE from noticias WHERE id=${id}`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });

    }
}

module.exports = new Noticias
const connection = require('../infraestrutura/connection');
const controle_data_hora = require('../infraestrutura/data');

class Produto{
    produto_pendente(pendente){
    
        const sql = 'INSERT INTO entregas_pendentes SET ?'
        
        console.log(pendente);

        connection.query(sql, pendente, (erro,result)=>{
            if(erro){
                console.log('erro');
            }else{
                console.log(result);
            }
        });
    }

    produto_concluido(concluido){

        concluido['hora'] = controle_data_hora.hora();
        concluido['dia'] = controle_data_hora.data();

        const sql = 'INSERT INTO entregas_concluidas WHERE ?';

        connection.query(sql, concluido, (erro,result)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(result);
            }
        });
    }

    excluir_pendentes(excluir){

        const sql = `DELETE FROM entregas_pendentes WHERE viewValue='${excluir.viewValue}' AND bloco='${excluir.bloco}' AND num=${excluir.num}`;

        connection.query(sql, (erro,result)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(result);
            }
        });
    }

    exibir_all_produtos_pendentes(res){

        const sql = 'SELECT * FROM entregas_pendentes';

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    exibir_all_produtos_concluidos(res){
        
        const sql = 'SELECT * FROM entregas_concluidas';

        connection.query(sql,(erro,result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_pendentes_viewValue_bloco_num(viewValue, bloco, num, res){

        const sql = `SELECT * FROM entregas_pendentes WHERE viewValue='${viewValue}' AND bloco='${bloco}' AND num=${num}`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_pendentes_viewValue_bloco(viewValue, bloco, res){

        const sql = `SELECT * FROM entregas_pendentes WHERE viewValue='${viewValue}' AND bloco='${bloco}'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_pendentes_viewValue(viewValue, res){

        const sql = `SELECT * FROM entregas_pendentes WHERE viewValue='${viewValue}'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_concluidas_viewValue_bloco_num(viewValue, bloco, num, res){

        const sql = `SELECT * FROM entregas_concluidas WHERE viewValue='${viewValue}' AND bloco='${bloco}' AND num=${num}`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_concluidas_viewValue_bloco(viewValue, bloco, res){

        const sql = `SELECT * FROM entregas_concluidas WHERE viewValue='${viewValue}' AND bloco='${bloco}'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_concluidas_viewValue(viewValue, res){

        const sql = `SELECT * FROM entregas_concluidas WHERE viewValue='${viewValue}'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }
}

module.exports = new Produto
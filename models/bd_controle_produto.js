const connection = require('../infraestrutura/connection');
const controle_data_hora = require('../infraestrutura/data');

class Produto{
    produto_pendente(pendente, res){
    
        const sql = 'INSERT INTO entregas_pendentes SET ?'
        
        //console.log(pendente);

        connection.query(sql, pendente, (erro,result)=>{
            if(erro){
                res.status(400)
                .send({
                    status:"400",
                    msg:"Erro ao cadastrar item",
                    detalhe:erro
                });
           }else{
                res.status(200).send({
                    status:"200",
                    msg:"Cadastro realizado com sucesso",
                    detalhe:result
                });
           }
        });
    }

    produto_concluido(concluido, res){

       // console.log(concluido);

        concluido['hora'] = controle_data_hora.hora();
        concluido['dia'] = controle_data_hora.data();

        const sql = 'INSERT INTO entregas_concluidas SET ?';

        connection.query(sql, concluido, (erro,result)=>{
            if(erro){
                res.status(400).send({
                    status:"400",
                    msg:"Erro ao cadastrar item",
                    detalhe:erro
                });
           }else{
                res.status(200).send({status:"200",
                msg:"Cadastro realizado com sucesso",
                detalhe:result
            });
            //console.log(result);
           }
        });
    }

    excluir_pendentes(excluir){

        //console.log(excluir);
        const sql = `DELETE FROM entregas_pendentes WHERE id=${excluir.id} AND viewValue='${excluir.viewValue}' AND bloco='${excluir.bloco}' AND num=${excluir.num}`;

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
        
        const sql = 'SELECT * FROM entregas_concluidas ORDER BY dia desc, hora desc';

        connection.query(sql,(erro,result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_pendentes_viewValue_bloco_num(viewValue, bloco, num, res){

        const sql = `SELECT * FROM entregas_pendentes WHERE viewValue='${viewValue}' AND bloco='${bloco}' AND num=${num} ORDER BY dia desc, hora desc ORDER BY dia desc, hora desc`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_pendentes_viewValue_bloco(viewValue, bloco, res){

        const sql = `SELECT * FROM entregas_pendentes WHERE viewValue='${viewValue}' AND bloco='${bloco} ORDER BY dia desc, hora desc'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_pendentes_viewValue(viewValue, res){

        const sql = `SELECT * FROM entregas_pendentes WHERE viewValue='${viewValue} ORDER BY dia desc, hora desc'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_concluidas_viewValue_bloco_num(viewValue, bloco, num, res){

        const sql = `SELECT * FROM entregas_concluidas WHERE viewValue='${viewValue}' AND bloco='${bloco}' AND num=${num} ORDER BY dia desc, hora desc`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_concluidas_viewValue_bloco(viewValue, bloco, res){

        const sql = `SELECT * FROM entregas_concluidas WHERE viewValue='${viewValue}' AND bloco='${bloco} ORDER BY dia desc, hora desc'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        });
    }

    filtro_concluidas_viewValue(viewValue, res){

        const sql = `SELECT * FROM entregas_concluidas WHERE viewValue='${viewValue} ORDER BY dia desc, hora desc'`;

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
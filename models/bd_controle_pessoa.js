const connection = require('../infraestrutura/connection');
const controle_data_hora = require('../infraestrutura/data');

class Pessoas{
    registro_entrada(entrada, res){
        
        entrada["hora"]=controle_data_hora.hora();
        entrada["dia"]=controle_data_hora.data();

        const sql = 'INSERT INTO entrada SET ?'

        connection.query(sql, entrada, (erro,result)=>{
            if(erro){
                 res.status(400)
                    .send({
                        status:"400",
                        msg:"Erro ao cadastrar item",
                        detalhe:erro
                        });
            }else{
                  res.status(200)
                    .send({
                        status:"200",
                        msg:"Cadastro realizado com sucesso",
                        detalhe:result
                        });
            }
        }) 
    }

    registo_saida(saida, res){

        saida["hora"]=controle_data_hora.hora();
        saida["dia"]=controle_data_hora.data();

        const sql = 'INSERT INTO saida SET ?'

        connection.query(sql, saida, (erro, result)=>{
            if(erro){
                res.status(400)
                   .send({
                       status:"400",
                       msg:"Erro ao cadastrar item",
                       detalhe:erro
                       });
           }else{
                 res.status(200)
                   .send({
                       status:"200",
                       msg:"Cadastro realizado com sucesso",
                       detalhe:result
                       });
           }
       }) 
    }

    exibir_todas_entradas(res){
        const sql = 'SELECT * FROM entrada'

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    exibir_todas_saidas(res){
        const sql = 'SELECT * FROM saida'

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_entrada_tipo_bloco_num(tipo, bloco, num, res){
        
        const sql = `SELECT * FROM entrada WHERE tipo='${tipo}' AND bloco='${bloco}' AND num=${num}`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_entrada_tipo_bloco(tipo, bloco, res){
        
        const sql = `SELECT * FROM entrada WHERE tipo='${tipo}' AND bloco='${bloco}'`;

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_entrada_tipo(registro, tipo, res){
        
        const sql = `SELECT * FROM entrada WHERE tipo='${tipo}'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_saida_tipo_bloco_num(tipo, bloco, num, res){
        
        const sql = `SELECT * FROM saida WHERE tipo='${tipo}' AND bloco='${bloco}' AND num=${num}`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_entrada_tipo_bloco(tipo, bloco, res){
        
        const sql = `SELECT * FROM saida WHERE tipo='${tipo}' AND bloco='${bloco}'`;

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_saida_tipo(registro, tipo, res){
        
        const sql = `SELECT * FROM saida WHERE tipo='${tipo}'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }
}

module.exports = new Pessoas
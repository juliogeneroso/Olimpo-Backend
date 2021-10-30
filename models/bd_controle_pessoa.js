const connection = require('../infraestrutura/connection');
const controle_data_hora = require('../infraestrutura/data');

class Pessoas{
    registro_entrada_temporaria(entrada,res){
        const sql = 'INSERT INTO entrada_temporaria SET ?'

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

    registro_entrada_temporaria_sair(tempSaida,res){

        const sql = `DELETE FROM entrada_temporaria WHERE nome='${tempSaida.nome}' AND bloco='${tempSaida.bloco}' AND num=${tempSaida.num}`

        connection.query(sql, tempSaida, (erro,result)=>{
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
                        msg:"Saída registrada com sucesso",
                        detalhe:result
                        });
            }
        }) 
    }

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
        const sql = 'SELECT * FROM entrada ORDER BY dia desc, hora desc'

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    exibir_todas_entradas_temp(res){
        const sql = 'SELECT * FROM entrada_temporaria'

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    exibir_todas_saidas(res){
        const sql = 'SELECT * FROM saida ORDER BY dia desc, hora desc'

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_entrada_tipo_bloco_num(tipo, bloco, num, res){
        
        const sql = `SELECT * FROM entrada WHERE tipo='${tipo}' AND bloco='${bloco}' AND num=${num} ORDER BY dia desc, hora desc`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_entrada_tipo_bloco(tipo, bloco, res){
        
        const sql = `SELECT * FROM entrada WHERE tipo='${tipo}' AND bloco='${bloco} ORDER BY dia desc, hora desc'`;

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_entrada_tipo(registro, tipo, res){
        
        const sql = `SELECT * FROM entrada WHERE tipo='${tipo} ORDER BY dia desc, hora desc'`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_saida_tipo_bloco_num(tipo, bloco, num, res){
        
        const sql = `SELECT * FROM saida WHERE tipo='${tipo}' AND bloco='${bloco}' AND num=${num} ORDER BY dia desc, hora desc`;

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_entrada_tipo_bloco(tipo, bloco, res){
        
        const sql = `SELECT * FROM saida WHERE tipo='${tipo}' AND bloco='${bloco} ORDER BY dia desc, hora desc'`;

        connection.query(sql, (erro, result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtro_saida_tipo(registro, tipo, res){
        
        const sql = `SELECT * FROM saida WHERE tipo='${tipo} ORDER BY dia desc, hora desc'`;

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
const connection = require('../infraestrutura/connection');

class Moradores{
    cadastro(dados, res){
        
        console.log(dados);

        const sql_select = `SELECT * FROM moradores WHERE nome='${dados.nome}' AND bloco='${dados.bloco}' AND num=${dados.num}`;

        connection.query(sql_select, (erro, result) => {
            if(erro){
                res.status(400)
                .send({
                    status:"400",
                    msg:"Erro ao cadastrar item",
                    detalhe:erro
                });
            } else{
               // console.log("Não existe");
                if(result.length == 0){

                    const sql = 'INSERT INTO moradores set ?'

                    connection.query(sql, dados, (erro, result) => {
                        if(erro){
                            //console.log("Não cadastrou");
                            res.status(400)
                            .send({
                                status:"400",
                                msg:"Erro ao cadastrar item",
                                detalhe:erro
                            });
                        } else{
                            res.status(200).send({
                                status:"200",
                                msg:"Cadastro realizado com sucesso",
                                detalhe:result
                            });
                        }
                    });
                }else{
                    res.status(203).send({
                        status:"203",
                        msg:"Residente já cadastrado",
                        detalhe:result
                    });
                }
            }
        });
    }

    editar_morador(dados, id, res){

        const sql = `UPDATE moradores SET ? WHERE id=${id}`;

        connection.query(sql, dados, (erro, result) => {
            if(erro){
                res.status(400)
                .send({
                    status:"400",
                    msg:"Erro ao alterar item",
                    detalhe:erro
                    });
            } else {
                res.status(200)
                .send({
                    status:"200",
                    msg:"Item alterado com sucesso",
                    detalhe:result
                    });
            }
        });
    }

    deletar_morador(id, res){

        const sql = `DELETE FROM moradores WHERE id=${id}`;

        connection.query(sql, (erro, result ) => {
            if(erro){
                res.status(400)
                .send({
                    status:"400",
                    msg:"Erro ao deletar item",
                    detalhe:erro
                    });
            }else{
                res.status(200)
                .send({
                    status:"200",
                    msg:"Item deletado com sucesso",
                    detalhe:result
                    });
            }
        });
    }

    exibir_all_moradores(res){

        const sql = 'SELECT * FROM moradores';

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtroID(id, res){
        const sql = `SELECT * FROM moradores WHERE id='${id}'`

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtroNome(nome, res){
        const sql = `SELECT * FROM moradores WHERE nome='${nome}'`

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtroBloco(bloco, res){
        const sql = `SELECT * FROM moradores WHERE bloco='${bloco}'`

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    filtroNumero(num, res){
        const sql = `SELECT * FROM moradores WHERE num=${num}`

        connection.query(sql, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }
}

module.exports = new Moradores
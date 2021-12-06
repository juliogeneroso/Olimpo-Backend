const connection = require('../infraestrutura/connection');

class Login{
    login(dados, res){
    
        const sql_select = `SELECT * FROM login WHERE id='${dados.id}' AND senha='${dados.senha}'`;

        connection.query(sql_select, (erro, result) => {
            if(erro){
                res.status(400)
                .send({
                    status:"400",
                    msg:"Erro Bad Request",
                    detalhe:erro
                });
            } else{
                if(result == 0){
                    res.status(400)
                            .send({
                                status:"400",
                                msg:"Id ou Senha estão incorretos",
                                detalhe:erro
                            });
                } else {
                res.status(200)
                    .send({
                        status:"200",
                        msg:"Usuário Encontrado",
                        detalhe:result
                    });
                }
            }
        });
    }

    consulta(res){

        const sql_select = `SELECT id,nome,admin FROM login`;

        connection.query(sql_select, (erro, result) => {
            if(erro){
                res.status(400).json(erro);
            } else{
                res.status(200).json(result);
            }
        });
    }

    cadastrar(dados, res){

        const sql_select = `SELECT * FROM login WHERE id='${dados.id}'`;

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

                    const sql = 'INSERT INTO login set ?'

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
                    console.log("ja cadastrado");
                    res.status(200).send({
                        status:"203",
                        msg:"Porteiro já cadastrado",
                        detalhe:result
                    });
                }
            }
        });
    }
}
module.exports = new Login
   
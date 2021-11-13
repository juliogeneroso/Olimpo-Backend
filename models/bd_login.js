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
}
module.exports = new Login
   
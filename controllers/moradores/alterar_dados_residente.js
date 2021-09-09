module.exports = app => {
    app.post('/alterar',(req,res)=>{
        let { id, nome, bloco, casa, ramal } = req.body;
    
        let registro = {
        id,
        nome,
        bloco,
        casa,
        ramal
        };
    // console.log(registro);
        connection.query(`UPDATE moradores SET nome='${registro.nome}',bloco='${registro.bloco}',num=${registro.casa},ramal='${registro.ramal}' WHERE id=${registro.id}`),function(req,res){
            if(err){
                return err;
            }
        }

        return res.json(registro);
        });
}

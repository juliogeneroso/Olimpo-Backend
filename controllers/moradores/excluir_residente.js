module.exports = app => {
    app.post('/excluir',(req,res)=>{
    let { id } = req.body;

    let registro = {
        id
    };
   // console.log("Pendentes" + JSON.stringify(registro));

    connection.query(`DELETE FROM moradores WHERE id=${registro.id}`,function(err, result){
        if(err){
            return err;
        }
      //  console.log("salvou");
    return res.json(registro);
    });
    
    });
}
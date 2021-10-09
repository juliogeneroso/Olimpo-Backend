const Moradores = require("../../models/bd_moradores");

module.exports = app => {
  app.post('/cadastro/residente',(req,res)=>{
      
    const dados_cadastro = req.body;

    Moradores.cadastro(dados_cadastro, res);
  });
}
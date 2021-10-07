const Pessoas = require('../../models/bd_controle_pessoa');

module.exports = app => {
  app.post('/registro/entrada',(req,res)=>{
    const entrada_pessoa = req.body;

    Pessoas.registro_entrada(entrada_pessoa, res);
  })  
}


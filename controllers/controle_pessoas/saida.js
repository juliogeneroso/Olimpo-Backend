const Pessoas = require('../../models/bd_controle_pessoa');

module.exports = app => {
  app.post('/registro/saida',(req,res)=>{
    const saida_pessoa = req.body;

    Pessoas.registo_saida(saida_pessoa, res); 
  })
}
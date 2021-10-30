const Pessoas = require('../../models/bd_controle_pessoa');

module.exports = app => {
  app.post('/registro/entrada',(req,res)=>{
    const entrada_pessoa = req.body;

   Pessoas.registro_entrada(entrada_pessoa, res);
  })  

  app.post('/registro/entradas/temporarias',(req,res)=>{
    const entrada_servico = req.body;
 
   Pessoas.registro_entrada_temporaria(entrada_servico, res);
  })

  app.post('/registro/entradas/temporarias/sair',(req,res)=>{
    const entrada_servico_sair = req.body;
 
   Pessoas.registro_entrada_temporaria_sair(entrada_servico_sair, res);
  })
}


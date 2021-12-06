const Entrar = require('../../models/bd_login');

module.exports = app => {
  app.post('/entrar',(req,res)=>{
      
    const dados_login = req.body;

    Entrar.login(dados_login,res);
  });

  app.post('/cadastrar/porteiro',(req, res) => {
    
    const dados_login = req.body;

    Entrar.cadastrar(dados_login, res);
  });

  app.get('/porteiros',(req, res) => {

    Entrar.consulta(res);
  })
}

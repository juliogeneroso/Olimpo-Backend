const Entrar = require('../../models/bd_login');

module.exports = app => {
  app.post('/entrar',(req,res)=>{
      
    const dados_login = req.body;

    Entrar.login(dados_login,res);
  });
}

const Produto = require('../../models/bd_controle_produto');

module.exports = app => {
    app.post('/registro/entregas/pendentes',(req,res)=>{
       const registro_pendentes = req.body

       Produto.produto_pendente(registro_pendentes);
       res.send('Entrega pendentes');
    })
}

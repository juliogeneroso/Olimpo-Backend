const Moradores = require("../../models/bd_moradores");

module.exports = app => {
    app.patch('/alterar/morador/:id',(req,res) => {
        
        const dados = req.body;
        const id = parseInt(req.params.id);

        Moradores.editar_morador(dados, id, res);
        });
}

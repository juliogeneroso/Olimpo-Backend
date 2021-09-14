const Moradores = require("../../models/bd_moradores");

module.exports = app => {
    app.delete('/deletar/morador/:id',(req,res) => {
        
        const id = parseInt(req.params.id);

        Moradores.deletar_morador(id, res);
        });
}

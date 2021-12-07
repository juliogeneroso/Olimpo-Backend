const Moradores = require("../../models/bd_moradores");

module.exports = app => {
    app.get("/residentes", (req, res) => {
       
        Moradores.exibir_all_moradores(res);
    });

    app.get("/residentes/filtro/id/:id",(req, res) => {
        
        const id = parseInt(req.params.id);

        Moradores.filtroID(id, res);
    });

    app.get("/residentes/filtro/nome/:nome",(req, res) => {
        
        const nome = req.params.nome;

        Moradores.filtroNome(nome, res);
    });

    app.get("/residentes/filtro/bloco/:bloco",(req, res) => {
        
        const bloco = req.params.bloco;

        Moradores.filtroBloco(bloco, res);
    });

    app.get("/residentes/filtro/num/:num",(req, res) => {
        
        const num = parseInt(req.params.num);

        Moradores.filtroNumero(num, res);
    });
}


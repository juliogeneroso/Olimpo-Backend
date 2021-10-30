const Pessoas = require('../../models/bd_controle_pessoa');

module.exports = app => {
    
    app.get("/temporaria/entrada", (req, res) => {

        Pessoas.exibir_todas_entradas_temp(res);
    });

    app.get("/entrada", (req, res) => {

        Pessoas.exibir_todas_entradas(res);
    });

    app.get("/saida", (req, res) => {

        Pessoas.exibir_todas_saidas(res);
    });

    app.get("/entrada/:tipo/:bloco/:num", (req, res) => {
        
        const tipo = req.params.tipo;
        const bloco = req.params.bloco;
        const num = parseInt(req.params.num);
        
        
        Pessoas.filtro_tipo_bloco_num(tipo, bloco, num, res);
    });

    app.get("/entrada/:tipo/:bloco", (req, res) => {
 
        const tipo = req.params.tipo;
        const bloco = req.params.bloco;
    
        Pessoas.filtro_tipo_bloco(tipo, bloco, res);
    });

    app.get("/entrada/:tipo", (req, res) => {
        
        const tipo = req.params.tipo;
    
        Pessoas.filtro_tipo(tipo, res);
    });

    app.get("/saida/:tipo/:bloco/:num", (req, res) => {
        
        const tipo = req.params.tipo;
        const bloco = req.params.bloco;
        const num = parseInt(req.params.num);
        
        
        Pessoas.filtro_tipo_bloco_num(tipo, bloco, num, res);
    });

    app.get("/saida/:tipo/:bloco", (req, res) => {
 
        const tipo = req.params.tipo;
        const bloco = req.params.bloco;
    
        Pessoas.filtro_tipo_bloco(tipo, bloco, res);
    });

    app.get("/saida/:tipo", (req, res) => {
        
        const tipo = req.params.tipo;
    
        Pessoas.filtro_tipo(tipo, res);
    });
}
const Produto = require('../../models/bd_controle_produto');

module.exports = app => {
    app.get("/entregas/concluidas", (req, res) => {
        
        Produto.exibir_all_produtos_concluidos(res);
    });

    app.get("/entregas/pendentes", (req, res) => {
        
        Produto.exibir_all_produtos_pendentes(res);
    });

    app.get("/entregas/pendentes/:viewValue/:bloco/:num", (req, res) => {

        const viewValue = req.params.viewValue;
        const bloco = req.params.bloco;
        const num = parseInt(req.params.num);

        Produto.filtro_pendentes_viewValue_bloco_num(viewValue, bloco, num, res);
    });

    app.get("/entregas/pendentes/:viewValue/:bloco", (req, res) => {

        const viewValue = req.params.viewValue;
        const bloco = req.params.bloco;

        Produto.filtro_pendentes_viewValue_bloco(viewValue, bloco, res);
    });

    app.get("/entregas/pendentes/:viewValue", (req, res) => {

        const viewValue = req.params.viewValue;

        Produto.filtro_pendentes_viewValue(viewValue, res);
    });

    app.get("/entregas/concluidas/:viewValue/:bloco/:num", (req, res) => {

        const viewValue = req.params.viewValue;
        const bloco = req.params.bloco;
        const num = parseInt(req.params.num);

        Produto.filtro_concluidas_viewValue_bloco_num(viewValue, bloco, num, res);
    });

    app.get("/entregas/concluidas/:viewValue/:bloco", (req, res) => {

        const viewValue = req.params.viewValue;
        const bloco = req.params.bloco;

        Produto.filtro_concluidas_viewValue_bloco(viewValue, bloco, res);
    });

    app.get("/entregas/concluidas/:viewValue", (req, res) => {

        const viewValue = req.params.viewValue;
    
        Produto.filtro_concluidas_viewValue(viewValue, res);
    });
}
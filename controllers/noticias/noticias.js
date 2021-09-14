const Noticias = require('../../models/bd_noticias');

module.exports = app => {
    app.get('/exibir/noticias', (req, res) => {
        
        Noticias.exibir_noticias(res);
    })

    app.get('/buscar/noticia/:id', (req, res) => {
        
        const id = parseInt(req.params.id);

        Noticias.buscar_noticia(id, res);
    })

    app.post('/cadastrar/noticia', (req, res) => {

        const noticia = req.body;

        Noticias.criar_noticia(noticia, res);
    })

    app.patch('/editar/noticia/:id', (req, res) => {

        const noticia = req.body;
        const id = parseInt(req.params.id);

        Noticias.editar_noticia(noticia, id, res);
    })

    app.delete('/deletar/noticia/:id', (req, res) => {

        const id = parseInt(req.params.id);

        Noticias.excluir_noticia(id, res);
    })
}
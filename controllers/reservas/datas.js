const Reservas = require('../../models/bd_data_reserva');

module.exports = app => {
    app.get('/exibir/datas', (req, res) => {
         
        Reservas.exibir_reservas(res);
    })

    app.get('/consultar/data/:dia/:mes/:ano', (req, res) => {
        
        const dia = parseInt(req.params.dia);
        const mes = parseInt(req.params.mes);
        const ano = parseInt(req.params.ano);

        Reservas.buscar_disponibilidade(dia,mes,ano, res);
    })

    app.post('/agendar', (req, res) => {

        const reserva = req.body;

        Reservas.criar_reserva(reserva, res);
    })

    app.patch('/editar/reserva/:id', (req, res) => {

        const noticia = req.body;
        const id = parseInt(req.params.id);

        Reservas.editar_reserva(reserva, id, res);
    })

    app.delete('/deletar/reserva/:id', (req, res) => {

        const id = parseInt(req.params.id);

        Reservas.excluir_reserva(id, res);
    })
}
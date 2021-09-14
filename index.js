const customExpress = require('./config/CustomExpress');
const connection = require('./infraestrutura/connection');
const Tabelas = require('./infraestrutura/tabelas');

connection.connect((erro)=>{
    if(erro){
        console.log(erro);
    }else{
        console.log('Conectado com sucesso');

        Tabelas.init(connection);
        const app = customExpress();

        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
        console.log(`Rodando na porta:  ${PORT}.`);
        });
    }
});


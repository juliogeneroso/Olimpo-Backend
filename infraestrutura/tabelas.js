class Tabelas {
    init(connection){

        this.connection = connection;

        this.criarTabela();
    
    }

    criarTabela(){
        const sql1 = 'CREATE TABLE IF NOT EXISTS entrada(nome VARCHAR(100),tipo VARCHAR(20),bloco CHAR(1),num INT,hora TIME,dia DATE);';

        this.connection.query(sql1, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Sucesso');
            }
        });
        const sql2 = 'CREATE TABLE IF NOT EXISTS saida(nome VARCHAR(100),tipo VARCHAR(20),bloco CHAR(1),num INT,hora TIME,dia DATE);';

        this.connection.query(sql2, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Sucesso');
            }
        });
        const sql3 = 'CREATE TABLE IF NOT EXISTS entregas_pendentes(id INT NOT NULL auto_increment primary KEY,viewValue VARCHAR(40),bloco CHAR(1),num int,obs VARCHAR(500));';

        this.connection.query(sql3, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Sucesso');
            }
        });
        const sql4 = 'CREATE TABLE IF NOT EXISTS entregas_concluidas(id INT NOT NULL primary KEY,viewValue VARCHAR(40),bloco CHAR(1),num int,obs VARCHAR(500),hora TIME,dia DATE);';

        this.connection.query(sql4, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Sucesso');
            }
        });
        const sql5 = 'CREATE TABLE IF NOT EXISTS moradores(nome VARCHAR(50) NOT NULL,id INT NOT NULL auto_increment primary KEY,bloco CHAR(1),num int);';

        this.connection.query(sql5, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Sucesso');
            }
        });
        const sql6 = 'CREATE TABLE IF NOT EXISTS noticias(dados VARCHAR(500) NOT NULL,id INT NOT NULL auto_increment primary KEY,dia DATE);';

        this.connection.query(sql6, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Sucesso');
            }
        });
    }
}

module.exports = new Tabelas
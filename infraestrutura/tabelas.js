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
                console.log('Tabela Entrada - Sucesso');
            }
        });
        const sql2 = 'CREATE TABLE IF NOT EXISTS saida(nome VARCHAR(100),tipo VARCHAR(20),bloco CHAR(1),num INT,hora TIME,dia DATE);';

        this.connection.query(sql2, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Tabela Saida - Sucesso');
            }
        });
        const sql3 = 'CREATE TABLE IF NOT EXISTS entregas_pendentes(id INT NOT NULL auto_increment primary KEY,viewValue VARCHAR(40),bloco CHAR(1),num int,obs VARCHAR(500));';

        this.connection.query(sql3, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Tabela Entregas Pendentes - Sucesso');
            }
        });
        const sql4 = 'CREATE TABLE IF NOT EXISTS entregas_concluidas(id INT NOT NULL primary KEY,viewValue VARCHAR(40),bloco CHAR(1),num int,obs VARCHAR(500),hora TIME,dia DATE);';

        this.connection.query(sql4, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{ 
                console.log('Tabela Entregas Concluidas - Sucesso');
            }
        });
        const sql5 = 'CREATE TABLE IF NOT EXISTS moradores(nome VARCHAR(50) NOT NULL,id INT NOT NULL auto_increment primary KEY,bloco CHAR(1),num int);';

        this.connection.query(sql5, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Tabela Moradores - Sucesso');
            }
        });
        const sql6 = 'CREATE TABLE IF NOT EXISTS noticias(titulo VARCHAR(60) NOT NULL, dados VARCHAR(500) NOT NULL,id INT NOT NULL auto_increment primary KEY,dia DATE NOT NULL);';

        this.connection.query(sql6, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Tabela Noticias - Sucesso');
            }
        });
        const sql7 = 'CREATE TABLE IF NOT EXISTS entrada_temporaria(nome VARCHAR(100),tipo VARCHAR(20),bloco CHAR(1),num INT);';

        this.connection.query(sql7, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Tabela Entradas Temporarias - Sucesso');
            }
        });
        const sql8 = 'CREATE TABLE IF NOT EXISTS login(id VARCHAR(11) primary key NOT NULL,nome VARCHAR(50) NOT NULL, senha VARCHAR(50) NOT NULL, admin BOOLEAN DEFAULT FALSE);';

        this.connection.query(sql8, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Tabela Login - Sucesso');
            }
        });
        const sql9 = 'CREATE TABLE IF NOT EXISTS data(reservaid INT NOT NULL primary key auto_increment, id INT NOT NULL, nome VARCHAR(50) NOT NULL, dia INT NOT NULL, mes INT NOT NULL, ano INT NOT NULL, duracao INT NOT NULL, quantPessoas INT NOT NULL);';

        this.connection.query(sql9, (erro, result) => {
            if(erro){
                console.log('Erro ao criar tabela');
            }else{
                console.log('Tabela Data - Sucesso');
            }
        });
    }
}

module.exports = new Tabelas
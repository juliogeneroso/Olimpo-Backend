class DataAtual{
    data(){
        var data = new Date();
        var dia = String(data. getDate()). padStart(2, '0');
        var mes = String(data. getMonth() + 1). padStart(2, '0');
        var ano = data. getFullYear();
        var dataAtual = ano+'-'+mes+'-'+dia;
        return dataAtual;
    }
    hora(){
        var data = new Date();
        var hora = String(data.getHours());
        var minuto = String(data.getMinutes());
        var segundos = String(data.getSeconds());
        var horaAtual = hora+':'+minuto+':'+segundos
        return horaAtual;
    }
}
module.exports = new DataAtual
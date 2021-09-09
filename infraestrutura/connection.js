const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'olimpo',
    password: 'root',
    database: 'olimpo'
})

module.exports = connection
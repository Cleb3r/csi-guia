const mysql = require('mysql');

const Connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'csi'
 
})

module.exports = Connection;

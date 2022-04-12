const { createPool } = require('mysql');

module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao guia das séries CSI'})
    })
    
    
    server.get('/series', (require, response) => {
        const sql = 'SELECT * FROM series order by lancamento;';
        connection.query(sql, (error, res) => {
            if (error){
                response.status(400).send(error);
                console.log(error);
                return;
            } console.log("series: ", res);
            response.json(res)
        })
    })
}

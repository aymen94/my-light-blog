const mysql = require('mysql');

// config dbms information
var pool = mysql.createPool({
    host: 'localhost',           // name host
    user: 'root',                // dbms user
    password: 'root',            // dbms password
    database: 'my_light_blog',   // name schema
    connectionLimit: 10,         //max simultaneous connection 
    multipleStatements: true,    //multiple statement query
});

pool.getConnection((err, conn) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST')
            console.error('Database connection was closed.');

        if (err.code === 'ER_CON_COUNT_ERROR') 
            console.error('Database has too many connections.');

        if (err.code === 'ECONNREFUSED')
            console.error('Database connection was refused.');
    }
    if (conn)
        conn.release();
    return;
})

module.exports = pool;
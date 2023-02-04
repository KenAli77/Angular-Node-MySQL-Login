// set up mysql
const mysql = require('mysql2');

// fetching configuration details
const config = require('../config/config.json');

// creating a constant connection using a pool

const pool = mysql.createPool({

    host: config.host,
    user:config.user,
    database: config.database,
    password: config.password
}
)

// exporting this so it's available throughout the project
module.exports = pool.promise();

console.log('database connected')

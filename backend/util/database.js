// set up mysql
import mysql from 'mysql';

// fetching configuration details
import config from '../config/config.json';

// creating a constant connection using a pool

export const pool = mysql.createPool({

    host: config.host,
    user:config.user,
    database: config.database,
    password: config.password
})

// exporting this so it's available throughout the project
module.exports = pool.promise();
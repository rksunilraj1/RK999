import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'sql110.infinityfree.com',        // InfinityFree MySQL host
    user: 'if0_39838902',                   // MySQL username
    password: 'Tiranga74',       // DB password = vPanel password
    database: 'if0_39838902_Tiranga_db',   // Database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default connection;
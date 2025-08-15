const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "admin65",
    host: "localhost",
    port: 5432,
    database: "HacktivDB_ref",
    idleTimeoutMillis: 500,
});

//test connection
// async function testConnection() {
//     try {
//         console.log(await pool.query("SELECT NOW()"));
//     } catch (error) {
//         console.log(error);
//     }
// }

// testConnection();

module.exports = pool;

const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "admin65",
    host: "localhost",
    port: 5432,
    database: "HacktivDB",
    idleTimeoutMillis: 500,
});

// async function testConnection() {
//     try {
//         console.log(await pool.query("SELECT NOW()"));
//     } catch (error) {
//         console.log(error);
//     }
// }

// testConnection();

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    database: 'mydatabase',
    user: 'root',
    password: 'rootpassword'
});

export default pool;

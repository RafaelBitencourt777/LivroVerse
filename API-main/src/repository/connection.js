import mysql from 'mysql2/promise';
import Express from 'express';
import cors from 'cors';

const conexao = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PWD
    
})

console.log('BD Conectado Manninho !');
export default conexao;

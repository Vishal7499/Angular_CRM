const mysql = require('mysql2');
const Connection = require('mysql/lib/Connection');
require('dotenv').config();

const connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    insecureAuth: true
});


connection.connect((err)=>{
    if(!err){
        console.log("Connected");
    }else{
        console.log(err);
    }
});

module.exports=connection;





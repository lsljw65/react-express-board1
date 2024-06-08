var mysql=require('mysql');

const db=mysql.createPool({
    host:"localhost",
    user:"admin",
    password:"1234",
    port:3306,
    database:"movi_board"
});

module.exports=db;
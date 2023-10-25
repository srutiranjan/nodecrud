const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database:"testdb"

});

conn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected Successfully");
    }

})

module.exports = conn;
// conn.query("SELECT * FROM users WHERE name = 'mark henrry'",(err,result)=>{
//     console.log(result);
// })
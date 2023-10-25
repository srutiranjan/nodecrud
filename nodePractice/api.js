const express = require('express');
const dbConn = require('./db');
const app = express();
app.use(express.json());
app.get('/',async (req,res)=>{
    let data = await dbConn();
    let result = await data.find().toArray();
    res.send(result);
})
app.post('/dataput',async (req,res)=>{
    let data = await dbConn();
    let result = await data.insertMany(req.body);
    res.send(result);
})
app.listen(3000)
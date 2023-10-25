 //const http = require('http');
// const data = require('./data');
// const fs = require('fs');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Content-type':'application\json'});
// resp.write(JSON.stringify(data));
// resp.end();

// }).listen(3000);
//const conn = require('./db');
// const input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);

// }else if(input[2]== 'remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log('Invalid Input');
// }
// const path = require('path');
// const { isUtf8 } = require('buffer');
// const dirPath = path.join(__dirname,'crud');
// const filPath = `${dirPath}/apple.txt`;
// //fs.writeFileSync(filPath,"this is simple txt file");
// fs.readFile(filPath, {encoding:'utf8'},(err,item)=>{
//    console.log(item);
// });
//promise
// let a = 30;
// let = 0;
// let promis = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve(40); use

//    },2000);

// });
// promis.then((data)=>{
//   console.log(a+data);
// });
// const express = require("express");
// const app = express();
// app.get('/',(req,res)=>{
//   res.send(`<h2>Wellcome to Home Page</h2>`);
// });
// app.get('/page',(req,res)=>{
//    res.send(`<input type="text" Placeholder= "Name" value="${req.query.name}">`);
//  });
// app.listen(3000);

// conn().then((resp)=>{
//  resp.find().toArray().then((data)=>{
//   console.log(data);

//  });
// })

// const express = require('express');
// const multer = require('multer');
// require('./config');
// const customers = require('./user');
// const app = express();
// //app.use(express.json);
// app.use(express.json({ extended: false }));
// app.post('/create',async(req,resp)=>{
//     let data = new customers(req.body);
//     let result = await data.save();
//     //console.log("well");
//     resp.send(result);
// });

// app.get('/list',async (req,resp)=>{
//     let result = await customers.find();
//     resp.send(result);
// });
// app.delete("/delete/:_id",async (req,resp)=>{
//     let result = await customers.deleteOne(req.params);
//     resp.send(result);
// })
// app.put("/update/:_id",async (req,resp)=>{
//     let result = await customers.updateOne(
//         req.params,{
//                 $set:req.body
//         }
//     );
//     resp.send(result);
// })
// app.get("/search/:key",async (req,resp)=>{
//     let result = await customers.find({
//         "$or":[
//             {"name":{$regex:req.params.key}},
//             {"email":{$regex:req.params.key}}
//         ]
//     }
//     );
//     resp.send(result);
// })
// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb){
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname+"-"+Date.now()+".jpg")
//         }
//     })
// }).single("my_files");

// app.post('/upload',upload,async(req,resp)=>{
    
//     resp.send("file uploaded");
// });



// Api with mysql
const express = require("express");
const conn = require("./mysqlConn");
const app = express();
app.use(express.json({ extended: false }));
// app.post('/mysqlinsert',async(req,resp)=>{
//     let data = req.body;
//     await conn.query('insert into users set?',data, (error,results,fields)=>{
//         if(error) throw error;
//         resp.send(results);
//     })
  
// }); 
// app.get('/',(req,resp)=>{
//     conn.query('select * from users',(error,results)=>{
//         if(error) throw error;
//         resp.send(results);
//     })
    
// })
app.delete('/delete/:id',(req,resp)=>{
    conn.query('delete from users where id ='+req.params.id,(error,results)=>{
        if(error) throw error;
        resp.send(results);
    })
    
})

app.listen(8000);
const conn = require('./db');
const insert =async ()=>{
    const db=await conn();
    const result = await db.insertMany([{name:'deepak kumar', email : 'deepak@gmail.com'},{name:'Selva singh', email : 'Selva@gmail.com'},{name:'maruthi', email : 'maruthi@gmail.com'}])
    if(result.acknowledged){
        console.log("data inserted");
    }
}

insert();

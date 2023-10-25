const dbConn = require('./db');
const update = async ()=>{
    let data = await dbConn();
    let result = await data.updateMany(
        {name:'Sruti Ranjan Sarangi'},{ $set: {name: 'Supper App Sruti'}}
        );
}

update();
const dbConn = require('./db');
const deleteData = async () =>{
    let data = await dbConn();
    let result = data.deleteMany({ name: 'Selva singh'});
    if(result.acknowledged){
        console.log('Data Deleted');
    }

}
deleteData();
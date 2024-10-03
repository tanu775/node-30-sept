const mongoose = require('mongoose');

async function connection(){
    try{
       await mongoose.connect(`mongodb://localhost:27017/30-sept-2024`);
        console.log('database connected');
    } catch(err){
        console.log(err.message,'msg')
    }
}

module.exports = connection;
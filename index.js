const express = require ('express');
const connection = require('./connection');
const path = require ('path');
const user = require('./routes/user')
const app = express();
connection();
app.use(user);
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));


app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    } else{
        console.log('Server is running on 3000');
    }
})
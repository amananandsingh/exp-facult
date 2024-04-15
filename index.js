const express=require('express');
const facult=require('./routes/facult');
const connect=require('./connection')
const app = express();
connect();
app.use(facult);//use the file 

app.listen(4000,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('server is running at 4000');
    }
})

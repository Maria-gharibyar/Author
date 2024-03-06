const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


require('./Config/author.congif')
require('./route/author.route')(app)

app.listen(8000,()=>{
    console.log('Listening the port 8000')
})
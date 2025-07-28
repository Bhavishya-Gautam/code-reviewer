const express=require('express');
const cors=require('cors');
const routes=require('../src/routes/routes')
const app=express();// server created
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use('/ai',routes);// /ai request send to routes
module.exports=app;
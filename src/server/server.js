const express=require('express');
const app=express();
const PORT=process.env.PORT||8000;
const db=require('./config/db.js')
const bodyParser=require('body-parser');

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log('root')
})

app.get('/movies',(req,res)=>{
    console.log('/movies')
    db.query("select * from movi",(err,data)=>{
        if(!err){
            // console.log("data",data);
            res.send(data)
        } else {
            console.log("err",err)
        }
        
    })
})

app.get('/movies/:id',(req,res)=>{
    console.log("/movies/:id");
    const id=req.params.id;
    console.log(id)
})

app.listen(PORT,()=>{
    console.log("서버실행");
    console.log(`Server On:http://localhost:${PORT}/`);
})


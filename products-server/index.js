const express = require('express');
const cors = require("cors");
const mysql= require('mysql');
const app = express();
const bodyParser = require('body-parser');
const  selectAll = "select * from td";
const connection =  mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'punithawesome',
    database:'react_sql'
});
connection.connect(err=>{
    if(err){
        return err;
    }
});
app.use(cors());
app.use(bodyParser());
app.post('/products/add',(req,res)=>{
    console.log(req.body);
     const name=req.body.name;
    
   console.log(name+"jkkkkkkkkkkkkkkkkkkkkkk")

    const insertQuery='insert into td (name) values(?)';
    connection.query(insertQuery,[name],(err,results)=>{
      
         if(err){
            return res.send(err);
        }
        else{
            return res.send('Successfully Inserted')
        }
    });
    });


app.get('/',(req,res)=>{
    res.send('go to the product server')
});
app.get('/products',(req,res)=>{
     
    connection.query(selectAll,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({data:results})
        }
    });
    });
app
 app.listen(4000,()=>{
     console.log("Product server listening in port 4000")
 });
 
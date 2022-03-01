const express=require("express")
const app=express()
const mongoose=require("mongoose")
const router = require("./router.js")
const morgan=require('morgan')
const cors=require('cors');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
require('dotenv').config();

app.use('/info',router);
if(process.env.NODE_ENV =="production"){
    
 app.use(express.static("client/bulid"));
}
app.listen(process.env.PORT||5000,()=>{
    console.log("server connected in 5000")
})

mongoose.connect('mongodb://localhost/crud',(err)=>{
    if(!err){
        console.log("connected to db sucessfully")
    }
})
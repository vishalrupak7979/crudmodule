const mongoose=require("mongoose")
const infoschema=mongoose.Schema({
    Name:{
        type:String,
        requried:true,
        trim:true
    },
    Age:{
        type:Number,
        requried:true
    },
    City:{
        type:String,
        required:true
    },
    createdTime:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('info',infoschema);
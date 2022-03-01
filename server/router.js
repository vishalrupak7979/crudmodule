const express=require("express")
const router=express.Router()
const infoschema=require("./infoschema")

router.post('/',async(req,res)=>{
    
   var data=new infoschema({
       Name:req.body.Name,
       Age:req.body.Age,
       City:req.body.City

   });
   await data.save();
   res.json(data)
})

router.get('/',async (req,res)=>{
    var findata=await infoschema.find();
    res.json(findata);
})

router.put('/update',async (req,res)=>{
    var update=await infoschema.update({_id:req.body._id},{$set:{
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    }});
    res.json(update)
})

router.delete('/del/:id',async(req,res)=>{
    var del=await infoschema.findByIdAndRemove(req.params.id).then(e=>{
        res.json({message:"deleted sucessfully.."})
    })
})
router.get('/',(req,res)=>{
    res.json('i am from router file')
})
module.exports=router;
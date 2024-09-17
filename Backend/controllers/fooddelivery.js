import FoodModel from "../models/models.js"
import fs from 'fs'

  const foodadd= async (req,res)=>{
   
let image_file=`${req.file.filename}`
   const food=new FoodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_file
   })
   try{
    await food.save()
    res.json({success:true,message:"Food is added"})
   }
   catch(err){
    res.json({success:false,message:"Food is not saved"})
   }
}

//Display all the listing

let allist= async (req,res)=>{
    try{
        let {id}=req.params
        const food= await FoodModel.find({})
        console.log(food)
       
        res.json({success:true,message:food})
    }catch(err){
        console.log('Error in finding the listing')
        res.json({success:false,message:'error'})
    }
}

//Remove the listing from database

let removeList= async (req,res)=>{
    try{
        const food= await FoodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        const removeFood= await FoodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:'success'})
    }
    catch(err){
        res.json({success:false,message:'erro in removing'})
    }
}

export {foodadd,allist,removeList}
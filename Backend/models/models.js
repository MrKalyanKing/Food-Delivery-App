// const mongoose=require('mongoose')
//nXCjy1Cjcc5CH1ti
import mongoose from 'mongoose'

const FoodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
})

const FoodModel= mongoose.models.FoodModel || mongoose.model('FoodModel',FoodSchema)

export default FoodModel
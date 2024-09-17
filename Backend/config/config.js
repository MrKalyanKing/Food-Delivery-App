// const mongoose =require('mongoose')
import mongoose from "mongoose"

const dbUrl='mongodb+srv://kalyanithinb:nXCjy1Cjcc5CH1ti@cluster0.deus9.mongodb.net/FoodDel'
const ConectDb= async ()=>{
  mongoose.connect(dbUrl)
  .then(()=>{
    console.log("DB Connected")
  })
  .catch((err)=>{
    console.log(err)
  })
}

export default ConectDb
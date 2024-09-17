import express from 'express'
const app=express();
const port=8080;
import ConectDb from './config/config.js';
import FoodModel from './models/models.js';
import router from './routes/fooddelivery.js';
//const router=require('./routes/fooddelivery.js')
//Database connection
ConectDb()



//middleware
app.use('/api/food',router)
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/add',(req,res)=>{
    res.send('This is home')
})

app.listen(port,()=>{
    console.log(`app is listening to port${port}`)
})


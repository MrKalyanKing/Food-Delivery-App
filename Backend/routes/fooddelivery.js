import { allist, foodadd, removeList } from "../controllers/fooddelivery.js"
import express from 'express'
import multer from "multer"
const router=express.Router()


const storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

router.post('/add',upload.single('image'),foodadd)
router.get('/list',allist)
router.post('/removefood',removeList)



export default router
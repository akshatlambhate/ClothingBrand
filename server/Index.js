import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';


// Server Start
const app = express()
const port = 8000;
app.listen(port, ()=>{
     console.log(`Server is Started at ${port}`)
})
connectDb()
connectCloudinary()

 //middlewares
app.use(express.json())
app.use(cors())

//Api End Points
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})



import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


// Server Start
const app = express()
const port = 4003;
app.listen(port, ()=>{
     console.log(`Server is Started at ${port}`)
})
connectDb()
connectCloudinary()

 //middlewares
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send("API WORKING")
})


//Api End Points
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order',orderRouter)




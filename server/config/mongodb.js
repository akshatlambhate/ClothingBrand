import mongoose from "mongoose";

  const connectDb=async(params) => {
    mongoose.connection.on('connected',()=>{
        console.log('Db Connected')
    })

    await mongoose.connect(`${process.env.MONGO}/e-commerce`)

    
}

export default connectDb;
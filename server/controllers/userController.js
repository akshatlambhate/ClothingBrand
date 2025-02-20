import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken'

const createToken= (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)

    
}


//Route for User Login
const loginUser= async(req,res) => { 
    try {
        const {email,password} =req.body;

        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false, message:'User Not Exist'})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true, token})
        }
        else{
            res.json({success:false, message:'Invalid Credientials'})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})

        
    }

}

 //Route for User Registration

 const registerUser = async (req,res) => {
 try {
    const {name, email,password} = req.body;
    //checking user already exist or not
    const exists = await userModel.findOne({email});
    if(exists){
        return res.json({sucess:false, message:"User already Exist"})     
    }

       // validating email format & strong password
    if(!validator.isEmail(email)){
        return res.json({sucess:false, message:"Please enter a Valid Email"}) 

    }
    if(password.length < 8){
        return res.json({sucess:false, message:"please enter a strong password"}) 

    }
    //hashing user password

    const salt = await bcrypt.genSalt(10)
    const hasedPassword = await bcrypt.hash(password,salt);

     // storing New User
    const newUser = new userModel({
        name,email,password:hasedPassword
    })
    const user = await newUser.save();

    const token = createToken(user._id)
    res.json({sucess:true,token})


 } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
 }    
 }

 //Route for Admin Login

 const adminLogin = async (req,res) => {
     try {
         const {email, password} = req.body;
         if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success:true,token})
         }
         else {
            res.json({success:false, message:'UnAuthorized'})
         }

     } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
     }

 }


 export {loginUser, registerUser,adminLogin}
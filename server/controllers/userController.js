import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt'


//Route for User Login
const loginUser= async(req,res) => { 

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
    

 } catch (error) {
    
 }    
 }

 //Route for Admin Login

 const adminLogin = async (req,res) => {
    
 }


 export {loginUser, registerUser,adminLogin}
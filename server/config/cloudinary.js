import {v2 as cloudinary }from 'cloudinary'

const connectCloudinary = async (
    
) => { 
    cloudinary.config({
        cloud_name:process.env.CloudinaryName,
        api_key: process.env.CloudinaryApi,
        api_secret:process.env.CloudinarySecretKey
    })
    return console.log('Cloudinary Connected')
 }

 export default connectCloudinary
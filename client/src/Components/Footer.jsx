import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
    
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Forever Clothing is your go-to destination for the latest trends in fashion. We believe in providing high-quality apparel that combines style and comfort. Our mission is to make you look and feel your best, every day.
                </p>

            </div>
            <div className="">
                <p className=" text-xl font-medium mb-5">COMPANY</p>
               <ul className='flex flex-col gap1 text-gray-600'>
                  <li>HOME</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
               </ul>
              
            </div>
           <div className="">
            <p className=" text-xl font-medium mb-5 ">GET IN TOUGH</p>
            <ul className='flex flex-col gap1 text-gray-600'>
                  <li>+91 - 999999999</li>
                <li>conact@forever.com</li>
               
               </ul>

           </div>
        </div>
        <div className="">
            <hr />
            <p className="py-5 text-sm text-center"> Copyright2025@ forever.com  - All RightReserved</p>
        </div>
    </div>
  )
}

export default Footer
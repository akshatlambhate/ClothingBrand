import React from 'react'

import { assets } from '../assets/frontend_assets/assets'
const About = () => {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white my-10 p-10 rounded-xl shadow-lg  max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-900">About Us</h1>
        <img src={assets.hero_img2} alt="Forever" className="w-[30vw] mx-auto h-auto mb-8 rounded-xl shadow-md" />
        <p className="text-xl text-gray-800 mb-6">
          Welcome to Forever Clothing, your number one source for high-end clothing solutions for all races and genders. We're dedicated to giving you the very best of fashion, with a focus on quality, inclusivity, and customer satisfaction.
        </p>
        <p className="text-xl text-gray-800 mb-6">
          Founded in 2021, Forever has come a long way from its beginnings. When we first started out, our passion for eco-friendly and trendy clothing drove us to start our own business.
        </p>
        <p className="text-xl text-gray-800 mb-6">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-xl text-gray-800">
          Sincerely,<br />
          The Forever Team
        </p>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Hero = () => {
  const items =[ <img src={assets.hero_img}  alt="" />,
    <img src={assets.hero_img2} height={1259} width={1008} className='object-contain' alt="" />,
    <img src={assets.hero_img3}  alt="" />,
    <img src={assets.hero_img4}  alt="" />
  ]
  return (
  <div className="flex flex-col sm:flex-row border border-gray-400">
    {/* Hero Left Side */}
    <div className=" w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
     <div className="text-[#414141]">
        <div className="flex items-center gap-2 ">
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>

        </div>
        <h1 className='text-3xl prata-regular sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
        <div className="flex items-center gap-2">
            <p className='font-semibold text-sm  md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
        </div>
     </div>

    </div>
    {/* Hero Right Side */}
    <div className='w-full sm:w-1/2  object-contain transition ease-in'>
       <AliceCarousel disableDotsControls disableButtonsControls mouseTracking autoPlay animationDuration={1500} infinite items={items} />
    </div>
   

  </div>
  )
}

export default Hero
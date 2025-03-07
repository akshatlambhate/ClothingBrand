import React from 'react'

const NewsLetter = () => {
    const onSubmitHandler =(e) =>{
        e.preventDefault();
        

    }
  return (
    <div className='text-center '>
        <p className="text-2xl font-medium text-gray-800"> Subscribe Now & get 20% off</p>
        <p className="text-gray-400 mt-3 ">
        Stay updated with our latest news and exclusive offers. Join our newsletter and never miss out!
        </p>
        <form onSubmit={onSubmitHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-500 pl-3'>
            <input className='w-full sm:flex-1 outline-none ' required type="email" id='email' placeholder='Enter Your email' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 '>
                SUBSCRIBE

            </button>
        </form>
    </div>
  )
}

export default NewsLetter
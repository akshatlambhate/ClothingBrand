import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartTotal = () => {
    const{curency , delivery_fee, getCartAmount} = useContext(ShopContext);
    const [isToastShown, setIsToastShown] = useState(false); // 
    useEffect(() => {
             
        if (getCartAmount() >= 799 && !isToastShown) {
          toast.info('Congrats! You qualify for free delivery.' ,{
            autoClose: 2000, // Toast disappears after 2 seconds
            pauseOnFocusLoss: false, // Disable pause on window focus loss
            pauseOnHover: false, // Disable pause on hover
          });
        

          setIsToastShown(true); // Mark toast as shown
        } else if ( getCartAmount() > 0 && getCartAmount() < 799) {
            toast.info(`Add Items Worth ₹${799-getCartAmount()} to Avail Free Delivery`,{
                autoClose: 1800, // Toast disappears after 2 seconds
                pauseOnFocusLoss: false, // Disable pause on window focus loss
                pauseOnHover: false, // Disable pause on hover
              });

          setIsToastShown(false); // Reset if cart amount drops below 799
        }
      }, [getCartAmount(), isToastShown]);

  return (
    <div className='w-full'>
        <div className="text-2xl">
            <Title text1={'CART'} text2={'TOTAL'}/>
        </div>
        
        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{curency}{getCartAmount()}.00</p>

            </div>
            <hr />
            <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>{curency}{getCartAmount()>=799 ?  'Free Delivery': delivery_fee }</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <b>Total</b>
                <b>{curency}{getCartAmount() === 0 ? 0 : getCartAmount() >= 799 ? getCartAmount() : getCartAmount() + delivery_fee}</b>
                          </div>
        </div>
    </div>
  )
}

export default CartTotal
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category , subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => { 
        if (products.length > 0) {
           let prodCopy = products.slice();
           prodCopy = prodCopy.filter((item)=> category === item.category);
           prodCopy = prodCopy.filter((item)=> subCategory === item.subCategory);
            setRelated(prodCopy.slice(0,5))
        }
     },[products])
  return (
    <div className='my-24'>
        <div className="text-center text-3xl py-2">
            <Title text1={'RELATED'} text2={'Products'} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
            {related.map((item, index)=>(
                <ProductItem onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}  key={index}  id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))}
        </div>

    </div>
  )
}

export default RelatedProducts
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { assets } from "../assets/frontend_assets/assets";

const BestSeller = () => {
  const {products} = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    console.log(products)
    const bestProduct = products.filter((item) => item.bestseller);
    console.log(bestProduct)
    setBestSeller(bestProduct.slice(0, 5));
  } ,[products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          
        </p>
      </div>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
       <div className="  border border-gray-200 border-t-gray-50 border-s-gray-100 shadow-sm   shadow-[#00000061] rounded-2xl pb-2">
        <div className="overflow-hidden rounded-2xl rounded-b-none">
          <img
            className="hover:scale-110 transition ease-in-out duration-400"
            src={assets.p_img18}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 ml-2 text-sm text-center "> Top Brand Product</p>
        <div className=" flex justify-between mx-5">
          <p className="text-sm ml-2 font-medium">
            1200
          </p>
          <p
  
          >
             Kids
          </p>
        </div>
      </div>
       <div className="  border border-gray-200 border-t-gray-50 border-s-gray-100 shadow-sm   shadow-[#00000061] rounded-2xl pb-2">
        <div className="overflow-hidden rounded-2xl rounded-b-none">
          <img
            className="hover:scale-110 transition ease-in-out duration-400"
            src={assets.p_img19}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 ml-2 text-sm text-center "> Nike Children Collection</p>
        <div className=" flex justify-between mx-5">
          <p className="text-sm ml-2 font-medium">
            1200
          </p>
          <p
  
          >
            Kids
          </p>
        </div>
      </div>
       <div className="  border border-gray-200 border-t-gray-50 border-s-gray-100 shadow-sm   shadow-[#00000061] rounded-2xl pb-2">
        <div className="overflow-hidden rounded-2xl rounded-b-none">
          <img
            className="hover:scale-110 transition ease-in-out duration-400"
            src={assets.p_img21}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 ml-2 text-sm text-center "> VIP jacket mahroon </p>
        <div className=" flex justify-between mx-5">
          <p className="text-sm ml-2 font-medium">
            1200
          </p>
          <p
  
          >
             Women
          </p>
        </div>
      </div>
       <div className="  border border-gray-200 border-t-gray-50 border-s-gray-100 shadow-sm   shadow-[#00000061] rounded-2xl pb-2">
        <div className="overflow-hidden rounded-2xl rounded-b-none">
          <img
            className="hover:scale-110 transition ease-in-out duration-400"
            src={assets.p_img23}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 ml-2 text-sm text-center "> Summer Collection Puma</p>
        <div className=" flex justify-between mx-5">
          <p className="text-sm ml-2 font-medium">
            800
          </p>
          <p
  
          >
             Kids
          </p>
        </div>
      </div>
       <div className="  border border-gray-200 border-t-gray-50 border-s-gray-100 shadow-sm   shadow-[#00000061] rounded-2xl pb-2">
        <div className="overflow-hidden rounded-2xl rounded-b-none">
          <img
            className="hover:scale-110 transition ease-in-out duration-400"
            src={assets.p_img26}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 ml-2 text-sm text-center "> Hot&Sour Jacket</p>
        <div className=" flex justify-between mx-5">
          <p className="text-sm ml-2 font-medium">
       3000
          </p>
          <p
  
          >
             Women
          </p>
        </div>
      </div>
      
       </div>
    </div>
  );
};

export default BestSeller;

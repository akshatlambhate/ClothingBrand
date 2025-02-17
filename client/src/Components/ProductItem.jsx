import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, category }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer " to={`/product/${id}`}>
      <div className="  border border-gray-200 border-t-gray-50 border-s-gray-100 shadow-sm  shadow-[#00000061 rounded-2xl pb-2">
        <div className="overflow-hidden rounded-2xl rounded-b-none">
          <img
            className="hover:scale-110 transition ease-in-out duration-400"
            src={image[0]}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 ml-2 text-sm ">{name}</p>
        <div className=" flex justify-between">
          <p className="text-sm ml-2 font-medium">
            {currency}
            {price}
          </p>
          <p
            className={`mr-5 pb-1 text-sm ml-2 px-2 py-1 rounded-sm text-white  bg-linear-60 opacity-80 ${
              category === "Men"
                ? ` from-[#caf0f8] to-[#48cae4]`
                : category === "Women"
                ? ` from-[#f7d6e0] to-[#f2b5d4]`
                : `from-[#99e2b4] to-[#56ab91]`
            } `}
          >
            {category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

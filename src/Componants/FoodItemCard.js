import React from "react";
// import { AiOutlineStar } from "react-icons/ai";
import { IMG_CDN_URL } from "./Constants";

const FoodItemCard = ({
 name,
 description,
 cloudinaryImageId,
 price,
}) => {
  return (
    <>
      <div className=" hover:border  hover:shadow-md cursor-pointer bg-white p-5 h-full  max-w-xs">
        <div className="mb-4 mt-4">
          <p className="  text-black font-poppins ">{name}</p>
          <p className="text-gray-600 overflow-hidden ">{description}</p>
          <p className="text-gray-600 overflow-hidden">{price/100}</p>
        <img src={IMG_CDN_URL+cloudinaryImageId} alt="Food Image"/>
         
        </div>
      </div>
    </>
  );
};

export default FoodItemCard;

import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { IMG_CDN_URL } from "./Constants";

const Card = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
  deliveryTime,
  costForTwoString,
  area,
  avgRating,
}) => {
  return (
    <>
      <div className=" hover:border  hover:shadow-md cursor-pointer bg-white p-5 h-full  max-w-xs">
        <div>
          <img
            className=""
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="Just a food image"
          />
        </div>

        <div className="mb-4 mt-4">
          <p className="  text-black font-poppins ">{name}</p>
          <p className="text-gray-600 overflow-hidden ">{cuisines.join(",")}</p>
          <p className="text-gray-600 overflow-hidden">{area}</p>
          <div className="flex  items-center">
          <p className="text-green-400 overflow-hidden">{avgRating}</p>
          <AiOutlineStar className="text-green-400 text-lg"/>
          </div>
          <div className="flex pb-5 text-xs mb-2 border-b  mt-4 font-poppins text-gray-600 justify-between items-center">
            <p className="bg-green-400 p-1">{totalRatingsString}</p>
            <p className="">{deliveryTime} Mins</p>
            <p className="">{costForTwoString}</p>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

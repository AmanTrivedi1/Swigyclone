import React from "react";
import { IMG_CDN_URL } from "./Constants";
import "../Componants/Card.css";
const Card = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <>
      
        <div className=" hover:border  hover:shadow-md cursor-pointer bg-white p-5 h-96  max-w-xs">
          <div >
            <img
              className=""
              src={IMG_CDN_URL + cloudinaryImageId}
              alt="Just a food image"
            />
          </div>

          <div className="mb-4 mt-4">
            <p className="  text-black font-poppins ">{name}</p>
            <p className="text-gray-600 overflow-hidden ">
              {cuisines.join(",")}
            </p>
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

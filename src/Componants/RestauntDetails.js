import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Componants/Constants";
import { addItem } from "../Utils/cartSlice";
import useReastaurant from "../Utils/useRestaurant";
import Simmer from "./Simmer";

const RestauntDetails = () => {
  const { resId } = useParams();
  console.log(resId);

  const [restaurant] = useReastaurant(resId);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  if (!restaurant) {
    return <Simmer />;
  }

  return (
    <>
      <div className="">
        <div className="flex p-4 sticky top-0 z-50 justify-center duration-150 transition-all gap-x-20 font-poppins text-[#fff] bg-[#171A29]">
          <div>
            <img
              className="max-h-52"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
              alt=""
            />
          </div>
          <div className="leading-10 flex-col flex  gap-y-2">
            {/* <h1 >Restraunt id: {resId}</h1> */}
            <h2 className="text-3xl  uppercase font-normal">
              {restaurant?.name}
            </h2>
            <h3 className="text-sm text-[#B9BABE] ">{restaurant?.area}</h3>
            <h3 className="text-sm text-[#B9BABE]">{restaurant?.city}</h3>
            <div className="flex gap-x-8 ">
              <div>
                <h3>{restaurant?.avgRating} </h3>
                <p className="text-xs text-[#B9BABE]">stars</p>
              </div>
              <div>
                <h3>{restaurant?.costForTwoMsg}</h3>
                <p className="text-xs text-[#B9BABE]">Cost For two</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div></div> */}
        <div className=" flex justify-center ">
          <div className=" font-poppins pt-10 pb-10 ">
            {Object.values(restaurant?.menu?.items).map((item) => (
              <div key={item.id}>
                <div className="max-w-2xl flex items-center justify-between  p-4 border-b-2">
                  <div className="w-96">
                    <h3 className="text-[#4D5060] font-medium ">
                      {item.name}{" "}
                    </h3>
                    <h3 className="text-[#4D5060] text-xs">
                      {item.price / 100} INR{" "}
                    </h3>
                    <p className="overflow-hidden text-[#C1C2C7] font-light text-sm ">
                      {" "}
                      {item?.description}{" "}
                    </p>
                  </div>
                  <div className=" flex flex-col items-center justify-center gap-1">
                    <img
                      className="max-h-20 rounded-lg"
                      src={IMG_CDN_URL + item?.cloudinaryImageId}
                    />
                    <button
                      className="text-xs bg-[#4ADE80] px-2 py-1"
                      onClick={() => handleAddItems(item)}
                    >
                      Add Items
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestauntDetails;

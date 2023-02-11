import React, { useState, useEffect } from "react";
import Card from "./Card";
import { BsSearch } from "react-icons/bs";
import useOnline from "../Utils/useOnline";
// import { resraurantList } from "../Componants/Constants";
import Shimmer from "../Componants/Simmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteresRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1 className="text-4xl text-[#4ADE80] font-poppins flex items-center justify-center ">
        Offline Please Check Your Conection
      </h1>
    );
  }

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (filteresRestaurant.length === 0) {
    return (
      <Shimmer/>
    );
  }

  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex flex-col  items-center  gap-y-6">
        <div className="flex sticky">
          <input
            type="text"
            placeholder="Search"
            className="shadow appearance-none border-[#52C47B] text-sm font-poppins focus:shadow-xl py-2 px-2 text-gray-700 leading-tight focus:outline-none  "
            value={searchText}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="bg-[#52C47B]  text-lg hover:shadow-lg  font-poppins text-[#fff] py-2 px-2 "
            onClick={() => {
              const data = filterData(searchText, allRestaurant);
              setfilteredRestaurant(data);
            }}
          >
            <BsSearch />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {filteresRestaurant &&
            filteresRestaurant.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <Card {...restaurant.data} />
                </Link>
              );
              // console.log(restaurant.data.id);
            })}
        </div>
      </div>
    </>
  );
};

export default Body;

// if (!allRestaurant.length === 0) return "Data Not find";

//   if (filteresRestaurant.length === 0){
//     return <div className="flex h-screen justify-center items-center font-poppins text-4xl text-[#52C47B]"><h1>No Data Found</h1></div>
//   }

//   return allRestaurant.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//     <div className="flex flex-col  items-center  gap-y-6">
//       <div className="flex sticky">
//         <input
//           type="text"
//           placeholder="Search"
//           className="shadow appearance-none border-[#52C47B] text-sm font-poppins focus:shadow-xl py-2 px-2 text-gray-700 leading-tight focus:outline-none  "
//           value={searchText}
//           onChange={(e) => {
//             setSearchInput(e.target.value);
//           }}
//         />
//         <button
//           className="bg-[#52C47B]  text-lg hover:shadow-lg  font-poppins text-[#fff] py-2 px-2 "
//           onClick={() => {
//             const data = filterData(searchText, allRestaurant);
//             setfilteredRestaurant(data);
//           }}
//         >
//           <BsSearch />
//         </button>
//       </div>
//       <div className="flex flex-wrap justify-center gap-5">
//       {filteresRestaurant &&
//         filteresRestaurant.map((restaurant) => {
//           return (
//             <Link
//               to={"/restaurant/" + restaurant.data.id}
//               key={restaurant.data.id}
//             >
//               <Card  {...restaurant.data} />
//             </Link>
//           );
//           // console.log(restaurant.data.id);
//         })}
//       </div>
//       </div>
//     </>
//   );
// };

// export default Body;

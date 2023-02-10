import React, { useState, useEffect } from "react";
import Card from "./Card";
import { BsSearch } from "react-icons/bs";
// import { resraurantList } from "../Componants/Constants";
import Shimmer from "../Componants/Simmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurant) {
  const filterdData = restaurant.filter((restaurant) =>
    restaurant.data.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterdData;
}

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteresRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurant.length === 0) return "Data Not find";

  if (filteresRestaurant.length === 0) return "No Restraunt founded";
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
              <Card  {...restaurant.data} />
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
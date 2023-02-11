import React from "react";
import { useContext } from "react";
import logo from "../company-logo.478e4b19a79eb5f3671f.png";
import { Link } from "react-router-dom";
import userContext from "../Utils/userContext";
const Navbar = () => {

  const {user} = useContext(userContext);

  return (
    <>
      <div className="flex font-poppins sticky top-0 z-50 bg-[#fff]   mb-5 shadow-lg pl-10 pr-10 justify-between items-center">
        <div>
          <img src={logo} className="w-[54px]" alt="Company Logo" />
        </div>
        <div className="text-gray-900 cursor-pointer">
          <ul className="flex items-center  gap-x-12">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
            <Link to="/Contact">
              <li>Contact</li>
            </Link>
            <Link to="/Instamart">
              <li>Instamart</li>
            </Link>
          </ul>
        </div>
        <div className="cursor-pointer">
          <ul className=" flex gap-12 ">
            <li className="bg-[#52C47B] hover:shadow-md text-[#fff] pr-[10px] pt-[4px] pb-[5px] pl-[10px]">
              Login
            </li>
            <li className="bg-[#52C47B] hover:shadow-md text-[#fff] pr-[10px] pt-[4px] pb-[5px] pl-[10px]">
              SignUp
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import logo from "../company-logo.478e4b19a79eb5f3671f.png";
import { Link } from "react-router-dom";
import userContext from "../Utils/userContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const { user } = useContext(userContext);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const cartItems = useSelector(store => store.cart.items);
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
            <Link to="/Cart">
            <li>Cart {cartItems.length} </li>
            </Link>
          </ul>
        </div>
        <div className="cursor-pointer">

          <ul className=" flex gap-12 ">
            <li>
              {
                isAuthenticated && <p className="w-24 flex overflow-hidden items-center ">
                <span className="text-[#4ADE80] mr-2" >Hello </span>   {user.name}
                </p>
              }
            </li>
            {isAuthenticated ? (
              <li>
                <button
                className="bg-[#4ADE80] text-[#fff] hover:shadow-xl pl-4 pr-4 pt-1 pb-1"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button 
                className="bg-[#4ADE80] text-[#fff] hover:shadow-xl pl-4 pr-4 pt-1 pb-1"
                onClick={() => loginWithRedirect()}>Log In</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

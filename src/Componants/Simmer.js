import React from "react";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Simmer = () => {
  return (
    <>
    <div aria-label="Loading..."  role="status" className="flex h-screen justify-center w-full items-center space-x-2">
  <svg className="h-16 w-16 animate-spin stroke-[#52C47B]" viewBox="0 0 256 256">
    <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
    <line
      x1="195.9"
      y1="60.1"
      x2="173.3"
      y2="82.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"></line>
    <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
    <line
      x1="195.9"
      y1="195.9"
      x2="173.3"
      y2="173.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"></line>
    <line x1="128" y1="224" x2="128" y2="192"   strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
    <line
      x1="60.1"
      y1="195.9"
      x2="82.7"
      y2="173.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"></line>
    <line x1="32" y1="128" x2="64" y2="128"   strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
    <line
      x1="60.1"
      y1="60.1"
      x2="82.7"
      y2="82.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"></line>
  </svg>
  <span className="text-xl font-poppins font-medium text-[#52C47B]">Loading...</span>
</div>

<h1 className="text-2xl flex items-center justify-center h-screen">404Not Found</h1>
    </>
  );
};

export default Simmer;

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url(https://img.freepik.com/premium-photo/abstract-blur-defocused-hotel-lobby-interior-background-vintage-filter_875825-64135.jpg)] bg-no-repeat bg-cover  ">
      <h1 className="text-9xl font-bold mb-4 text-shadow-2xs text-shadow-gray-500 ">Welcome to Hotel Management System</h1>
      <Link to="/login" className="bg-transparent border-[7px] text-black px-4 py-2 rounded text-6xl  mt-[150px] h-[150px] w-[700px] text-center flex items-center justify-center rounded-4xl  animate-pulse hover:scale-105 transition transform duration-300 ">
        Click To Sign Up
      </Link>
      
      
      
    </div>
  );
}
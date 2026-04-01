import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
// Logo
// Sign Up Login
// Home Products Solutions Pricing Contact
const Nav = () => {
  const [activeLink, setActiveLink] = useState(false);
  return (
    <div>
      <div className="bg-amber-100 shadow-sm p-2 flex justify-between items-center">
        <div className="flex items-center">
          {activeLink ? (
            <HiX
              onClick={() => setActiveLink(!activeLink)}
              className="w-8 h-8 md:hidden"
            />
          ) : (
            <HiMenu
              onClick={() => setActiveLink(!activeLink)}
              className="w-8 h-8 md:hidden"
            />
          )}
          <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
        </div>

        <div className=" sm:hidden md:block">
          <div className="flex gap-3">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="">Solution</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-white w-25 h-10 rounded-xl">Sign Up</button>
          <button className="bg-[#8b3dff] w-25 h-10 rounded-xl text-white">
            Login
          </button>
        </div>
      </div>
      {activeLink && (
        <div className="md:hidden p-2 bg-amber-100 w-50">
          <div className="flex flex-col gap-3  md:block">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="">Solution</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;

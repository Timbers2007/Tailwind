import React from "react";

const TWHicheel = () => {
  return (
    <div className="m-10">
      <h1 className="text-red-500 sm:text-amber-400 md:text-green-500 lg:text-purple-900 text-7xl">
        Responsive design
      </h1>
      <div className="mt-10 flex gap-5  md:flex-row  flex-col">
        <img
          className="w-50 h-80 md:w-100 md:h-50 md:object-cover"
          src="https://plus.unsplash.com/premium_photo-1664304934891-8e051f5e19f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <ul className="flex flex-row md:flex-col mt-5 gap-5 ">
          <li>Home</li>
          <li>About me</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default TWHicheel;

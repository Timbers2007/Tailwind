import React from "react";
import leftImage from "../assets/monitor-card.webp";
const Monitor = () => {
  return (
    <div className="flex sm:flex-col md:flex-row sm:items-center w-full ">
      <div className="w-1/2 sm:w-2/3  sm:px-2 md:px-8 ">
        <h1 className="text-emerald-800 font-semibold">MONITOR</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6">
          Introducing best mobile carousels
        </h2>
        <p className="text-gray-800 mb-8">
          Before the ship is really back. Round, round, all round the world.
          Round all around the world. Round all around the world.
        </p>

        <div className="flex items-center">
          <p className="text-blue-500 font-semibold">
            Learn more about monitoring
          </p>
          <p className="text-blue-500 font-semibold text-2xl">→</p>
        </div>
      </div>
      <div className="w-1/2  sm:px-4 md:px-8 flex justify-center md:mr-8 ">
        <img src={leftImage} alt="" />
      </div>
    </div>
  );
};

export default Monitor;

import React from "react";
import rightImage from "../assets/stats.webp";
const Schedule = () => {
  return (
    <div className="flex sm:flex-col md:flex-row sm:items-center w-full mb-8 ">
      <div className="w-1/2  sm:px-4 md:px-8 flex justify-center md:mr-8 ">
        <img src={rightImage} alt="" />
      </div>
      <div className="w-1/2 sm:w-2/3  sm:px-2 md:px-8 ">
        <h1 className="text-orange-500 font-semibold">SCHEDULE</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6">
          Streamline Your Business With Smart Scheduling Solutions
        </h2>
        <p className="text-gray-800 mb-8">
          Take control of your time boost productivity with our intelligent
          scheduling system. Automate appointments, manage team availability,
          and deliver exceptional customer experience through seamless calendar
          management.
        </p>

        <div className="flex items-center">
          <p className="text-blue-500 font-semibold">
            Explose scheduling features
          </p>
          <p className="text-blue-500 font-semibold text-2xl">→</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

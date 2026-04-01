import React from "react";
import { features } from "../data/data";
const Features = () => {
  return (
    <div className="w-full mx-auto px-4 py-8 flex flex-col justify-center">
      <h1 className="text-center text-3xl font-bold mb-4">
        How can we help your business?
      </h1>
      <p className="text-center text-gray-600 mb-8 ">
        When you resell besnik, you build trus and increase
      </p>
      <div className="flex sm:flex-col md:flex-row">
        {features.map((item, index) => (
          <div className="flex flex-col flex-1 p-6 items-center">
            <div
              className="w-24 h-24 rounded-full flex justify-center items-center mb-4"
              style={{
                backgroundColor:
                  index === 0 ? "#ff0000" : index === 1 ? "#00ff00" : "#0000ff",
              }}
            >
              <div className="text-3xl">{item.icon}</div>
            </div>
            <p className="text-2xl mb-4 font-semibold">{item.title}</p>
            <p className="text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

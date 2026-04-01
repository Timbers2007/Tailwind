import React from "react";
import { services } from "../data/data";

const Service = () => {
  return (
    <div className="w-full flex flex-col md:flex-row mx:auto">
      <div className="w-1/2 flex flex-col px-8 py-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Future of suppport with new shape
        </h1>

        <p className="text-lg text-gray-600 mb-4">
          Discuss your goals, determine succes metrics, identify problems{" "}
        </p>
        <p className="flex justify-start items-center">
          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 flex items-center justify-center"></div>
          </div>
          UX design content strategy
        </p>
        <p className="flex justify-start items-center">
          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 flex items-center justify-center"></div>
          </div>
          Development bring
        </p>
        <button className="mt-8 w-1/3 bg-indigo-600 text-white rounded-full px-8 py-4">
          Get Started
        </button>
      </div>
      <div className="w-1/2 flex flex-wrap gap-8 px-8 py-4">
        {services.map((item) => (
          <div className="w-[40%] flex flex-col">
            <div className="mb-4">{item.icon}</div>
            <h2 className="text-xl text-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a className="text-indigo-600 font-medium" href={item.link}>
              {" "}
              LEARN MORE
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

import React, { useState } from "react";

const Price = () => {
  const [number, setNumber] = useState(1);

  const handleNumber = (event) => {
    // console.log(event.target.value);
    setNumber(event.target.value);
  };
  const Pricestarter = number * 80;
  const Pricebusiness = number * 150;
  return (
    <div className="w-full flex flex-col items-center mx-auto">
      <h1 className="font-bold text-3xl md:text-4xl text-center mb-8">
        Pricing
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-center gap-8 mb-8">
        <div className="w-1/3 flex flex-col justify-center shadow-lg rounded-lg p-8">
          <h2 className="text-xl text-gray-600 mb-4">Starter</h2>
          <p className="text-3xl font-bold mb-6">${Pricestarter}/mo</p>
        </div>
        <div className="w-1/3 flex flex-col justify-center shadow-lg rounded-lg p-8">
          <h2 className="text-xl text-gray-600 mb-4">Business</h2>
          <p className="text-3xl font-bold mb-6">${Pricebusiness}/mo</p>
        </div>
      </div>
      <div className="px-4 mb-8">
        <span className="text-xs text-gray-600">1</span>
        <input
          type="range"
          min={1}
          max={50}
          value={number}
          onChange={handleNumber}
        />
        <span className="text-xs text-gray-600">50</span>
      </div>
      <h2 className="text-xl text-gray-600 mb-4">Ready get started?</h2>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl mb-4">
        Get Started
      </button>
    </div>
  );
};

export default Price;

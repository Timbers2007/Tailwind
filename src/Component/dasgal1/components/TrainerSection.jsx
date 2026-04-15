import React from "react";
import { trainers } from "../data/data";

const WhyChooseUs = () => {
    return (
        <div className="w-full bg-blue-700 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl text-white font-bold text-center mb-3">Meet Our Trainers</h2>
                <p className="text-center text-gray-300 mb-10">
                    Learn from experienced and motivating coaches
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    {trainers.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 bg-blue-900 rounded-2xl"
                        >
                            <img className="rounded-2xl" src={item.image} alt="" />
                            <h3 className="text-2xl pl-5 text-white font-semibold mb-3 pt-5">{item.name}</h3>
                            <p className="text-green-300 pl-5 pb-5">{item.specialty}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
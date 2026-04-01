import React from "react";
import { services } from "../data/data";

const ServiceSection = () => {
    return (
        <div className="w-full py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3">Our Services</h2>
                <p className="text-center text-gray-600 mb-10">
                    We make your travel simple and comfortable
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 bg-sky-50 rounded-2xl p-6 text-center"
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
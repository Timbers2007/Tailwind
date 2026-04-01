import React from "react";
import { destinations } from "../data/data";

const DestinationList = () => {
    return (
        <div className="w-full bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3">
                    Popular Destinations
                </h2>
                <p className="text-center text-gray-600 mb-10">
                    Choose your favorite destination for your next holiday
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {destinations.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow p-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-52 object-cover rounded-xl mb-4"
                            />
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <span className="text-sky-600 font-bold">{item.price}</span>
                            </div>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationList;
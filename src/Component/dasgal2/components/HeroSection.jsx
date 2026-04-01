import React from "react";

const HeroSection = () => {
    return (
        <div className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <p className="text-sky-600 font-semibold mb-3">Explore the world</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                        Discover amazing places with our travel packages
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Find your next adventure with affordable trips, easy booking, and
                        unforgettable experiences.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-sky-600 text-white px-6 py-3 rounded-xl">
                            Start Trip
                        </button>
                        <button className="bg-gray-100 px-6 py-3 rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
                        alt="travel"
                        className="w-full max-w-md rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
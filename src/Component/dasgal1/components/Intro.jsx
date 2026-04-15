import React from "react";
import introImage from "../assets/introImage.avif"
const Banner = () => {
    return (
        <div className="w-full bg-blue-900 py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <p className="text-green-300 font-semibold mb-3">
                        Train smarter
                    </p>
                    <h1 className="text-3xl text-white md:text-6xl font-bold leading-tight mb-5">
                        Transform your body with daily fitness programs
                    </h1>
                    <p className="text-gray-300 mb-6 text-lg">
                        Join powerful workout sessions, expert trainers, and flexible plans designed for beginners and advanced members
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-green-300 text-black px-6 py-3 rounded-xl">
                            Start Today
                        </button>
                        <button className="bg-blue-900 border-2 text-white px-6 py-3 rounded-xl">
                            View Plans
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={introImage}
                        alt="students learning"
                        className="rounded-2xl w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
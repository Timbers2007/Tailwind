import React from "react";

const Banner = () => {
    return (
        <div className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <p className="text-indigo-600 font-semibold mb-3">
                        Start learning today
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                        Improve your skills with online courses
                    </h1>
                    <p className="text-gray-600 mb-6 text-lg">
                        Learn programming, design, and teamwork with simple projects and
                        clear lessons for beginners.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
                            Get Started
                        </button>
                        <button className="bg-gray-100 px-6 py-3 rounded-xl">
                            View Courses
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                        alt="students learning"
                        className="rounded-2xl w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
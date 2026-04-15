import React from "react";
import { programs } from "../data/data";

const CourseList = () => {
    return (
        <div className="w-full bg-blue-900 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl text-white font-bold text-center mb-3">Our Programs</h2>
                <p className="text-center text-gray-300 mb-10">
                    Choose the workout style that matches your goals
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {programs.map((course, index) => (
                        <div key={index} className="bg-blue-700 rounded-2xl shadow p-4">
                            <h2 className="text-5xl pl-2">{course.icon}</h2>
                            <p className="text-sm text-white font-semibold pl-5 mb-2">
                                {course.level}
                            </p>
                            <h3 className="text-xl text-white font-bold pl-2 mb-2">{course.title}</h3>
                            <p className="text-gray-300 pl-2 pb-2 mb-4">{course.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseList;
import React from "react";
import { courses } from "../data/data";

const CourseList = () => {
    return (
        <div className="w-full bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3">Popular Courses</h2>
                <p className="text-center text-gray-600 mb-10">
                    Choose a course and start building your skills
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow p-4">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <p className="text-sm text-indigo-600 font-semibold mb-2">
                                {course.level}
                            </p>
                            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                                Join Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseList;
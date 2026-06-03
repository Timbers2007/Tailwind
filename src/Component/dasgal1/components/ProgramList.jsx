import React from "react";
import { programs } from "../data/data";

// CourseList renders the public program cards on the homepage.
// The card content is data-driven, so most website changes belong in data.jsx.
const CourseList = () => {
    return (
        <div id="programs" className="w-full bg-slate-950 py-12 px-4 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl text-white font-bold text-center mb-3">Our Programs</h2>
                <p className="text-center text-slate-300 mb-10">
                    Choose the workout style that matches your goals
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* One card is created for every object in the programs array.
                        Add another program in data.jsx and it appears here. */}
                    {programs.map((course, index) => (
                        <div key={index} className="rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-xl shadow-black/20">
                            <h2 className="text-5xl pl-2">{course.icon}</h2>
                            {/* level is optional. It appears only if a program
                                object includes a level property. */}
                            {course.level && (
                                <p className="text-sm text-white font-semibold pl-5 mb-2">
                                    {course.level}
                                </p>
                            )}
                            <h3 className="text-xl text-white font-bold pl-2 mb-2">{course.title}</h3>
                            <p className="text-slate-300 pl-2 pb-2 mb-4">{course.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseList;

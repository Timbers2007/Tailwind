import React from "react";
import introImage from "../assets/introImage.avif";

// Banner is the hero section at the top of the homepage.
// To reuse this layout for another website, change the headline text,
// button labels, and imported hero image.
const Banner = ({ onStartToday, onViewPlans }) => {
    return (
        <div id="home" className="w-full bg-slate-950 px-4 py-14 scroll-mt-24 md:py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left side: marketing copy and primary actions. */}
                <div className="w-full md:w-1/2">
                    <p className="text-lime-400 font-semibold mb-3">
                        Train smarter
                    </p>
                    <h1 className="text-3xl text-white md:text-6xl font-bold leading-tight mb-5">
                        Transform your body with daily fitness programs
                    </h1>
                    <p className="text-slate-300 mb-6 text-lg leading-8">
                        Join powerful workout sessions, expert trainers, and flexible plans designed for beginners and advanced members
                    </p>

                    <div className="flex gap-4">
                        {/* These handlers come from FitnessPage so the hero can
                            open modals or switch views without owning that state. */}
                        <button
                            type="button"
                            onClick={onStartToday}
                            className="cursor-pointer rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 hover:bg-lime-500"
                        >
                            Start Today
                        </button>
                        <button
                            type="button"
                            onClick={onViewPlans}
                            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white hover:border-white/40 hover:bg-slate-900"
                        >
                            View Plans
                        </button>
                    </div>
                </div>

                {/* Right side: the hero image imported from the assets folder. */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={introImage}
                        alt="students learning"
                        className="w-full max-w-md rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;

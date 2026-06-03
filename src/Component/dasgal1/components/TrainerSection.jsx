import React from "react";
import { trainers } from "../data/data";

// WhyChooseUs is the trainer section on the homepage.
// It maps trainer data into clickable cards; clicking a card opens the
// detailed advice view for that trainer.
const WhyChooseUs = ({ onSelectTrainer }) => {
    return (
        <div id="trainers" className="w-full bg-slate-950 py-12 px-4 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl text-white font-bold text-center mb-3">Meet Our Trainers</h2>
                <p className="text-center text-slate-300 mb-10">
                    Learn from experienced and motivating coaches
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Trainer cards are generated from data.jsx. Each trainer
                        needs an id, name, specialty, image, and advice fields. */}
                    {trainers.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelectTrainer(item.id)}
                            className="flex-1 cursor-pointer overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-left shadow-xl shadow-black/20 hover:border-lime-400/50"
                        >
                            <img className="h-80 w-full object-cover" src={item.image} alt={item.name} />
                            <h3 className="text-2xl pl-5 text-white font-semibold mb-3 pt-5">{item.name}</h3>
                            <p className="text-lime-400 pl-5 pb-5">{item.specialty}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

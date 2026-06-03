import React from "react";
import { planDetails } from "../data/data";

// TrainingPlansView is the full page opened by the "View Plans" hero button.
// It is data-driven by planDetails, so new plans should usually be added there.
const TrainingPlansView = ({ onBackHome }) => {
    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white md:py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-lime-400">
                            View Plans
                        </p>
                        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                            Detailed training plans
                        </h1>
                        <p className="max-w-3xl text-lg leading-8 text-slate-400">
                            Explore the structure, timeline, and weekly goals behind each FitZone program.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onBackHome}
                        className="w-fit rounded-xl bg-lime-400 px-6 py-4 font-bold text-slate-950 hover:bg-lime-500 md:mt-5"
                    >
                        Back to Home
                    </button>
                </div>

                <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Every plan object becomes one detailed card. */}
                    {planDetails.map((plan) => (
                        <article
                            key={plan.id}
                            className="flex min-h-[28rem] flex-col rounded-3xl border border-slate-800 bg-slate-900 px-6 py-7 shadow-xl shadow-black/20"
                        >
                            <p className="mb-4 font-bold text-lime-400">{plan.duration}</p>
                            <h2 className="mb-6 text-2xl font-bold leading-tight md:text-3xl">
                                {plan.title}
                            </h2>
                            <p className="mb-5 text-lg text-slate-300">
                                <span className="font-bold text-slate-100">Schedule:</span> {plan.schedule}
                            </p>
                            <p className="mb-7 leading-8 text-slate-400">{plan.goal}</p>

                            <div className="mt-auto space-y-3">
                                {/* Milestones is an array so each plan can have
                                    a different number of timeline rows. */}
                                {plan.milestones.map((milestone) => (
                                    <div
                                        key={milestone}
                                        className="rounded-2xl bg-slate-800 px-5 py-4 leading-7 text-slate-200"
                                    >
                                        {milestone}
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default TrainingPlansView;

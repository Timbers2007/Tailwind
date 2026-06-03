import React from "react";
import { trainers } from "../data/data";

// TrainerAdviceView is the full page shown after clicking a trainer card.
// It looks up the clicked trainer by id and displays their image, advice, and tips.
const TrainerAdviceView = ({ trainerId, onBackHome }) => {
    // If trainerId is missing or invalid, fall back to the first trainer so the
    // page still renders instead of showing an error.
    const trainer = trainers.find((item) => item.id === trainerId) || trainers[0];

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white md:py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-lime-400">
                            Trainer Advice
                        </p>
                        <h1 className="mb-3 text-4xl font-bold leading-tight md:text-5xl">
                            {trainer.name}
                        </h1>
                        <p className="text-xl font-semibold text-lime-400">{trainer.specialty}</p>
                    </div>

                    <button
                        type="button"
                        onClick={onBackHome}
                        className="w-fit rounded-xl bg-lime-400 px-6 py-4 font-bold text-slate-950 hover:bg-lime-500 md:mt-5"
                    >
                        Back to Home
                    </button>
                </div>

                <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
                    <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="h-[22rem] w-full rounded-3xl object-cover object-center shadow-xl shadow-black/30 md:h-[30rem]"
                    />

                    <article className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-8 shadow-xl shadow-black/20 md:px-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-lime-400">
                            Coach Insight
                        </p>
                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                            {trainer.adviceTitle}
                        </h2>
                        <p className="mb-7 text-lg leading-8 text-slate-300">{trainer.advice}</p>

                        <div className="space-y-4">
                            {/* Each tip becomes one row. Edit the tips array in
                                data.jsx to add, remove, or rename these rows. */}
                            {trainer.tips.map((tip) => (
                                <div
                                    key={tip}
                                    className="rounded-2xl bg-slate-800 px-5 py-4 leading-7 text-slate-200"
                                >
                                    {tip}
                                </div>
                            ))}
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default TrainerAdviceView;

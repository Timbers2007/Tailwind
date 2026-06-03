import React, { useEffect } from "react";
import { programmingTracksModalContent, programs } from "../data/data";

// ProgrammingTracksModal is the large modal opened by the "Start Today" button.
// It shows detailed versions of the homepage programs and lets the user add one.
const ProgrammingTracksModal = ({ activeProgramIds = [], open, onAddProgram, onClose }) => {
    // introductions stores the extra details for each program id.
    const { introductions } = programmingTracksModalContent;

    // When the modal opens, lock background scrolling and allow Escape to close it.
    // The returned cleanup restores scrolling and removes the key listener.
    useEffect(() => {
        if (!open) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [open, onClose]);

    // If open is false, React renders nothing for this modal.
    if (!open) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 md:items-center"
            onClick={onClose}
        >
            <div
                className="w-full max-w-6xl rounded-[2rem] border border-green-300/20 bg-slate-900 px-6 py-8 shadow-[0_0_0_1px_rgba(132,204,22,0.08)] md:px-8"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="mb-8 flex items-start justify-between gap-4">
                    {/* Modal title, description, and labels come from data.jsx,
                        making this component reusable for another set of cards. */}
                    <div className="max-w-4xl">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-lime-400">
                            {programmingTracksModalContent.eyebrow}
                        </p>
                        <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                            {programmingTracksModalContent.title}
                        </h2>
                        <p className="max-w-3xl text-lg leading-8 text-slate-300">
                            {programmingTracksModalContent.description}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full bg-slate-700 px-5 py-3 text-base font-semibold text-white hover:bg-slate-800"
                    >
                        {programmingTracksModalContent.closeLabel}
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Each program card combines basic program data with its
                        matching detailed introduction by id. */}
                    {programs.map((program) => {
                        const introduction = introductions[program.id];

                        // Used to disable the button after a program is already added.
                        const isAdded = activeProgramIds.includes(program.id);

                        return (
                            <article
                                key={program.id}
                                className="flex min-h-[31rem] flex-col rounded-3xl bg-slate-950 px-6 py-7 text-white shadow-lg"
                            >
                                <p className="mb-3 text-sm font-bold text-lime-400">{introduction.duration}</p>
                                <h3 className="mb-4 text-2xl font-bold leading-tight">{program.title}</h3>
                                <p className="mb-6 text-lg leading-8 text-slate-300">{introduction.description}</p>

                                <div className="mb-6 space-y-2 text-lg">
                                    {/* These labels are stored in data.jsx so the
                                        modal can be renamed without editing JSX. */}
                                    <p className="font-semibold">
                                        {programmingTracksModalContent.sessionsLabel}:{" "}
                                        <span className="font-normal">{introduction.sessions}</span>
                                    </p>
                                    <p className="font-semibold">
                                        {programmingTracksModalContent.scheduleLabel}:{" "}
                                        <span className="font-normal">{introduction.schedule}</span>
                                    </p>
                                </div>

                                <div className="mb-6 space-y-3">
                                    {/* Highlights is an array, so the number of
                                        bullet-style rows can change per program. */}
                                    {introduction.highlights.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl bg-lime-950/80 px-4 py-3 text-base leading-7 text-slate-100"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    // The parent decides whether login is required before adding.
                                    onClick={() => onAddProgram(program.id)}
                                    disabled={isAdded}
                                    className={`mt-auto w-full rounded-xl px-5 py-4 font-bold transition ${
                                        isAdded
                                            ? "cursor-default bg-lime-950 text-lime-400"
                                            : "bg-lime-400 text-slate-950 hover:bg-lime-500"
                                    }`}
                                >
                                    {isAdded
                                        ? programmingTracksModalContent.addedLabel
                                        : programmingTracksModalContent.addLabel}
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProgrammingTracksModal;

import React, { useEffect, useState } from "react";
import { activePrograms, programs } from "../data/data";

// MyPrograms is the account-style page shown when the user clicks My Programs.
// It receives the selected program ids from FitnessPage and turns them into cards.
const MyPrograms = ({
    activeProgramIds,
    currentUser,
    onAddProgram,
    onBackHome,
    onCancelProgram,
    onUpdateProfile,
}) => {
    // Controls the smaller modal used to add another program from this page.
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [profileMessage, setProfileMessage] = useState("");
    const [profileValues, setProfileValues] = useState(() => ({
        fullName: currentUser?.fullName || "",
        email: currentUser?.email || "",
        phone: currentUser?.phone || "",
        city: currentUser?.city || "",
        preferredProgram: currentUser?.preferredProgram || "",
        password: currentUser?.password || "",
        fitnessGoal: currentUser?.fitnessGoal || "",
    }));

    // Lock background scroll and close with Escape while a modal is open.
    useEffect(() => {
        if (!isAddModalOpen && !isProfileModalOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsAddModalOpen(false);
                setIsProfileModalOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isAddModalOpen, isProfileModalOpen]);

    useEffect(() => {
        setProfileValues({
            fullName: currentUser?.fullName || "",
            email: currentUser?.email || "",
            phone: currentUser?.phone || "",
            city: currentUser?.city || "",
            preferredProgram: currentUser?.preferredProgram || "",
            password: currentUser?.password || "",
            fitnessGoal: currentUser?.fitnessGoal || "",
        });
    }, [currentUser]);

    // Local display details for the active-program cards.
    // These ids must match the program ids in data.jsx.
    // You can move this into data.jsx later if you want all text in one file.
    const programDetails = {
        1: {
            coach: "Alex Morgan",
            schedule: "Mon, Wed, Fri",
            progress: "2 of 12 sessions completed",
        },
        2: {
            coach: "Sophie Lee",
            schedule: "Tue, Thu",
            progress: "1 of 10 sessions completed",
        },
        3: {
            coach: "Jordan Miles",
            schedule: "Sat, Sun",
            progress: "0 of 8 sessions completed",
        },
    };

    // Convert the selected ids into full card objects.
    // This merges basic program info, progress info from data.jsx, and local details.
    const activeProgramCards = activeProgramIds
        .map((id) => {
            const program = programs.find((item) => item.id === id);

            // If an id no longer exists in programs, skip it instead of crashing.
            if (!program) {
                return null;
            }

            const currentProgram = activePrograms.find((item) => item.id === id);

            return {
                ...program,
                status: "Active Program",
                ...programDetails[id],
                ...currentProgram,
                progress: programDetails[id]?.progress || currentProgram?.progress,
            };
        })
        .filter(Boolean);

    const accountName = currentUser?.fullName || "Fitness Member";
    const accountStats = [
        { label: "Email", value: currentUser?.email || "Not added", highlight: true },
        { label: "Phone", value: currentUser?.phone || "Not added" },
        { label: "City", value: currentUser?.city || "Not added" },
        { label: "Fitness Goal", value: currentUser?.fitnessGoal || currentUser?.preferredProgram || "Not added" },
    ];

    const profileFields = [
        { name: "fullName", label: "Full Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone Number", type: "text" },
        { name: "city", label: "City", type: "text" },
        { name: "preferredProgram", label: "Preferred Program", type: "text" },
        { name: "password", label: "Password", type: "password" },
    ];

    const handleProfileChange = (fieldName, value) => {
        setProfileMessage("");
        setProfileValues((currentValues) => ({
            ...currentValues,
            [fieldName]: value,
        }));
    };

    const handleProfileSubmit = (event) => {
        event.preventDefault();
        onUpdateProfile(profileValues);
        setProfileMessage("Account details saved successfully.");
    };

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white md:py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-lime-400">
                            My Programs
                        </p>
                        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                            Your active fitness programs
                        </h1>
                        <p className="max-w-3xl text-lg leading-8 text-slate-300">
                            Track the training plans you joined and stay consistent with your weekly routine.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 md:mt-5 md:justify-end">
                        <button
                            type="button"
                            onClick={() => setIsAddModalOpen(true)}
                            className="w-fit rounded-xl border border-lime-400/30 bg-lime-400/10 px-6 py-4 font-bold text-lime-400 transition hover:border-lime-400/60 hover:bg-lime-400/20"
                        >
                            + Add Program
                        </button>
                        <button
                            type="button"
                            onClick={onBackHome}
                            className="w-fit rounded-xl bg-lime-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-lime-500"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>

                <section className="mb-12 rounded-[2rem] border border-slate-800 bg-slate-900 px-6 py-7 shadow-xl shadow-black/20 md:px-8">
                    <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-lime-400">
                                Account Overview
                            </p>
                            <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
                                {accountName}
                            </h2>
                            <p className="max-w-4xl text-lg leading-8 text-slate-300">
                                Keep your membership details and training goals together with your active programs.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                setProfileMessage("");
                                setIsProfileModalOpen(true);
                            }}
                            className="w-fit shrink-0 rounded-xl bg-lime-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-lime-500"
                        >
                            Edit Account
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {accountStats.map((item) => (
                            <div
                                key={item.label}
                                className={`rounded-2xl px-5 py-5 ${
                                    item.highlight ? "bg-lime-400/10" : "bg-slate-800"
                                }`}
                            >
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-300">
                                    {item.label}
                                </p>
                                <p className="break-words font-bold text-white">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Active program cards show only programs the user has added. */}
                    {activeProgramCards.map((program) => (
                        <article
                            key={program.id}
                            className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-7 shadow-xl shadow-black/20 md:px-8"
                        >
                            <p className="mb-4 font-bold text-lime-400">{program.status}</p>
                            <h2 className="mb-6 text-2xl font-bold md:text-3xl">{program.title}</h2>
                            <div className="mb-6 space-y-3 text-lg text-slate-300">
                                <p>Coach: {program.coach}</p>
                                <p>Schedule: {program.schedule}</p>
                            </div>
                            <div className="rounded-2xl bg-slate-800 px-5 py-4 text-slate-200">
                                Progress: {program.progress}
                            </div>
                            <button
                                type="button"
                                // Remove this program id from activeProgramIds in the parent.
                                onClick={() => onCancelProgram(program.id)}
                                className="mt-5 w-full rounded-2xl border border-rose-400/20 px-5 py-4 font-bold text-rose-300 transition hover:border-rose-400/50 hover:bg-rose-400/10"
                            >
                                Cancel
                            </button>
                        </article>
                    ))}

                    {activeProgramCards.length === 0 && (
                        <article className="rounded-[2rem] border border-slate-800 bg-slate-900 px-6 py-14 text-center shadow-xl shadow-black/20 lg:col-span-2">
                            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                                No programs added yet
                            </h2>
                            <p className="text-lg leading-8 text-slate-300">
                                Press the + Add Program button to build your active workout plan.
                            </p>
                        </article>
                    )}
                </section>

                <section>
                    <h2 className="mb-5 text-3xl font-bold">Available Programs</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {/* This section is informational. The add action lives
                            in the modal opened by the + Add Program button. */}
                        {programs.map((program) => (
                            <article
                                key={program.id}
                                className="rounded-3xl border border-slate-800 bg-slate-900 px-6 py-7 shadow-xl shadow-black/20"
                            >
                                <div className="mb-5 text-5xl">{program.icon}</div>
                                <h3 className="mb-4 text-2xl font-bold">{program.title}</h3>
                                <p className="text-lg leading-8 text-slate-300">{program.description}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>

            {isAddModalOpen && (
                // The overlay closes the modal when clicked outside the panel.
                <div
                    className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/75 px-4 py-10 md:items-center"
                    onClick={() => setIsAddModalOpen(false)}
                >
                    <section
                        className="w-full max-w-5xl rounded-[2rem] border border-slate-700 bg-slate-950 px-6 py-8 shadow-2xl shadow-black/50 md:px-8"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-8 flex items-start justify-between gap-4">
                            <div>
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-lime-400">
                                    Add Programs
                                </p>
                                <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
                                    Choose from available programs
                                </h2>
                                <p className="max-w-3xl text-lg leading-8 text-slate-300">
                                    Add one of the existing fitness programs to your active plan.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsAddModalOpen(false)}
                                className="shrink-0 rounded-full bg-slate-800 px-5 py-3 font-bold text-slate-200 transition hover:bg-slate-700"
                            >
                                Close
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                            {/* Same program list, but each card has an Add button. */}
                            {programs.map((program) => {
                                const isAdded = activeProgramIds.includes(program.id);

                                return (
                                    <article
                                        key={program.id}
                                        className="flex min-h-[20rem] flex-col rounded-3xl border border-slate-800 bg-slate-900 px-5 py-6 shadow-xl shadow-black/20"
                                    >
                                        <div className="mb-5 text-5xl">{program.icon}</div>
                                        <p className="mb-3 font-bold text-lime-400">Fitness Program</p>
                                        <h3 className="mb-4 text-2xl font-bold">{program.title}</h3>
                                        <p className="mb-6 leading-8 text-slate-300">{program.description}</p>

                                        <button
                                            type="button"
                                            // onAddProgram is still handled by FitnessPage,
                                            // so login checks stay in one place.
                                            onClick={() => onAddProgram(program.id)}
                                            disabled={isAdded}
                                            className={`mt-auto w-full rounded-xl px-5 py-4 font-bold transition ${
                                                isAdded
                                                    ? "cursor-default bg-lime-950 text-lime-400"
                                                    : "bg-lime-400 text-slate-950 hover:bg-lime-500"
                                            }`}
                                        >
                                            {isAdded ? "Added" : "Add to My Programs"}
                                        </button>
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                </div>
            )}

            {isProfileModalOpen && (
                <div
                    className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/75 px-4 py-10"
                    onClick={() => setIsProfileModalOpen(false)}
                >
                    <section
                        className="w-full max-w-5xl rounded-[2rem] border border-lime-400/25 bg-slate-900 px-6 py-8 text-white shadow-2xl shadow-black/50 md:px-8"
                        onClick={(event) => event.stopPropagation()}
                        aria-modal="true"
                        role="dialog"
                        aria-labelledby="profile-modal-title"
                    >
                        <div className="mb-8 flex items-start justify-between gap-4">
                            <div>
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-lime-400">
                                    Account
                                </p>
                                <h2 id="profile-modal-title" className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                                    Update your fitness profile
                                </h2>
                                <p className="max-w-3xl text-lg leading-8 text-slate-300">
                                    Keep your membership details and training goals together with your active programs.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setProfileMessage("");
                                    setIsProfileModalOpen(false);
                                }}
                                className="shrink-0 rounded-full bg-slate-700 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
                            >
                                Close
                            </button>
                        </div>

                        <form onSubmit={handleProfileSubmit}>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {profileFields.map((field) => (
                                    <label key={field.name} className="block">
                                        <span className="mb-2 block font-bold text-slate-200">
                                            {field.label}
                                        </span>
                                        <input
                                            type={field.type}
                                            value={profileValues[field.name]}
                                            onChange={(event) => handleProfileChange(field.name, event.target.value)}
                                            className="w-full rounded-2xl border border-slate-600 bg-slate-950 px-5 py-4 text-lg text-white outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30"
                                        />
                                    </label>
                                ))}
                            </div>

                            <label className="mt-6 block">
                                <span className="mb-2 block font-bold text-slate-200">
                                    Fitness Goal
                                </span>
                                <textarea
                                    value={profileValues.fitnessGoal}
                                    onChange={(event) => handleProfileChange("fitnessGoal", event.target.value)}
                                    className="min-h-36 w-full resize-y rounded-2xl border border-slate-600 bg-slate-950 px-5 py-4 text-lg text-white outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30"
                                />
                            </label>

                            {profileMessage && (
                                <p className="mt-5 font-bold text-lime-400">
                                    {profileMessage}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-6 rounded-full bg-lime-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-lime-500"
                            >
                                Save Account Details
                            </button>
                        </form>
                    </section>
                </div>
            )}
        </main>
    );
};

export default MyPrograms;

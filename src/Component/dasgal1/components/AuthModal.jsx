import React, { useEffect, useState } from "react";
import { authContent } from "../data/data";

// Returns the correct starting form values for signup or login.
// Login can prefill the email from the demo account to make testing easier.
const getInitialValues = (mode, account) => {
    if (mode === "signup") {
        return {
            fullName: "",
            email: "",
            preferredProgram: "",
            password: "",
        };
    }

    return {
        email: account?.email || "",
        password: "",
    };
};

// AuthForm is the reusable form inside the modal.
// It does not decide what signup/login means; it only collects values,
// validates that every field has text, and calls the handler passed by FitnessPage.
const AuthForm = ({ account, content, message, mode, onLogin, onSignup, onSwitchMode }) => {
    // formValues is an object whose keys match authContent.signup/login field names.
    const [formValues, setFormValues] = useState(() => getInitialValues(mode, account));

    // formError is local to this form and is shown before messages from the parent.
    const [formError, setFormError] = useState("");

    // The bottom link switches to the opposite form type.
    const nextMode = mode === "signup" ? "login" : "signup";
    const displayedMessage = formError || message;

    // Updates one input without deleting the values from the other inputs.
    const handleChange = (fieldName, value) => {
        setFormValues((currentValues) => ({
            ...currentValues,
            [fieldName]: value,
        }));
    };

    // Prevents the browser's default page refresh, checks empty fields,
    // and then sends the full form object to either signup or login logic.
    const handleSubmit = (event) => {
        event.preventDefault();

        // Because inputs are generated from authContent.fields, this validation
        // automatically covers new fields you add in data.jsx.
        const hasEmptyField = content.fields.some((field) => {
            const fieldName = field.name;
            return !formValues[fieldName]?.trim();
        });

        if (hasEmptyField) {
            setFormError("Please fill in all fields.");
            return;
        }

        setFormError("");

        if (mode === "signup") {
            onSignup(formValues);
            return;
        }

        onLogin(formValues);
    };

    return (
        <>
            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* This map creates the form fields from data.jsx, so changing
                    authContent changes the form without editing this JSX. */}
                {content.fields.map((field) => (
                    <label key={field.label} className="block">
                        <span className="mb-2 block text-sm font-bold text-slate-200">
                            {field.label}
                        </span>
                        <input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formValues[field.name] || ""}
                            onChange={(event) => handleChange(field.name, event.target.value)}
                            className="w-full rounded-2xl border border-slate-600 bg-slate-950 px-4 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/30"
                        />
                    </label>
                ))}

                {displayedMessage && (
                    <p className="text-sm font-bold text-red-400">
                        {displayedMessage}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full rounded-2xl bg-lime-400 px-5 py-4 text-base font-bold text-slate-950 hover:bg-lime-500"
                >
                    {content.primaryLabel}
                </button>
            </form>

            <p className="mt-6 text-center text-base font-semibold text-slate-300">
                {content.secondaryText}{" "}
                <button
                    type="button"
                    onClick={() => onSwitchMode(nextMode)}
                    className="font-bold text-lime-400 hover:text-lime-500"
                >
                    {content.secondaryAction}
                </button>
            </p>
        </>
    );
};

// AuthModal wraps AuthForm in a dialog-style overlay.
// The parent controls visibility by passing mode; when mode is null,
// this component returns null and nothing is rendered.
const AuthModal = ({ account, message, mode, onClose, onLogin, onSignup, onSwitchMode }) => {
    // Select the correct text and fields for signup/login from data.jsx.
    const content = mode ? authContent[mode] : null;

    // While the modal is open, prevent the page behind it from scrolling and
    // allow the Escape key to close the modal. The cleanup runs when it closes.
    useEffect(() => {
        if (!mode) {
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
    }, [mode, onClose]);

    // Nothing should appear when the modal is not in login or signup mode.
    if (!content) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-6 sm:py-10 md:items-center"
            onClick={onClose}
        >
            <section
                className="w-full max-w-[31rem] rounded-3xl border border-green-300/15 bg-slate-900 px-5 py-6 text-white shadow-2xl shadow-black/40 sm:px-8 sm:py-8"
                onClick={(event) => event.stopPropagation()}
                aria-modal="true"
                role="dialog"
                aria-labelledby="auth-modal-title"
            >
                {/* Clicking inside this section stops the overlay click handler,
                    so the modal does not close while the user fills the form. */}
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-lime-400">
                            {content.eyebrow}
                        </p>
                        <h2 id="auth-modal-title" className="max-w-sm text-3xl font-bold leading-tight sm:text-4xl">
                            {content.title}
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="shrink-0 rounded-full bg-slate-700 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
                    >
                        Close
                    </button>
                </div>

                <p className="mb-7 max-w-md text-base leading-7 text-slate-300">
                    {content.description}
                </p>

                <AuthForm
                    // The key resets the form when switching mode or demo account.
                    key={`${mode}-${account?.email || "guest"}`}
                    account={account}
                    content={content}
                    message={message}
                    mode={mode}
                    onLogin={onLogin}
                    onSignup={onSignup}
                    onSwitchMode={onSwitchMode}
                />
            </section>
        </div>
    );
};

export default AuthModal;

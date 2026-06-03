import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { menuLinks } from "../data/data";

// Navbar contains both desktop and mobile navigation.
// The parent page passes button actions so this component can open modals
// or switch views without storing the whole website state here.
const Navbar = ({ currentUser, onJoinNow, onLogin, onLogout, onMyPrograms }) => {
    // open controls the mobile menu only. Desktop links are always visible on md+.
    const [open, setOpen] = useState(false);

    // Mobile action buttons close the menu first, then run the selected action.
    const handleAuthClick = (action) => {
        setOpen(false);
        action();
    };

    const displayName = currentUser?.fullName?.trim() || currentUser?.email || "Member";
    const isLoggedIn = Boolean(currentUser);

    return (
        <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 shadow-md backdrop-blur">
            <div className={`mx-auto px-4 py-4 ${open ? "max-w-none md:max-w-6xl" : "max-w-6xl"} flex justify-between items-center`}>
                <a href="#home" className="text-2xl font-bold text-lime-400">FitZone</a>

                <div className="hidden md:flex gap-6">
                    {/* menuLinks comes from data.jsx. Add, remove, or rename menu
                        items there when creating a similar website. */}
                    {menuLinks.map((link, index) => (
                        link.disabled ? (
                            <button
                                key={index}
                                type="button"
                                className="cursor-default text-white"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <a key={index} href={link.href} className="text-slate-200 hover:text-lime-400">
                                {link.name}
                            </a>
                        )
                    ))}
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    {isLoggedIn ? (
                        <>
                            <button
                                type="button"
                                onClick={onMyPrograms}
                                className="max-w-44 cursor-pointer truncate rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-lime-400/60"
                            >
                                {displayName}
                            </button>
                            <button
                                type="button"
                                onClick={onLogout}
                                className="cursor-pointer rounded-xl bg-lime-400 px-5 py-3 font-semibold text-black hover:bg-lime-500"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={onJoinNow}
                                className="cursor-pointer rounded-xl bg-lime-400 px-5 py-3 font-semibold text-black hover:bg-lime-500"
                            >
                                Join Now
                            </button>
                            <button
                                type="button"
                                onClick={onLogin}
                                className="cursor-pointer rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:border-white/40 hover:bg-slate-900"
                            >
                                Login
                            </button>
                        </>
                    )}
                </div>

                <div className="text-white md:hidden">
                    {/* The icon toggles between menu and close states on mobile. */}
                    {open ? (
                        <HiX className="w-8 h-8 text-white cursor-pointer" onClick={() => setOpen(false)} />
                    ) : (
                        <HiMenu className="w-8 h-8 cursor-pointer text-white" color="white" onClick={() => setOpen(true)} />
                    )}
                </div>
            </div>

            {open && (
                <div className="md:hidden bg-slate-950 px-4 pb-5">
                    <div className="flex flex-col gap-5 pt-1">
                        {/* This repeats the same data as desktop navigation,
                            but in a vertical mobile layout. */}
                        {menuLinks.map((link, index) => (
                            link.disabled ? (
                                <button
                                    key={index}
                                    type="button"
                                    className="text-left text-lg font-semibold text-slate-300"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-lg font-semibold text-slate-300"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                        {isLoggedIn ? (
                            <>
                                <button
                                    type="button"
                                    className="truncate rounded-xl bg-slate-900 px-5 py-3 text-base font-bold text-white"
                                    onClick={() => handleAuthClick(onMyPrograms)}
                                >
                                    {displayName}
                                </button>
                                <button
                                    type="button"
                                    className="rounded-xl bg-lime-400 px-5 py-3 text-base font-bold text-slate-950"
                                    onClick={() => handleAuthClick(onLogout)}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    className="rounded-xl bg-lime-400 px-5 py-3 text-base font-bold text-slate-950"
                                    onClick={() => handleAuthClick(onJoinNow)}
                                >
                                    Join Now
                                </button>
                                <button
                                    type="button"
                                    className="rounded-xl border border-slate-700 px-5 py-3 text-base font-bold text-white"
                                    onClick={() => handleAuthClick(onLogin)}
                                >
                                    Login
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

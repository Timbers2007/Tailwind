import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navItems } from "../data/data";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full bg-sky-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-sky-700">TravelGo</h1>

                <div className="hidden md:flex gap-6">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className="text-gray-700 hover:text-sky-600">
                            {item.name}
                        </a>
                    ))}
                </div>

                <button className="hidden md:block bg-sky-600 text-white px-4 py-2 rounded-lg">
                    Book Now
                </button>

                <div className="md:hidden">
                    {open ? (
                        <HiX className="w-8 h-8 cursor-pointer" onClick={() => setOpen(false)} />
                    ) : (
                        <HiMenu className="w-8 h-8 cursor-pointer" onClick={() => setOpen(true)} />
                    )}
                </div>
            </div>

            {open && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className="text-gray-700">
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Header;
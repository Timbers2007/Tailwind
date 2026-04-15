import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { menuLinks } from "../data/data";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full bg-blue-900 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-green-300">FitZone</div>

                <div className="hidden md:flex gap-6">
                    {menuLinks.map((link, index) => (
                        <a key={index} href={link.href} className="text-white hover:text-indigo-600">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex gap-3">
                    
                    <button className="px-4 py-2 bg-green-300 text-black rounded-lg">
                        Join Now
                    </button>
                </div>

                <div className="md:hidden">
                    {open ? (
                        <HiX className="w-8 h-8 text-white cursor-pointer" onClick={() => setOpen(false)} />
                    ) : (
                        <HiMenu className="w-8 h-8 cursor-pointer" onClick={() => setOpen(true)} />
                    )}
                </div>
            </div>

            {open && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
                    {menuLinks.map((link, index) => (
                        <a key={index} href={link.href} className="text-white">
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
import React from "react";
import { footerItems } from "../data/data";
const Footer = () => {
  return (
    <div className="w-full bg-blue-900 text-blue-900 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl text-green-300 font-bold">FitZone</h2>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {footerItems.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-indigo-100 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { footerLinks } from "../data/data";

const Footer = () => {
  return (
    <div className="w-full bg-indigo-700 text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold">EduSmart</h2>
          <p className="text-sm text-indigo-100 mt-2">
            Learn simply. Build confidently.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-indigo-100 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
        <div>
          <h2>©2026 Dulguun</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

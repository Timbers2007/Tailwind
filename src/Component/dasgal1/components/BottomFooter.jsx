import React from "react";
import { footerItems } from "../data/data";

// Footer is the simple bottom section of the homepage.
// Change the brand text here, and change footerItems in data.jsx to rename links.
const Footer = () => {
  return (
    <div id="contact" className="w-full border-t border-white/10 bg-slate-950 py-8 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl text-lime-400 font-bold">FitZone</h2>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {/* Each label in footerItems becomes a footer link.
              Replace href="#" with real page paths when the site has pages. */}
          {footerItems.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-slate-300 hover:text-white"
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

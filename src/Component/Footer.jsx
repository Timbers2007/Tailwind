import React from "react";
import { footerLinks } from "../data/data";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full  bg-indigo-500 text-white py-4 flex flex-col md:flex-row justify-center mx-auto">
      <div className="w-1/2 flex gap-10 ">
        {Object.entries(footerLinks).map(([items, link], index) => (
          <div>
            <p className="text-xl font-semibold mb-4">{items}</p>
            <div className="flex flex-col gap-2">
              {link.map((link) => (
                <div>
                  <a href={link.href}>{link.name}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-10">
        <FaInstagram className="w-10 h-10 " />

        <FaFacebook className="w-10 h-10" />
        <FaSquareXTwitter className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Footer;

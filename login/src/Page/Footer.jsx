import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-100 to-blue-50 text-gray-800 py-10 px-8 text-center">
      <div className="flex justify-evenly items-center">
        <h3 className="text-3xl font-bold text-indigo-700">BlossomAura</h3>
        <div className="flex gap-4 text-indigo-600 text-lg">
          <a href="#" className="hover:text-indigo-800 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-indigo-800 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-indigo-800 transition"><FaTwitter /></a>
        </div>

        <p className="text-gray-500 text-sm">
          © 2025 BlossomAura. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

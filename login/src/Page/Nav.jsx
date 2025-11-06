import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">BlossomAura 🌸</h1>
        <ul className="flex space-x-6 text-gray-700 font-semibold">
          <li className="hover:text-indigo-600 transition">Home</li>
          <li className="hover:text-indigo-600 transition">About</li>
          <li className="hover:text-indigo-600 transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

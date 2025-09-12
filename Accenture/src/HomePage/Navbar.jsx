// src/components/Navbar.jsx


import React from "react";
import { ChevronDown, Globe, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <span className="text-purple-600 text-5xl font-bold cursor-pointer">{">"}</span>
          </div>

          {/* Center: Nav Links */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">
              What we do <ChevronDown size={16} />
            </li>
            <li className="hover:text-purple-400 cursor-pointer">
              What we think
            </li>
            <li className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">
              Who we are <ChevronDown size={16} />
            </li>
            <li className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">
              Careers <ChevronDown size={16} />
            </li>
          </ul>

          {/* Right: Icons */}
          <div className="flex items-center space-x-6">
            <Search size={18} className="cursor-pointer hover:text-purple-400" />
            <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400">
              <Globe size={18} />
              <span>India</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

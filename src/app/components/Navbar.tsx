'use client'
import React from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';
import { useState } from "react";

const font = localFont({
  src: "../fonts/ivy-mode-8.ttf"
})

const fontTwo = localFont({
  src: "../fonts/MorgenHumble-DYB81.otf"
})


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-5 px-10 z-10 bg-[#c4d4a7]">
      <div className="flex justify-between items-center">
        <h1 className={` ${fontTwo.className} text-5xl font-bold text-[#3C5E39]`}>Viblog</h1>

        {/* Button to toggle menu */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-3xl text-[#3C5E39]"
        >
          &#9776; {/* Hamburger Icon */}
        </button>

        {/* Navbar Links */}
        <ul
          className={`md:flex md:space-x-6 text-lg  font-bold ${font.className} ${isOpen ? 'block' : 'hidden'} md:block`}
        >
          <li>
            <Link href="/" className="text-[#3C5E39]">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-[#3C5E39]">
              About
            </Link>
          </li>
          <li>
            <Link href="#Blog" className="text-[#3C5E39]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-[#3C5E39]">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar
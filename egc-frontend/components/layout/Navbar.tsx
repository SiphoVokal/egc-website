"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight * 0.8;
      setIsFloating(scrollY > vh);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu with timeout auto-close
  const handleMenuToggle = () => {
    setMenuOpen((prev) => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

      if (!prev) {
        hideTimerRef.current = setTimeout(() => {
          setMenuOpen(false);
        }, 15000);
      }
      return !prev;
    });
  };

  // Close on background click
  const handleOverlayClick = () => {
    setMenuOpen(false);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  return (
    <>
      {/* Floating Hamburger */}
      {isFloating && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={handleMenuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-30"
          onClick={handleOverlayClick}
        />
      )}

      {/* Fullscreen Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0  h-[60vh] bg-white rounded-4xl z-0 transition-all duration-500 ease-in-out
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
        `}
      >
        <div className="fixed top-2 left-1/3 flex flex-col items-center justify-center h-full space-y-6 text-lg font-medium">
          <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
          <Link href="https://www.youtube.com/@eternalglorychurch" onClick={() => setMenuOpen(false)}>SERMONS</Link>
          <Link href="/ministries" onClick={() => setMenuOpen(false)}>MINISTRIES</Link>
          <Link href="/#events" onClick={() => setMenuOpen(false)}>EVENTS</Link>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full text-md">
            Donate
          </button>
        </div>
      </div>

      {/* Traditional Navbar (only visible when NOT floating) */}
      {!isFloating && (
        <nav className="w-full bg-white rounded-4xl shadow-lg py-2">
          <div className="px-6 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-poppins font-bold flex items-center">
              <Image src="/logo.png" alt="Church logo" width={220} height={50} />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex font-poppins space-x-6 text-sm items-center">
              <span className="text-red-600 px-4">|</span>
              <Link href="/about">ABOUT</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="https://www.youtube.com/@eternalglorychurch">SERMONS</Link>
              <Link href="/ministries">MINISTRIES</Link>
              <Link href="/#events">EVENTS</Link>
              <button className="bg-red-600 text-white px-4 py-1 rounded-full text-md">Donate</button>
            </div>

            {/* Mobile hamburger fallback */}
            <div className="md:hidden">
              <button
                onClick={handleMenuToggle}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;



{/*import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll listener to switch navbar mode
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.8;
      setIsFloating(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start auto-close timer when menu is opened
    if (!isOpen) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 15000);
    }
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav
      className={`z-50 fixed transition-all duration-300 ease-in-out 
        ${isFloating ? "top-4 left-4" : "top-4 left-1/2 transform -translate-x-1/2 w-[85%]"}`}
    >
      <div
        className={`transition-all duration-600 ease-in-out 
          ${isFloating ? "w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center" : "bg-white rounded-4xl shadow-lg px-6 py-3 flex items-center justify-between"}`}
      >
        {/* Logo or Title *
        {!isFloating && (
          <Link href="/" className="text-xl font-bold tracking-wide flex items-center space-x-1">
            <span>ETERNAL GLORY CHURCH</span>
            <span className="text-red-600 px-4">|</span>
          </Link>
        )}

        {/* Desktop Nav Links *
        {!isFloating && (
          <div className="space-x-6 hidden md:flex items-center">
            <Link href="#">ABOUT</Link>
            <Link href="#">SERVICES</Link>
            <Link href="#">SERMONS</Link>
            <Link href="#">MINISTRIES</Link>
            <Link href="#">EVENTS</Link>
            <Link href="#">LATEST</Link>
            <button className="bg-red-600 text-white px-4 py-1 rounded-full text-md">Donate</button>
          </div>
        )}

        {/* Hamburger Icon *
        {(isFloating || !isFloating) && (
          <button
            onClick={handleToggle}
            className="md:hidden text-gray-700 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu Slide-Out *
      <div
        className={`absolute top-14 left-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform 
          ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <ul className="flex flex-col p-4 space-y-2 min-w-[150px] text-sm font-medium text-gray-700">
          <li><Link href="#" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
          <li><Link href="#" onClick={() => setIsOpen(false)}>SERVICES</Link></li>
          <li><Link href="#" onClick={() => setIsOpen(false)}>SERMONS</Link></li>
          <li><Link href="#" onClick={() => setIsOpen(false)}>MINISTRIES</Link></li>
          <li><Link href="#" onClick={() => setIsOpen(false)}>EVENTS</Link></li>
          <li><Link href="#" onClick={() => setIsOpen(false)}>LATEST</Link></li>
          <li>
            <button className="bg-red-600 text-white px-4 py-2 w-full rounded-full text-sm">
              Donate
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


{/*import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  minimal?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ minimal = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Auto-close menu after 10 seconds of inactivity
  useEffect(() => {
    if (!isOpen) return;

    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        minimal ? "w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center" : "w-[85%] bg-white rounded-4xl shadow-lg"
      }`}
    >
      <div className={`flex items-center justify-between px-6 py-3 ${minimal ? "hidden" : "block"}`}>
        <Link href="/" className="text-xl font-bold tracking-wide flex items-center space-x-1">
          <span>ETERNAL GLORY CHURCH</span>
          <span className="text-red-600 px-4">|</span>
        </Link>

        <div className="space-x-6 hidden md:flex items-center">
          <Link href="#">ABOUT</Link>
          <Link href="#">SERVICES</Link>
          <Link href="#">SERMONS</Link>
          <Link href="#">MINISTRIES</Link>
          <Link href="#">EVENTS</Link>
          <Link href="#">LATEST</Link>
          <button className="bg-red-600 text-white px-4 py-1 rounded-full text-md">Donate</button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && !minimal && (
        <div className="md:hidden bg-white px-6 pb-4 rounded-b-xl">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li><Link href="#" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>SERVICES</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>SERMONS</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>MINISTRIES</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>EVENTS</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>LATEST</Link></li>
            <li>
              <button className="bg-red-500 text-white px-4 py-2 w-full rounded-full text-sm">
                Donate
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




{/*import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavbarProps } from "@/interface";

const Navbar:  React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-close the menu after 10s of inactivity
  useEffect(() => {
    if (isOpen) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 10000); // 10 seconds
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[85%] bg-white rounded-4xl shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo *
        <Link href="/" className="text-xl font-bold tracking-wide flex items-center space-x-1">
          <span>ETERNAL GLORY CHURCH</span>
          <span className="text-red-600 px-4">|</span>
        </Link>

        {/* Desktop Links *
        <div className="space-x-6 hidden md:flex items-center">
          <Link href="#">ABOUT</Link>
          <Link href="#">SERVICES</Link>
          <Link href="#">SERMONS</Link>
          <Link href="#">MINISTRIES</Link>
          <Link href="#">EVENTS</Link>
          <Link href="#">LATEST</Link>
          <button className="bg-red-600 text-white px-4 py-1 rounded-full text-md">Donate</button>
        </div>

        {/* Hamburger Toggle (Mobile) *
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-white rounded-full p-2 shadow-md transition-transform hover:scale-105 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown *
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 rounded-b-xl animate-fade-in">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            {["ABOUT", "SERVICES", "SERMONS", "MINISTRIES", "EVENTS", "LATEST"].map((item) => (
              <li key={item}>
                <Link href="#" onClick={() => setIsOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button className="bg-red-500 text-white px-4 py-2 w-full rounded-full text-sm">
                Donate
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


{/*import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Restart 10s timeout every time menu is opened
    if (!isOpen) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 10000);
    }
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-4 left-4 z-50">
      <div className="relative">
        {/* Hamburger Button *
        <button
          onClick={handleToggle}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-black z-50 transition-all duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Items *
        <div
          className={`absolute top-14 left-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-4 space-y-2 min-w-[150px] text-sm font-medium text-gray-700">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


{/*import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[85%] bg-white rounded-4xl shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo *
        <Link href="/" className="text-xl font-bold tracking-wide flex items-center space-x-1">
          
          <span>ETERNAL GLORY CHURCH</span>
          
        </Link>

        {/* Desktop Nav Links *
        <div className="space-x-6 hidden md:flex items-center">
          <Link href="#">ABOUT</Link>
          <Link href="#">SERVICES</Link>
          <Link href="#">SERMONS</Link>
          <Link href="#">MINISTRIES</Link>
          <Link href="#">EVENTS</Link>
          <Link href="#">LATEST</Link>
          <button className="bg-red-600 text-white px-4 py-1 rounded-full text-md">Donate</button>
        </div>

        {/* Mobile Toggle Button *
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}


        </button>
      </div>

      {/* Mobile Dropdown *
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 rounded-b-xl">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li><Link href="#" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>SERVICES</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>SERMONS</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>MINISTRIES</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>EVENTS</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>LATEST</Link></li>
            <li>
              <button className="bg-red-500 text-white px-4 py-2 w-full rounded-full text-sm">
                Donate
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;*/}


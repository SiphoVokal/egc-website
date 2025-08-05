import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[85%] bg-white rounded-4xl shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide flex items-center space-x-1">
          
          <span>ETERNAL GLORY CHURCH</span>
          <span className="text-red-600 px-4">|</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="space-x-6 hidden md:flex items-center">
          <Link href="#">ABOUT</Link>
          <Link href="#">SERVICES</Link>
          <Link href="#">SERMONS</Link>
          <Link href="#">MINISTRIES</Link>
          <Link href="#">EVENTS</Link>
          <Link href="#">LATEST</Link>
          <button className="bg-red-600 text-white px-4 py-1 rounded-full text-md">Donate</button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}


        </button>
      </div>

      {/* Mobile Dropdown */}
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

export default Navbar;


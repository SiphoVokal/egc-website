// components/Footer.tsx
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import { useState } from "react";

export default function Footer() {

  const [email, setEmail] = useState("");
  
  return (
    <footer className="bg-black text-white py-8 px-6 rounded-t-4xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        
        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Eternal glory church</h2>
          <h3 className="uppercase font-semibold mb-2">Contact</h3>
          <p className="text-sm"></p>
          <p className="text-sm">info@eternalglorychurch.co.za</p>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.instagram.com/eternalglorychurch/" aria-label="Instagram" className="text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/EternalGloryChurch01/" aria-label="Facebook" className="text-2xl">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Location Section */}
        <div>
          <h3 className="uppercase font-semibold mb-2">Location</h3>
          <p className="text-sm">
            Fourways Junction, White Hills Cl, Lone Hill,<br />
            Johannesburg, 2191
          </p>
        </div>

        {/* Stay Connected Section */}
        <div>
          <h3 className="uppercase font-semibold mb-2">Stay Connected</h3>
          <p className="text-sm mb-4">
            Sign up with your email address to receive updates from Eternal Glory Church.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white px-3 py-2 rounded-full text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              onClick={() => {
                if (email) {
                  window.location.href = `mailto:info@eternalglorychurch.co.za?subject=New Subscription&body=Email: ${email}`;
                }
              }}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-full w-fit"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-wrap gap-4 text-sm">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="https://www.youtube.com/@eternalglorychurch">Sermons</a>
        <a href="#">Connect with us</a>
        <a href="#">Donate</a>
      </div>
    </footer>
  );
}

 <div className="relative z-20 w-[85%] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {valueCards.map(({ cardNumber, title, description }) => (
            <ValueCard
              key={cardNumber}
              cardNumber={cardNumber}
              title={title}
              description={description}
            />
          ))}
        </div>

        {/* Bottom Rounded Image */}
        <div className="relative z-20 mt-12 mb- w-[85%] mx-auto overflow-hidden rounded-[45px]">
          <Image
            src="/btm.png"
            alt="Bottom image"
            width={1200}
            height={300}
            className="w-full object-cover h-60"
          />
        </div>
      </section>


<ValueCard
              cardNumber= "01"
              title= "We Love Jesus"
              description= "Our Purpose is to share hope and the love of Jesus to all, Jesus who we love because he first loved us, Everthing we do is for Jesus."
            />
            <ValueCard
              cardNumber= "02"
              title= "We serve people"
              description= "Many people have the misconception that being called by God is something only Missionaries, pas and other church leaders experience."
            />
            <ValueCard
              cardNumber= "03"
              title= "Honor is our expression"
              description= "We are not saved by serving, but we are saved for serving. You were called to be free. You cannot serve God until you’ve been set by Jesus."
            />
            <ValueCard
              cardNumber= "04"
              title= "Joy is our decision"
              description= "Until you experience the transforming power of God’s grace in your life, you’re too ensalved by your own hurts, and hang ups to think about others."
            />
            <ValueCard
              cardNumber= "05"
              title= "Generousity is our priviledge"
              description= "The number one reason we dont have the time or energy to serve others is that we are preoccupied with our own agendas, dreams, and pleasure."
            />
            <ValueCard
              cardNumber= "06"
              title= "We are there, even in times of crisis"
              description= "The motive for serving is love serving one another in love. This an important key to building community."
            />
          </div>


          <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-center text-4xl font-bold mb-10">Our Core Values</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueCards.map(({ cardNumber, title, description }) => (
            <ValueCard
              key={cardNumber}
              cardNumber={cardNumber}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section> 

      Ps Martin and Dr. Siphelele Mgiba, 
              

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

  // Handle menu toggle and timeout
  {/*const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    if (!menuOpen) {
      hideTimerRef.current = setTimeout(() => {
        setMenuOpen(false);
      }, 15000);
    }
  };*/}

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

  return (
    <>
      {/* Floating Hamburger */}
      {isFloating && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={handleMenuToggle}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {/* Fullscreen Menu Overlay */}
      <div
        className={`fixed top-4 left-2 w-[100%] rounded-4xl h-[70%] bg-white z-40 transition-all duration-500 ease-in-out
          ${menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >

        <div className="flex flex-col items-center justify-center h-full  space-y-6 text-lg font-medium">
          <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
          <Link href="https://www.youtube.com/@eternalglorychurch" onClick={() => setMenuOpen(false)}>SERMONS</Link>
          <Link href="/ministries" onClick={() => setMenuOpen(false)}>MINISTRIES</Link>
          <Link href="/#events" onClick={() => setMenuOpen(false)}>EVENTS</Link>
          {/*<Link href="#" onClick={() => setMenuOpen(false)}>LATEST</Link>*/}
          <button className="bg-red-600 text-white px-6 py-2 rounded-full text-md">
            Donate
          </button>
        </div>
      </div>

      {/* Traditional Navbar (only visible when NOT floating) */}
      {!isFloating && (
        <nav className="w-full bg-white rounded-4xl shadow-lg py-2">
          <div className="  px-6 py- flex justify-between items-center">
            <Link href="/" className="text-xl font-poppins font-bold">
              <Image src="/logo.png" alt="Church logo" width={220} height={50} className="" />
              
            </Link>
            <div className="hidden md:flex font-poppins space-x-6 text-sm items-center">
              <span className="text-red-600 px-4">|</span>
              <Link href="/about">ABOUT</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="https://www.youtube.com/@eternalglorychurch">SERMONS</Link>
              <Link href="/ministries">MINISTRIES</Link>
              <Link href="/#events">EVENTS</Link>
              {/*<Link href="#">LATEST</Link>*/}
              <button className="bg-red-600 text-white px-4 py-1 rounded-full text-md">Donate</button>
            </div>

            {/* Mobile hamburger fallback (before floating kicks in) */}
            <div className="md:hidden">
              <button onClick={handleMenuToggle}>
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
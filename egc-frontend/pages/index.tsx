import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Added for internal navigation

import Button from "@/components/common/Button";
import CardLink from "@/components/common/CardLink";
import EventsCard from "@/components/common/EventsCard";
import Navbar from "@/components/layout/Navbar";
import VideoCard from "@/components/common/VideoCard";
import Footer from "@/components/layout/Footer";

import { Poppins, Pinyon_Script } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });
const pinyon = Pinyon_Script({ subsets: ['latin'], weight: ['400'], variable: '--font-pinyon' });

const heroImage = "/collage.png";

const cardLinks = [
  { title: "I&apos;m New", description: "Join our vibrant community of believers. Your search for a local church has come to an end.", href: "https://forms.gle/N6hjKrLdFgKPMfEc7", imageSrc: "/new.jpg" },
  { title: "Watch a Sermon", description: "Catch up on the word via YouTube, Glory podcasts and more.", href: "https://www.youtube.com/@eternalglorychurch", imageSrc: "/watch.jpg" },
  { title: "Ministries", description: "Growing in faith and fellowship", href: "/ministries", imageSrc: "/baptism.jpg" },
];

const events = [
  { title: "Love on the Cross", date: "April 9, 2025", imageSrc: "/quotes.png" },
  { title: "Iconic {You}th Conference", date: "June 15-20, 2025", imageSrc: "/iconic.png" },
  { title: "Growing in Oneness", date: "July 3, 2025", imageSrc: "/one.png" },
];

const videos = [
  { videoId: "ytrXtFd0AGw", title: "Eternal Glory Worship" },
  { videoId: "KMeDRzhZOH8", title: "Urban Church Talk" },
];

export default function Home() {
  const [showCircleNavbar, setShowCircleNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85;
      setShowCircleNavbar(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMap = () => {
    window.open(
      "https://www.google.com/maps/dir//Fourways+Junction,+White+Hills+Cl,+Lone+Hill,+Johannesburg,+2191/@-26.0127362,27.9294619,22815m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x1e957729018219d1:0xb1a960baf095586f!2m2!1d28.0118634!2d-26.0127596?entry=ttu&g_ep=EgoyMDI1MDgxMi4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const handleOpenYoutube = () => {
    window.open(
      "https://www.youtube.com/@eternalglorychurch/streams",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white text-black font-poppins m-0 p-0">
      {/* Navbar */}
      {showCircleNavbar && (
        <div className="fixed top-4 left-4 z-50">
          <Navbar />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image src={heroImage} alt="Church collage" fill priority className="object-cover z-20" />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[85%] z-50">
          <Navbar />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            A place where you belong.
          </h1>
        </div>
      </section>

      {/* Service Times */}
      <section className="relative bg-gray-100 px-4 sm:px-6 py-4 text-center w-full mx-auto rounded-t-4xl z-30 -mt-8">
        <p className="text-base sm:text-lg font-medium">
          <span className="font-bold">Join us this Sunday <br /></span>
          07:30 · 09:30 · 11:30 · 14:00 at Fourways Junction, Lonehill. + Online
        </p>
      </section>

      {/* Beliefs */}
      <section className="bg-white px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold max-w-4xl pt-4 mx-auto">
          A church that believes in <br />
          <span className="text-black">Jesus</span>, a <span className="text-yellow-400">church that loves <br />People</span> and <span className="text-black">community</span>
        </h2>
        <p className="mt-4 text-gray-400">
          To carry the Word, the Love, and the Mission into our communities.{" "}
          <Link href="#" className="underline text-sm hover:text-red-600">see more</Link>
        </p>
        <p className="font-pinyon mt-2 text-[1.7rem] sm:text-[4rem] text-gray-100 max-w-5xl mx-auto text-start sm:text-end">you are always welcome here.</p>
      </section>

      {/* Card Links */}
      <section id="connect" className="w-[90%] md:w-[85%] mx-auto pt-0 pb-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardLinks.map(({ title, description, href, imageSrc }) => (
          <CardLink key={title} title={title} description={description} href={href} imageSrc={imageSrc} />
        ))}
      </section>

      {/* Videos */}
      <section className="bg-red-600 mx-auto py-4 rounded-t-4xl">
        <p className="font-poppins text-xl sm:text-2xl py-2 px-4 m-auto w-[90%] md:w-[85%]">Latest...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-auto w-[90%] md:w-[85%]">
          {videos.map(({ videoId, title }) => (
            <VideoCard key={videoId} videoId={videoId} title={title} href="#" />
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 pt-4 sm:pt-12 m-auto w-[90%] md:w-[85%]">
          <span className="text-sm pl-8 sm:py-16">
            At Eternal Glory we are <br />
            <span className="text-3xl sm:text-5xl font-poppins font-bold">
              Empowered by<br /> 
              <span className="">God to reach </span><br /> 
              others for Christ.
            </span>
            <p className={`${pinyon.className} mt-1 text-[1.5rem] sm:text-[2.9rem] text-gray-100 text-start`}>
              Calling many sons into glory.
            </p>
          </span>
          
          <div className="justify-self-center">
            <Image src="/doz.jpg" alt="Eternal Glory" width={503} height={579} className="rounded-4xl shadow-lg" />
          </div>
        </div>

        {/* Join Us Buttons */}
        <div className="text-center mb-6 px-4">
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl" >Join us this Sunday</h3>
          <p className={`${poppins.className} text-xl mb-4`}>
            07:30 · 09:30 · 11:30 · 14:00 at Fourways Junction, Lonehill. + Online
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              buttonLabel="At Church"
              buttonSize="py-1 px-6"
              buttonBackgroundColor="red"
              action={handleOpenMap}
            />

            <Button 
              buttonLabel="Online"
              buttonSize="py-1 px-6"
              buttonBackgroundColor="white"
              action={handleOpenYoutube}
            />
          </div>
        </div>

        {/* Bottom Image */}
        <div className="relative z-20 mt-1 w-[90%] md:w-[85%] mx-auto overflow-hidden rounded-[45px]">
          <Image src="/btm.png" alt="Bottom image" width={1200} height={300} className="w-full object-cover h-60" />
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-yellow-300 max-w-full mx-auto mt-12 px-4 sm:px-6 py-12 relative z-0">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] md:w-[85%] mx-auto">
          {events.map(({ title, date, imageSrc }) => (
            <EventsCard key={title} title={title} date={date} imageSrc={imageSrc} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-0 -mt-12">
        <Footer />
      </div>
    </div>
  );
}

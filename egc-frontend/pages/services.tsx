"use client";

import ServiceCard from "@/components/common/ServiceCard";
import ServiceTimes from "@/components/common/ServiceTimes";
import { ServiceCardProps } from "@/interfaces";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



const ServicesPage: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Glory Kidz",
      description:
        "Bring your little ones: if you've been looking for a vibrant, Christ-centered space for your children to learn, grow, and belong. Every Sunday on Campus.",
      imageSrc: "/kids.jpg",
      time: "Every Sunday 07:30, 09:30, 11:30, 2pm",
    },
    {
      title: "Wednesday Midweek Refill",
      description: "18:30pm in person or online, join us for a time of prayer and deep dive in to scripture. We&apos;d love to see you!",
      imageSrc: "/midRefill.jpg",
      time: "Wednesdays 18:30",
    },
    {
      title: "Plug Service",
      description:
        "18:00pm in person or online on selected Sundays. We&apos;d love to see you!",
      imageSrc: "/plug.jpg",
      time: "Selected Sundays 18:00",
    },

    {
      title: "Plug Squad",
      description:
        "Our weekly Teens ministry, where our teenagers build community and learn biblical principles in a fun spirit filled way.",
      imageSrc: "/glorySqd.jpg",
      time: "Every Friday 18:30",
    },
  ];

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
    <div className="min-h-screen">
      <section className="relative h-[35vh] w-full mb-4">
        <div className="relative m-auto w-[85%] top-4 justify-self-center z-50">
          <Navbar />
        </div>
        <Image
          src="/bottom.jpg" 
          alt="Church collage"
          fill
          priority
          className="object-cover z-0 rounded-2xl"
        />
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10 pt-24">
          <ServiceTimes 
            handleOpenMap={handleOpenMap}
            handleOpenYoutube={handleOpenYoutube}
          />
        </div>
      </section>
        <h1 className="text-4xl font-bold text-start m-auto w-[85%]">Other Services</h1>
      {/* Services Section */}
      <section
        id="services"
        className=" mx-auto pb-4 py-8 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8 m-auto w-[85%]"
      >
        {services.map(({ title, description, imageSrc, time }) => (
          <ServiceCard
            key={title}
            title={title}
            description={description}
            imageSrc={imageSrc}
            time={time}
          />
        ))}
      </section>
      <div className="text-center px-4 pb-12 pt-2 bg-gray-100 rounded-t-4xl">
        <h3 className="font-poppins font-bold text-2xl sm:text-3xl">
          Join us for Prayer
        </h3>
        <p className="font-poppins text-xl mb-4">
          Via&nbsp;
            <a href="https://meet.google.com/dvr-oynk-mfd" className="text-red-600 hover:underline">
              Google Meets:&nbsp;
            </a>
          5am Every Wednesday and Sunday
        </p>
      </div>
      

      <div className="relative z-0 -mt-12">
        <Footer />
      </div>
      
    </div>
  );
};

export default ServicesPage;


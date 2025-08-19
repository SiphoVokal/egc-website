import React from "react";
import Button from "@/components/common/Button";
import { ServiceTimeProps } from "@/interfaces";


const ServiceTimes: React.FC<ServiceTimeProps> = () => {

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
    <div className="text-center mb-6 px-4">
      <h3 className="font-poppins font-bold text-3xl sm:text-4xl">
        Join us this Sunday
      </h3>
      <p className="font-poppins text-xl mb-4">
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
  );
};

export default ServiceTimes;

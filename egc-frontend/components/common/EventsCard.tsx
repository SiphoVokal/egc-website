import React from "react";
import Image from "next/image";
import { EventsCardProps } from "@/interfaces";

const EventsCard: React.FC<EventsCardProps> = ({ imageSrc, title, date }) => {
  return (
    <div className=" cursor-pointer">
      <div className="relative h-48 w-full ">
        <Image src={imageSrc} alt={title} fill className="object-cover rounded-4xl" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold hover:underline">{title}</h3>
        <p className="text-gray-600">{date}</p>
      </div>
    </div>
  );
};

export default EventsCard;
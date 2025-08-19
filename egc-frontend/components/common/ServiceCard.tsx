import React from "react";
import Image from "next/image";
import { ServiceCardProps } from "@/interfaces";


const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, time }) => {
  return (
    <div className="bg-white overflow-hidden flex flex-col">
      <div className="relative w-full h-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-4xl"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 flex-1">{description}</p>
        {time && (
          <p className="mt-2 text-sm font-semibold text-gray-800">
            {time}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

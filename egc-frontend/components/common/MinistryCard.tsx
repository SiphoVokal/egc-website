import React from "react";
import { MinistryCardProps } from "@/interfaces";

interface ExtendedProps extends MinistryCardProps {
  reverse?: boolean; // flip layout
}

const MinistryCard: React.FC<ExtendedProps> = ({ title, description, imageSrc, reverse }) => {
  return (
    <div className="w-full mb-16">
      <div
        className={`flex flex-col items-center gap-8 md:gap-12 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Text section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {/* Image section */}
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt={title}
            className="rounded-2xl w-full h-auto object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MinistryCard;
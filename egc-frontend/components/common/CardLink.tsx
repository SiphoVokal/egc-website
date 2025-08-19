import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CardLinkProps } from "@/interfaces";

const CardLink: React.FC<CardLinkProps> = ({ title, description, href, imageSrc }) => {
  return (
    <Link
      href={href} 
      className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
      <div className="relative h-105 w-full">
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition duration-300 z-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 p-4 text-white z-10">
            <h3 className="text-xl font-poppins font-bold mb-1">{title}</h3>
            <p className="font-poppins text-sm">{description}</p>
            <span className="mt-2 inline-block underline underline-offset-4 text-sm text-red-600 group-hover:text-white transition">
              Get Connected →
            </span>
          </div>
        </div>  
      </div>
    </Link>
  );
};

export default CardLink;
import React from "react";
import { ValueCardProps } from "@/interfaces";

const ValueCard: React.FC<ValueCardProps> = ({ cardNumber, title, description }) => {
  return (
    <div className="bg- rounded-lg p-6 hover:shadow-lg transition cursor-default">
      <div className="ont-bold text-3xl mb-4">{cardNumber}</div>
      <h3 className="text-xl text-gray-800 font-semibold mb-2">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

export default ValueCard;
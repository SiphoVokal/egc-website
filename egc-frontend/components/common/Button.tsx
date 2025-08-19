import React from "react";
import { ButtonProps } from "@/interfaces";

// Centralized color styles
const colorVariants: Record<string, string> = {
  red: "bg-red-600 text-white border border-red-600 hover:bg-white hover:border-red-600 hover:text-black",
  white: "bg-white text-red border border-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white",
  // Add more colors here without touching the component logic
};

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonSize = "",
  buttonBackgroundColor = "",
  action,
}) => {
  const colorClasses = colorVariants[buttonBackgroundColor] || colorVariants.white;

  return (
    <button
      onClick={action}
      className={`font-semibold ${colorClasses} ${buttonSize} 
                  transition duration-300 font-poppins rounded-full`}
      type="button"
    >
      {buttonLabel}
    </button>
  );
};

export default Button;

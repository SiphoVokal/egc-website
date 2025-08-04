import { ButtonProps } from "@/interface";

const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {

  const backgroundColorClass = buttonBackgroundColor ? {
    red: 'bg-red-600',
    white: 'bg-white',
  }[buttonBackgroundColor] : 'bg-slate-500'


  return (
    <button onClick={action} className={`${backgroundColorClass} 
        ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg 
        hover:${backgroundColorClass}/50 transition duration-300 text-white`}>
      {buttonLabel}
    </button>
  )
}

export default Button;
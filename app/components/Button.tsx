"use client";

import { IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: IconType;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  icon: Icon,
  outline,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full h-full py-2 text-sm flex flex-row gap-2 justify-center items-center rounded-md border cursor-pointer border-rose-700 ${
        !outline ? "bg-rose-700 text-white" : "bg-rose-700/10 text-black"
      }`}
    >
      {Icon && <Icon size={20} />}
      {label}
    </div>
  );
};

export default Button;

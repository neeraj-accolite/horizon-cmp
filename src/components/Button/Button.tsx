import React from "react";
import { ButtonProps } from "./Button.model";

const Button = ({ label, children, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded font-bold focus:outline-none bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 text-base"
      onClick={onClick}
      disabled={disabled}
    >
      {label ?? children}
    </button>
  );
};

export default Button;

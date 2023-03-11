import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-merah text-putih py-[8px] px-[12px] rounded-[8px] font-medium hover:bg-merah-200">
      {children}
    </button>
  );
};

export default Button;

import React from "react";

interface ButtonProps {
    label: string
    className?: string
}

const OutlineButton: React.FC<ButtonProps> = ({label, className}) => {
  return (
    <div className={`transition-all duration-300 cursor-pointer font-medium px-5 py-2.5 border-2 border-primary rounded-md hover:bg-primary hover:bg-opacity-10 ${className}`}>
      {label}
    </div>
  );
};

export default OutlineButton;

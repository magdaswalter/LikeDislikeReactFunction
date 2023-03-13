import React from "react";
import "./CustomButton.css";

interface Props {
  title?: string;
  handleClick: () => void;
  className: string;
}

const CustomButton = ({ title, handleClick, className }: Props) => {
  return (
    <button
      onClick={() => handleClick()}
      className={`reaction-button ${className}`}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;

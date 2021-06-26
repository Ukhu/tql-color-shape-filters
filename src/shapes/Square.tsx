import React from "react";

interface ISquareProps {
  color: string;
}

const Square = ({ color }: ISquareProps) => {
  return (
    <svg
      width="160"
      height="160"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={40} y={40} width={80} height={80} fill={color} />
    </svg>
  );
};

export default Square;

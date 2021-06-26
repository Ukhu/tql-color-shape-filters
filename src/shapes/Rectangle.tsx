import React from "react";

interface IRectangleProps {
  color: string;
}

const Rectangle = ({ color }: IRectangleProps) => {
  return (
    <svg
      width="160"
      height="160"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={30} y={50} width={100} height={60} fill={color} />
    </svg>
  );
};

export default Rectangle;

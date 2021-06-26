import React from "react";

interface ITriangleProps {
  color: string;
}

const Triangle = ({ color }: ITriangleProps) => {
  return (
    <svg
      width="160"
      height="160"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={`triangle-${color}`}
    >
      <polygon points="30, 120 80, 30 130, 120" fill={color} />
    </svg>
  );
};

export default Triangle;

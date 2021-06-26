import React from "react";

interface IOvalProps {
  color: string;
}

const Oval = ({ color }: IOvalProps) => {
  return (
    <svg
      width="160"
      height="160"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={`oval-${color}`}
    >
      <ellipse cx="80" cy="80" rx="35" ry="50" fill={color} />
    </svg>
  );
};

export default Oval;

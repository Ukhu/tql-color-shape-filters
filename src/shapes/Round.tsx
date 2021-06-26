import React from "react";

interface IRoundProps {
  color: string;
}

const Round = ({ color }: IRoundProps) => {
  return (
    <svg
      width="160"
      height="160"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={`round-${color}`}
    >
      <ellipse cx="80" cy="80" rx="50" ry="50" fill={color} />
    </svg>
  );
};

export default Round;

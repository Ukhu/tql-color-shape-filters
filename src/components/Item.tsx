import React from "react";
import styled from "styled-components";

import { IItemProps } from "../types";

import Oval from "../shapes/Oval";
import Round from "../shapes/Round";
import Triangle from "../shapes/Triangle";
import Square from "../shapes/Square";
import Rectangle from "../shapes/Rectangle";

const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 10rem;
  background-color: #ffffff;
  margin-right: 1.5rem;
`;

const Item = ({ shape, color }: IItemProps) => {
  return (
    <StyledItem data-testid="shapeItem">
      {getItemShape(shape, color)}
    </StyledItem>
  );
};

const getItemShape = (shape: string, color: string) => {
  switch (shape) {
    case "oval":
      return <Oval color={color} />;
    case "round":
      return <Round color={color} />;
    case "triangle":
      return <Triangle color={color} />;
    case "square":
      return <Square color={color} />;
    case "rectangle":
      return <Rectangle color={color} />;
    default:
      return;
  }
};

export default Item;

import React from "react";
import styled, { css } from "styled-components";

import { IShapeProps } from "../types";

const StyledShape = styled.div<{ selected: boolean }>`
  height: 3rem;
  padding: 1rem;
  background-color: #f5f6fb;
  border: 1px solid #e0e0e5;
  border-radius: 50%;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #dee8fb;
      border: 1px solid #c9d8fb;
    `}
`;

const Shape = ({ name, selected }: IShapeProps) => {
  return <StyledShape selected={selected}>{name}</StyledShape>;
};

export default Shape;

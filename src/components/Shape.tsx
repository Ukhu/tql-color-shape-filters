import React from "react";
import styled, { css } from "styled-components";

import { IShapeProps } from "../types";

const StyledShape = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  background-color: #f5f6fb;
  border: 1px solid #e0e0e5;
  border-radius: 12rem;
  margin-right: 1.5rem;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #dee8fb;
      border: 2px solid #c9d8fb;
    `}
`;

const Shape = ({ name, selected = false }: IShapeProps) => {
  return <StyledShape selected={selected}>{name}</StyledShape>;
};

export default Shape;

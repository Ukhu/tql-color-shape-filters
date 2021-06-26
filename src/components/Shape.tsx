import React from "react";
import styled, { css } from "styled-components";

import { IShapeProps } from "../types";

const StyledShape = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  padding: 0 1rem;
  height: 3rem;
  background-color: #f5f6fb;
  border: 1px solid #e0e0e5;
  border-radius: 12rem;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  outline: none;

  &:focus {
    border: 4px solid #c9d8fb;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #dee8fb;
      border: 2px solid #c9d8fb;
    `}
`;

const Shape = ({ name, handleClick, selected = false }: IShapeProps) => {
  return (
    <StyledShape selected={selected} onClick={handleClick}>
      {name}
    </StyledShape>
  );
};

export default Shape;

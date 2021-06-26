import React from "react";
import styled, { css } from "styled-components";

import { IColorProps } from "../types";

const StyledColor = styled.button<{ selected: boolean; name: string }>`
  height: 3rem;
  width: 3rem;
  background-color: ${({ name }) => name};
  border-radius: 50%;
  border: 1px solid #e0e0e5;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  outline: none;

  &:focus {
    border: 4px solid #e0e0e5;
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid #3579f6;
      box-shadow: 1px 1px 5px #3579f6, -1px -1px 5px #3579f6;
    `}
`;

const Color = ({ name, handleClick, selected = false }: IColorProps) => {
  return <StyledColor selected={selected} name={name} onClick={handleClick} />;
};

export default Color;

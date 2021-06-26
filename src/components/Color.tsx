import React from "react";
import styled, { css } from "styled-components";

import { IColorProps } from "../types";

const StyledColor = styled.div<{ selected: boolean; name: string }>`
  height: 3rem;
  width: 3rem;
  background-color: ${({ name }) => name};
  border: 1px solid ${({ name }) => name};
  border-radius: 50%;
  margin-right: 1.5rem;

  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid #3579f6;
      box-shadow: 1px 1px 5px #3579f6, -1px -1px 5px #3579f6;
    `}
`;

const Color = ({ name, selected = false }: IColorProps) => {
  return <StyledColor selected={selected} name={name} />;
};

export default Color;

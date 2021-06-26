import React from "react";
import styled, { css } from "styled-components";

import { IColorProps } from "../types";

const StyledColor = styled.div<{ selected: boolean; name: string }>`
  height: 3rem;
  width: 3rem;
  background-color: ${({ name }) => name};
  border: 1px solid ${({ name }) => name};
  border-radius: 50%;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #dee8fb;
      border: 1px solid #3579f6;
    `}
`;

const Color = ({ name, selected }: IColorProps) => {
  return <StyledColor selected={selected} name={name} />;
};

export default Color;

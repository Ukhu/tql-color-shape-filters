import React from "react";
import styled, { css } from "styled-components";

const StyledItemGrid = styled.div`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(10rem, 1fr));
  grid-template-rows: repeat(autofill, minmax(1fr, 10rem));
  grid-gap: 1rem;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      grid-template-columns: repeat(2, minmax(8rem, 1fr));
    }
  `}
`;

interface IItemGridProps {
  children: React.ReactNode;
}

const ItemGrid = ({ children }: IItemGridProps) => {
  return <StyledItemGrid>{children}</StyledItemGrid>;
};

export default ItemGrid;

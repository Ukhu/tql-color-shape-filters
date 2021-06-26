import React from "react";
import styled from "styled-components";

const StyledItemGrid = styled.div`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 10rem);
  grid-template-rows: repeat(autofill, 10rem);
  grid-gap: 1rem;
`;

interface IItemGridProps {
  children: React.ReactNode;
}

const ItemGrid = ({ children }: IItemGridProps) => {
  return <StyledItemGrid>{children}</StyledItemGrid>;
};

export default ItemGrid;

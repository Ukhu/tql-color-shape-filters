import React from "react";
import styled from "styled-components";

const StyledFilterGroup = styled.div`
  margin-bottom: 2rem;
`;

const FilterCategory = styled.h3`
  color: #6093f8;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

interface IFilterGroup {
  category: string;
  children: React.ReactNode;
}

const FilterGroup = ({ category, children }: IFilterGroup) => {
  return (
    <StyledFilterGroup>
      <FilterCategory>{category}</FilterCategory>
      <Filters>{children}</Filters>
    </StyledFilterGroup>
  );
};

export default FilterGroup;

import React from "react";

import Header from "../components/Header";
import Shape from "../components/Shape";
import Color from "../components/Color";
import FilterGroup from "../components/FilterGroup";
import styled from "styled-components";
import Item from "../components/Item";
import ItemGrid from "../components/ItemGrid";

const StyledSection = styled.section`
  margin: 0 12rem;
  margin-bottom: 4rem;
`;

const SectionHeading = styled.h3`
  display: flex;
  align-items: center;
`;

const ItemAmount = styled.span`
  font-size: 1rem;
  font-weight: normal;
`;

const Home = () => {
  return (
    <div>
      <Header />

      <StyledSection>
        <SectionHeading>Filters</SectionHeading>
        <FilterGroup category="Shapes">
          <Shape name="Oval" selected />
          <Shape name="Round" />
          <Shape name="Triangle" />
          <Shape name="Square" selected />
          <Shape name="Rectangle" />
        </FilterGroup>

        <FilterGroup category="Colors">
          <Color name="red" selected />
          <Color name="blue" />
          <Color name="green" />
          <Color name="yellow" />
          <Color name="lightblue" selected />
          <Color name="grey" />
        </FilterGroup>
      </StyledSection>

      <StyledSection>
        <SectionHeading>
          All items. &nbsp;<ItemAmount>(6)</ItemAmount>
        </SectionHeading>
        <ItemGrid>
          <Item color="red" shape="oval" />
        </ItemGrid>
      </StyledSection>
    </div>
  );
};

export default Home;

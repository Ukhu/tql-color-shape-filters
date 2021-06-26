import React from "react";

import Header from "../components/Header";
import Shape from "../components/Shape";
import Color from "../components/Color";
import FilterGroup from "../components/FilterGroup";
import styled from "styled-components";

const FiltersSection = styled.section`
  margin: 0 12rem;
`;

const Home = () => {
  return (
    <div>
      <Header />

      <FiltersSection>
        <h2>Filters</h2>
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
          <Color name="lightblue" selected />
          <Color name="grey" />
        </FilterGroup>
      </FiltersSection>
    </div>
  );
};

export default Home;

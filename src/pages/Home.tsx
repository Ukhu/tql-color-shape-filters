import React, { useState } from "react";

import Header from "../components/Header";
import Shape from "../components/Shape";
import Color from "../components/Color";
import FilterGroup from "../components/FilterGroup";
import styled from "styled-components";
import Item from "../components/Item";
import ItemGrid from "../components/ItemGrid";
import { getItemsDescription } from "../utils";

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

const COLORS = ["red", "blue", "green", "yellow", "lightblue", "grey"];
const SHAPES = ["oval", "round", "triangle", "square", "rectangle"];

const Home = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);

  const handleColorSelect = (color: string) => {
    const isSelected = selectedColors.includes(color);

    if (isSelected) {
      const filteredColors = selectedColors.filter(
        (existingColor) => existingColor !== color
      );
      setSelectedColors(filteredColors);
    } else {
      setSelectedColors((prevColors) => [...prevColors, color]);
    }
  };

  const handleShapeSelect = (shape: string) => {
    const isSelected = selectedShapes.includes(shape);

    if (isSelected) {
      const filteredShapes = selectedShapes.filter(
        (existingShape) => existingShape !== shape
      );
      setSelectedShapes(filteredShapes);
    } else {
      setSelectedShapes((prevShapes) => [...prevShapes, shape]);
    }
  };

  const itemDescription = getItemsDescription(
    COLORS.length,
    SHAPES.length,
    selectedColors,
    selectedShapes
  );

  return (
    <div>
      <Header />

      <StyledSection>
        <SectionHeading>Filters</SectionHeading>
        <FilterGroup category="Shapes">
          {SHAPES.map((shape) => {
            const isSelected = selectedShapes.includes(shape);
            return (
              <Shape
                name={shape}
                selected={isSelected}
                handleClick={() => handleShapeSelect(shape)}
              />
            );
          })}
        </FilterGroup>

        <FilterGroup category="Colors">
          {COLORS.map((color) => {
            const isSelected = selectedColors.includes(color);
            return (
              <Color
                name={color}
                selected={isSelected}
                handleClick={() => handleColorSelect(color)}
              />
            );
          })}
        </FilterGroup>
      </StyledSection>

      <StyledSection>
        <SectionHeading>
          {itemDescription}. &nbsp;
          <ItemAmount>
            ({selectedColors.length * selectedShapes.length})
          </ItemAmount>
        </SectionHeading>
        <ItemGrid>
          {selectedShapes.map((shape) => {
            return selectedColors.map((color) => (
              <Item color={color} shape={shape} />
            ));
          })}
        </ItemGrid>
      </StyledSection>
    </div>
  );
};

export default Home;

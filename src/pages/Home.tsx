import React from "react";
import styled, { css } from "styled-components";

import AppContext from "../contexts/AppContext";
import { getColorFilters, getGridTitle, getShapeFilters } from "../utils";

import Header from "../components/Header";
import Shape from "../components/Shape";
import Color from "../components/Color";
import FilterGroup from "../components/FilterGroup";
import Item from "../components/Item";
import ItemGrid from "../components/ItemGrid";

const StyledSection = styled.section`
  margin: 0 12rem;
  margin-bottom: 4rem;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      margin: 0 3rem;
      margin-bottom: 2rem;
    }
  `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      margin: 0 2rem;
    }
  `}
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
  const items = React.useContext(AppContext).items;

  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [selectedShapes, setSelectedShapes] = React.useState<string[]>([]);

  const COLORS = React.useMemo(() => getColorFilters(items), [items]);
  const SHAPES = React.useMemo(() => getShapeFilters(items), [items]);

  React.useEffect(() => {
    setSelectedColors([...COLORS]);
    setSelectedShapes([...SHAPES]);
  }, [COLORS, SHAPES]);

  const handleColorSelect = (color: string) => {
    const isSelected = selectedColors.includes(color);

    if (isSelected) {
      const filteredColors = selectedColors.filter(
        (existingColor) => existingColor !== color
      );
      setSelectedColors(
        filteredColors.length === 0 ? [...COLORS] : filteredColors
      );
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
      setSelectedShapes(
        filteredShapes.length === 0 ? [...SHAPES] : filteredShapes
      );
    } else {
      setSelectedShapes((prevShapes) => [...prevShapes, shape]);
    }
  };

  const gridTitle = getGridTitle(
    COLORS.length,
    SHAPES.length,
    selectedColors,
    selectedShapes
  );

  return (
    <div>
      <Header loggedIn />

      <StyledSection>
        <SectionHeading>Filters</SectionHeading>
        <FilterGroup category="Shapes">
          {SHAPES.map((shape) => {
            const isSelected = selectedShapes.includes(shape);
            return (
              <Shape
                key={shape}
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
                key={color}
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
          {gridTitle}. &nbsp;
          <ItemAmount>
            ({selectedColors.length * selectedShapes.length})
          </ItemAmount>
        </SectionHeading>
        <ItemGrid>
          {items
            .filter(
              (item) =>
                selectedColors.includes(item.color) &&
                selectedShapes.includes(item.shape)
            )
            .map((item) => (
              <Item
                key={item.color + item.shape}
                color={item.color}
                shape={item.shape}
              />
            ))}
        </ItemGrid>
      </StyledSection>
    </div>
  );
};

export default Home;

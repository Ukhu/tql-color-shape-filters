import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import AppTheme from "../../theme/AppTheme";

import Item from "../Item";
import ItemGrid from "../ItemGrid";

const items = [
  {
    shape: "triangle",
    color: "red",
  },
  {
    shape: "square",
    color: "blue",
  },
  {
    shape: "oval",
    color: "yellow",
  },
];

test("It should render the correct number of items passed in", () => {
  render(
    <ThemeProvider theme={AppTheme}>
      <ItemGrid>
        {items.map((item) => {
          const { shape, color } = item;
          return <Item key={shape + color} shape={shape} color={color} />;
        })}
      </ItemGrid>
    </ThemeProvider>
  );

  const displayedItems = screen.getAllByTestId("shapeItem");

  expect(displayedItems.length).toEqual(items.length);
});

test("It should display the correct items", () => {
  render(
    <ThemeProvider theme={AppTheme}>
      <ItemGrid>
        {items.map((item) => {
          const { shape, color } = item;
          return <Item key={shape + color} shape={shape} color={color} />;
        })}
      </ItemGrid>
    </ThemeProvider>
  );

  const item1 = screen.getByTestId(`${items[0].shape}-${items[0].color}`);
  const item2 = screen.getByTestId(`${items[1].shape}-${items[1].color}`);
  const item3 = screen.getByTestId(`${items[2].shape}-${items[2].color}`);

  expect(item1).toBeInTheDocument();
  expect(item2).toBeInTheDocument();
  expect(item3).toBeInTheDocument();
});

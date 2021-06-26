import { render, screen } from "@testing-library/react";

import Shape from "../Shape";
import FilterGroup from "../FilterGroup";

const filters = [
  {
    name: "triangle",
    handleClick: jest.fn(),
    selected: false,
  },
  {
    name: "rectangle",
    handleClick: jest.fn(),
    selected: true,
  },
  {
    name: "oval",
    handleClick: jest.fn(),
    selected: false,
  },
];

test("It should render the correct number of shapes passed in", () => {
  render(
    <FilterGroup category="Shapes">
      {filters.map((filter) => {
        const { name, selected, handleClick } = filter;
        return (
          <Shape
            key={name}
            name={name}
            selected={selected}
            handleClick={handleClick}
          />
        );
      })}
    </FilterGroup>
  );

  const filterButtons = screen.getAllByRole(/button/);

  expect(filterButtons.length).toEqual(filters.length);
});

test("It should display the category name", () => {
  const category = "Shapes";
  render(
    <FilterGroup category={category}>
      {filters.map((filter) => {
        const { name, selected, handleClick } = filter;
        return (
          <Shape
            key={name}
            name={name}
            selected={selected}
            handleClick={handleClick}
          />
        );
      })}
    </FilterGroup>
  );

  const filterGategory = screen.getByText(category);

  expect(filterGategory).toBeInTheDocument();
});

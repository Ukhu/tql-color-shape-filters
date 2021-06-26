import { render, screen, fireEvent } from "@testing-library/react";

import Shape from "../Shape";

const sampleShape = {
  name: "triangle",
  handleClick: jest.fn(),
  selected: false,
};

test("It should render correctly", () => {
  render(<Shape {...sampleShape} />);

  const shapeButton = screen.getByRole(/button/);

  expect(shapeButton).toBeInTheDocument();
});

test("It should contain the supplied shape name", () => {
  render(<Shape {...sampleShape} />);

  const shapeButton = screen.getByRole(/button/);

  expect(shapeButton).toHaveTextContent(sampleShape.name);
});

test("It should call the appropiate handler", () => {
  render(<Shape {...sampleShape} />);

  const shapeButton = screen.getByRole(/button/);

  fireEvent.click(shapeButton);

  expect(sampleShape.handleClick).toHaveBeenCalledTimes(1);
});

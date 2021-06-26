import { render, screen, fireEvent } from "@testing-library/react";

import Color from "../Color";

const sampleColor = {
  name: "red",
  handleClick: jest.fn(),
  selected: false,
};

test("It should render correctly", () => {
  render(<Color {...sampleColor} />);

  expect(screen.getByRole(/button/)).toBeInTheDocument();
});

test("It should call the appropiate handler", () => {
  render(<Color {...sampleColor} />);

  const colorButton = screen.getByRole(/button/);

  fireEvent.click(colorButton);

  expect(sampleColor.handleClick).toHaveBeenCalledTimes(1);
});

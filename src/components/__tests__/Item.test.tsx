import { render, screen } from "@testing-library/react";

import Item from "../Item";

const sampleItem = {
  shape: "square",
  color: "red",
};

test("It should render correctly", () => {
  const { container } = render(<Item {...sampleItem} />);

  expect(container).toBeInTheDocument();
});

test("It should render the correct shape and color", () => {
  render(<Item {...sampleItem} />);

  const shapeAndColorIdPattern = `${sampleItem.shape}-${sampleItem.color}`;

  const item = screen.getByTestId(shapeAndColorIdPattern);

  expect(item).toBeInTheDocument();
});

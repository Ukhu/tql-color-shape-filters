import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import AppTheme from "../../theme/AppTheme";

import Header from "../Header";

const sampleShape = {
  loggedIn: true,
};

test("It should render correctly", () => {
  const { container } = render(
    <ThemeProvider theme={AppTheme}>
      <Header {...sampleShape} />
    </ThemeProvider>
  );

  expect(container).toBeInTheDocument();
});

test("It should contain logo name", () => {
  render(
    <ThemeProvider theme={AppTheme}>
      <Header {...sampleShape} />
    </ThemeProvider>
  );

  const headerLogo = screen.getByText(/shapes/i);

  expect(headerLogo).toBeInTheDocument();
});

test("It should contain the logout button when the user is logged in", () => {
  render(
    <ThemeProvider theme={AppTheme}>
      <Header {...sampleShape} />
    </ThemeProvider>
  );

  const logoutButton = screen.getByRole(/button/);

  expect(logoutButton).toHaveTextContent(/logout/i);
});

test("It should NOT contain the logout button when not logged in", () => {
  render(
    <ThemeProvider theme={AppTheme}>
      <Header />
    </ThemeProvider>
  );

  const logoutButton = screen.queryByRole(/button/);

  expect(logoutButton).not.toBeInTheDocument();
});

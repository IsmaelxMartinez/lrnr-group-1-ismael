// src/test/Layout.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../pages/Layout.jsx";

describe("Layout Component", () => {
  test("renders the Navbar, Outlet, and Footer", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // Check if the Navbar is rendered
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();

    // Check if the Footer is rendered
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});

// src/test/Home.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Wrap the component in a router
import Home from "../pages/Home.jsx";

describe("Home Component", () => {
  test('renders the logo, text, and "BEGIN JOURNEY" button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check if the logo is rendered
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();

    // Check if the main text is rendered
    const textElement = screen.getByText(
      /Your guided path to programming enlightenment/i
    );
    expect(textElement).toBeInTheDocument();

    // Check if the "BEGIN JOURNEY" button is rendered
    const buttonElement = screen.getByText(/BEGIN JOURNEY/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

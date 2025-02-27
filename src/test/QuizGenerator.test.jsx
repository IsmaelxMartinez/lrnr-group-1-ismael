// src/test/QuizGenerator.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Wrap the component in a router
import QuizGenerator from "../pages/QuizGenerator.jsx";

describe("QuizGenerator Component", () => {
  test("renders the quiz generation form", () => {
    render(
      <MemoryRouter>
        <QuizGenerator />
      </MemoryRouter>
    );

    // Check if the form title is rendered
    const titleElement = screen.getByText(/Quiz Generation Options/i);
    expect(titleElement).toBeInTheDocument();

    // Check if the topic dropdown is rendered
    const topicDropdown = screen.getByText(/Topic/i);
    expect(topicDropdown).toBeInTheDocument();

    // Check if the submit button is rendered
    const submitButton = screen.getByText(/Submit/i);
    expect(submitButton).toBeInTheDocument();
  });
});

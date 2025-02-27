// src/test/Results.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ResultsPage from "../pages/Results.jsx";

describe("ResultsPage Component", () => {
  test('renders the score summary and "TRY ANOTHER QUIZ" button', () => {
    const totalQuestions = 10;
    const correctAnswers = 7;

    render(
      <MemoryRouter>
        <ResultsPage
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
        />
      </MemoryRouter>
    );

    // Check if the score summary is rendered
    const scoreSummary = screen.getByText(/Your Results/i); // Updated to match the actual text
    expect(scoreSummary).toBeInTheDocument();

    // Check if the "TRY ANOTHER QUIZ" button is rendered
    const buttonElement = screen.getByText(/TRY ANOTHER QUIZ/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

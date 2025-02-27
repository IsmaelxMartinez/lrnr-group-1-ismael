// cypress/e2e/homepage.cy.js
describe("Homepage E2E Tests", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit("/");
  });

  // Test 1: Verify the logo is visible
  it("should display the logo", () => {
    cy.get('img[alt="logo"]').should("be.visible");
  });

  // Test 2: Verify the main text is visible
  it("should display the main text", () => {
    cy.contains("Your guided path to programming enlightenment").should(
      "be.visible"
    );
  });

  // Test 3: Verify the "BEGIN JOURNEY" button is visible and clickable
  it('should display and enable the "BEGIN JOURNEY" button', () => {
    cy.contains("BEGIN JOURNEY").should("be.visible").and("not.be.disabled");
  });

  // Test 4: Verify clicking the "BEGIN JOURNEY" button navigates to the quiz generator page
  it('should navigate to the quiz generator page when "BEGIN JOURNEY" is clicked', () => {
    cy.contains("BEGIN JOURNEY").click();
    cy.url().should("include", "/quizgenerator");
  });
});

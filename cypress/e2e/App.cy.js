describe("App Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the navigation bar", () => {
    cy.get('[data-testid="navbar"]', { timeout: 10000 }).should("exist");
  });

  it("renders the dark mode toggle", () => {
    cy.get('[data-testid="dark-mode-toggle"]', { timeout: 10000 }).should(
      "exist"
    );
  });

  it("renders the main page by default", () => {
    cy.url().should("include", "/");
    cy.get('[data-testid="main-page"]').should("exist");
  });

  it("navigates to the project page", () => {
    cy.get('[data-testid="menu-button"]').click();
    cy.contains("Projects").click({ force: true });
    cy.url().should("include", "/projects");
    cy.get('[data-testid="project-page"]').should("exist");
  });
});

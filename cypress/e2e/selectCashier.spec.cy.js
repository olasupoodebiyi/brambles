describe("Select Cashier", () => {
  it("should select a cashier and navigate to dashboard", () => {
    cy.visit("/");
    cy.contains("Cashier 1").click();
    cy.url().should("include", "/dashboard");
  });
});

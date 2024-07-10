describe("View Sales Dashboard", () => {
  it("should display total sales for selected cashier", () => {
    cy.visit("/");
    cy.contains("Cashier 1").click();
    cy.contains("Total Sales: $450.00");
  });
});

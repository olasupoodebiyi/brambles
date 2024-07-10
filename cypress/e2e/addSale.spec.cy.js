describe("Add Sale", () => {
  it("should add a sale and update total sales", () => {
    cy.visit("/");
    cy.contains("Cashier 1").click();
    cy.contains("Total Sales: $0.00");
    cy.visit("/add-sale");
    cy.get("input").type("100");
    cy.contains("Add Sale").click();
    cy.visit("/dashboard");
    cy.contains("Total Sales: $100.00");
  });
});

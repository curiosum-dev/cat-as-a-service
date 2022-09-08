describe("Landing page", () => {
  it("Goes to cats with a specific breed page", () => {
    cy.visit("http://localhost:3000");

    cy.findByRole("combobox").click();

    cy.findByText("Abyssinian").click();

    cy.findByRole("button").click();

    cy.findAllByAltText("cat image").should("be.visible");
  });
});

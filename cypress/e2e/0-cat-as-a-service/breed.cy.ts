describe("Cat's breed page", () => {
  it("Shows page with cats with a specific breed", () => {
    cy.visit("http://localhost:3000/breed/abys");

    cy.findAllByAltText("cat image").should("exist");
  });

  it("Shows 404 when cat's breed is unknown", () => {
    cy.visit("http://localhost:3000/breed/wrong_breed_name");

    cy.findAllByAltText("cat image").should("not.exist");

    cy.findByText("404").should("exist");
  });
});

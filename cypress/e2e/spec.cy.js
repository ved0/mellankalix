describe("My First Test", () => {
  it("Visits the localhost site", () => {
    cy.visit("http://localhost:5080");

    cy.contains("VISA FLERA DAGAR");

    cy.contains("Öppettider").click();

    cy.url().should("include", "/open");
  });
});

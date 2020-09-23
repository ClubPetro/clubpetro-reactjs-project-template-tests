/// <reference types="cypress" />

describe("Admin page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Interacao na tela", () => {
    cy.get("input[data-test=fullName]").type("Henrique Weiand");
    // cy.get("[data-test=document]").type("99999999999");
  });
});

/// <reference types="cypress" />

describe("Admin page", () => {
  beforeEach(() => {
    cy.visit("/manager");
  });

  it("Interacao na tela", () => {
    cy.get("[data-test=fullName]").type("Henrique Weiand");
    cy.get("[data-test=document]").type("88888888888");

    cy.get("[data-test=pages-admin] button").click();
  });
});

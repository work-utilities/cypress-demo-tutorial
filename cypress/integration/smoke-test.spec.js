const hostUrl = "http://localhost:3030";
// describe("The application loads", () => {
//   it("navigates to the / route", () => {
//     cy.visit(hostUrl);
//   });

//   it("has the basic Todo list container", () => {
//     cy.visit(hostUrl);
//     cy.get(".todo-list").should("exist");
//   });
// });


describe("Input form", () => {
  it("focus input on load", () => {
    cy.visit(hostUrl);
  });

  it("check for class", () => {
    cy.visit(hostUrl);
    cy.focused().should('have.class', 'class-name')
  });


  it.only('accepts input', () => {
  	cy.visit(hostUrl)
  	cy.get('.new-todo')
  	.type('Buy Milk')
  	.should('have.value', 'Buy Milk')

  })
});

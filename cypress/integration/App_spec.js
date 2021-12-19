/* eslint-disable no-undef */
describe("mvp full run-through", () => {
  it("user can log in, find a job, check out the board and log out", () => {
    //login
    cy.visit("http://localhost:3000/");
    cy.findByRole("button", { name: /log in/i }).click();
    cy.findByRole("textbox").type("testtest999@test.com");
    cy.findByLabelText(/password/i).type("testtest999@test.com");
    cy.findByRole("button", { name: /log in/i }).click();
    //search for a job
    cy.findByRole("textbox", { name: /job name/i }).type("junior developer");
    cy.findByRole("textbox", { name: /location/i }).type("london");
    cy.findByRole("button", { name: /search/i }).click();
    //checkout the board

    //log out
  });
});

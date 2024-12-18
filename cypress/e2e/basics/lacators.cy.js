describe("Locators Test", ()=>{
      it("ID", ()=> {
            cy.visit("https://www.automationexercise.com/")
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
            cy.get('[data-qa="signup-name"]').type("Tushar Chandra Sarker")
            cy.get('[data-qa="signup-email"]').type("45zippy@freesourcecodes.com")
            cy.get('[data-qa="signup-button"]').click()
            cy.scrollTo("bottom")
            cy.wait(3000)
            cy.scrollTo("top")
            cy.wait(3000)
            cy.get('[data-qa="create-account"]').scrollIntoView()
      })
})
// Shared commands

//Command to login to main page and passing login data
Cypress.Commands.add("loginToPage", (user, password) => {
    cy.visit("https://devmalta.bitso.com/login")
    cy.get('#client_id').should('be.visible').type(user)
    cy.get('#password').should('be.visible').type(password)
    cy.contains('Got it').should('be.visible').click().then(() => {
        cy.get('form').children().contains('Log in').should('be.visible').click()
    })  
})

// Commands for first test cases

//Command to click on the cryptocurrency passed to method
Cypress.Commands.add("clickOnCrypto", (coin) => {
    if (coin = 'BTC') {
        cy.get(':nth-child(2) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1').click()
    }
    else if (coin = 'ETH') {
        cy.get(':nth-child(8) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1').click()
    }
    else if (coin = 'BCH') {
        cy.get(':nth-child(5) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1').click()   
    }
    else if (coin = 'DAI') {
        cy.get(':nth-child(7) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1').click()
    }
    else if (coin = 'XRP') {
        cy.get(':nth-child(15) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1').click()
    }
    else if (coin = 'MANA') {
        cy.get(':nth-child(11) > .Container__StyledContainer-sc-1nmtyg4-0 > .styles__Name-go4zwh-1').click()
    }
})

//Command to validate deposit is not available and message displayed in modal and finally close modal
Cypress.Commands.add("validateDepositOnCrypto", () => {
    cy.get('.bdGJMw > .Container__StyledContainer-sc-1nmtyg4-0 > :nth-child(1)').click().then(() => {
        cy.get('.dfeYKB').should('be.visible')
        cy.get('.styles__WrapperContainer-sc-1yl4qxp-5').should('be.visible').then(() => {
            cy.get(':nth-child(1) > [data-testid=picker-item]').should('be.visible').click().then(() => {
                cy.get('.moon-alert').should('be.visible')
                cy.get('.Typography__H3-qw5r90-2').should('contain', 'Oops! Something went wrong').then(() => {
                    cy.get('[data-testid=modal-close]').click()
                })
            })
        })
    })
})

//Command to execute to make sure Wallet Page is loaded
Cypress.Commands.add("waitForWalletToLoad", () => {
    cy.url().should('contain', '/wallet').then(() => {
        cy.get('.hSHQSi').should('be.visible').then(() => {
            cy.get('.recharts-surface').should('be.visible')
        })
    })
})

//Commands for second test cases

//Command added to go to Add Beneficiaries site
Cypress.Commands.add("goToBeneficiaries", () => {
    cy.visit(" https://devmalta.bitso.com/r/user/beneficiaries/add")
})

//Command added to go to ensure Beneficiaries page is loaded before continuing
Cypress.Commands.add("validateBeneficiariesPageIsLoaded", () => {
    cy.contains('Add beneficiary').should('be.visible')
    cy.get("#first_name").should('be.visible')
    cy.get('#last_name').should('be.visible')
    cy.get('#second_last_name').should('be.visible')
    cy.get('#day').should('be.visible')
    cy.get('#month').should('be.visible')
    cy.get('#year').should('be.visible')
    cy.get('#percentage').should('be.visible')
})

//Command to make fill data from form by passing the selector and value to type on input boxes
Cypress.Commands.add("fillRandomData", (selector, value) => {
    cy.get(selector).type(value)
})

//Command to click on submit button
Cypress.Commands.add("submitRandomData", () => {
    cy.get('[data-testid=add-beneficiary-button]').should('be.enabled').click()
})

//Command created to type the PIN and click on Confirm button
Cypress.Commands.add("confirmBeneficiary", (value) => {
    cy.get('.Typography__H3-qw5r90-2').should('contain', 'Confirm beneficiary')
    cy.get('#pin').should('be.visible').type(value)
    cy.get('button').contains('Confirm').should('be.enabled').click()
})

//Command created to validate Incorrect PIN Message and close modal
Cypress.Commands.add("validateIncorrectPinMessage", () => {
    cy.get('.styles__Message-vmzast-2').should('contain', 'Incorrect PIN')
    cy.get('.styles__Button-vmzast-3').click()
})




/*
Scenario 1 - Description
1. Navigate to https://devmalta.bitso.com/login
2. Provide email address (The one you created in the precondition steps)
3. Provide password
4. Click on Login
5. Click on BTC
6. Click on Deposit
7. Verify the error message displayed
Repeat this with ETH, BCH, DAI, XRP and MANA
*/

//Adding cypress reference to run the test case

/// <reference types="Cypress" />

//Importing the fixture created for credentials data
const credentials = require('../fixtures/loginData')

//Creating testing suite
describe("Bitso Challenge Test Scenario 01", () => {

    //This action will be executed before all test cases from suite
    before(function() {
        //Login to website
        cy.loginToPage(credentials.user, credentials.password)
    })

    //One test case is created per each crypto requested
    it("Validate deposit error message displayed for BTC", () => {        
        //First we wait for wallet page to be displayed, pass the crypto to validate and finally ensure error message is displayed
        cy.waitForWalletToLoad().then(() => {
            cy.clickOnCrypto('BTC').then(() => {
                cy.validateDepositOnCrypto('BTC')
            })
        })
    })

    it("Validate deposit error message displayed for ETH", () => {        
        //First we wait for wallet page to be displayed, pass the crypto to validate and finally ensure error message is displayed
        cy.waitForWalletToLoad().then(() => {
            cy.clickOnCrypto('ETH').then(() => {
                cy.validateDepositOnCrypto('ETH')      
            })
        })
    })
 
    it("Validate deposit error message displayed for BCH", () => {        
        //First we wait for wallet page to be displayed, pass the crypto to validate and finally ensure error message is displayed
        cy.waitForWalletToLoad().then(() => {
            cy.clickOnCrypto('BCH').then(() => {
                cy.validateDepositOnCrypto('BCH')      
            })
        })
    })
 
    it("Validate deposit error message displayed for DAI", () => {        
        //First we wait for wallet page to be displayed, pass the crypto to validate and finally ensure error message is displayed
        cy.waitForWalletToLoad().then(() => {
            cy.clickOnCrypto('DAI').then(() => {
                cy.validateDepositOnCrypto('DAI')      
            })
        })
    })

    it("Validate deposit error message displayed for XRP", () => {        
        //First we wait for wallet page to be displayed, pass the crypto to validate and finally ensure error message is displayed
        cy.waitForWalletToLoad().then(() => {
            cy.clickOnCrypto('XRP').then(() => {
                cy.validateDepositOnCrypto('XRP')      
            })
        })
    })

    it("Validate deposit error message displayed for MANA", () => {        
        //First we wait for wallet page to be displayed, pass the crypto to validate and finally ensure error message is displayed
        cy.waitForWalletToLoad().then(() => {
            cy.clickOnCrypto('MANA').then(() => {
                cy.validateDepositOnCrypto('MANA')      
            })
        })
    })

})

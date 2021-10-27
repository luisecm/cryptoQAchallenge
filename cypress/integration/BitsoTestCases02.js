/*Description of Scenario 2

1. Navigate to https://devmalta.bitso.com/login
2. Provide email address (The one you created in the precondition steps)
3. Provide password
4. Click on Login
5. Navigate to https://devmalta.bitso.com/r/user/beneficiaries/add
6. Click on Add
7. Provide random data on Name, Last name, Second last name, birthday,
kinship, benefit percentage
8. Benefit percentage
9. Click on Add
10.Enter an invalid PIN
11.Verify Incorrect PIN error
*/

//Declaring a constant to invoke the fakerJS library
const faker = require('faker');

//Adding cypress reference to run the test case

/// <reference types="Cypress" />

//Creating a function to generate random numbers
function getRandomNumberInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Importing the fixture created for credentials data
const credentials = require('../fixtures/loginData')

//Creating testing suite
describe("Bitso Challenge Test Scenario 02", () => {

    //This action will be executed before all test cases from suite
    before(function() {
        //Login to website and then go to add beneficiaries site
        cy.loginToPage(credentials.user, credentials.password).then(() => {
            cy.goToBeneficiaries().then(() => {
                cy.validateBeneficiariesPageIsLoaded()
            })     
        })
    })

    it("Validate invalid PIN scenario after adding beneficiaries", () => {        
        //One test case is created to validate the full scenario
        //fill form values using the command previously created for input boxes
        cy.fillRandomData("#first_name", faker.name.firstName())
        cy.fillRandomData("#last_name", faker.name.lastName())
        cy.fillRandomData("#second_last_name", faker.name.lastName())
        cy.fillRandomData("#day", getRandomNumberInclusive(1, 28).toString()+'{enter}')
        cy.fillRandomData("#month", faker.date.month()+'{enter}')
        cy.fillRandomData("#year", getRandomNumberInclusive(1932, 2021).toString()+'{enter}')
        cy.fillRandomData("#percentage", getRandomNumberInclusive(1, 100).toString())
        //selecting the value 'Relative' in dropdown to be able to pass the form fill
        cy.selectKinshipValue(getRandomNumberInclusive(1,3)).then(() => {
        //click on submit button
            cy.submitRandomData()
        }).then(() => {
            //After modal message is displayed, we get a random pin to pass and then click on Confirm
            cy.confirmBeneficiary(getRandomNumberInclusive(11111, 99999))
        }).then(() => {
            //Validation of message "Incorrect PIN" and closing modal to finish
            cy.validateIncorrectPinMessage()
        })
    })

})

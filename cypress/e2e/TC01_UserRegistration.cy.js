import { Environment } from "../support/utils/commonActions/environs";
import { UserRegistration } from "../support/pages/userRegistration";
import { faker } from "@faker-js/faker";

const userRegistration = new UserRegistration();  // Instantiate the imported UserRegistration class
const baseUrl = Environment.getBaseUrl();
const userName = faker.internet.userName();
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();


describe('User Registration', () => {

    it('Registration Page', () => {
        cy.visit(baseUrl);
        userRegistration.pageActions.clickRegisterLink().click({force: true})
        userRegistration.pageActions.clickFemaleCheckBox().click({force: true})
        userRegistration.pageActions.selectTitleDropdown().select('Mr', {force: true})
        userRegistration.pageActions.enterFirstName().type(firstname, {force: true})
        userRegistration.pageActions.enterLastName().type(lastname, {force: true})
        userRegistration.pageActions.enterAddress_1().type('Moss Grange Avenue', {force: true})
        userRegistration.pageActions.enterAddress_2().type('Manchy', {force: true})
        userRegistration.pageActions.enterCityField().type('Manchester', {force: true})
        userRegistration.pageActions.enterStateField().type('Greater Manchester', {force: true})
        userRegistration.pageActions.enterPostalCodeField().type('M13 0JG', {force: true})
        userRegistration.pageActions.selectCountryDropdown().select('GB', {force: true})
        userRegistration.pageActions.enterUserName().type(userName, {force: true})
        userRegistration.pageActions.enterEmail().type(email, {force: true})
        userRegistration.pageActions.enterPhone().type('07712345678', {force: true})
        userRegistration.pageActions.enterPassword().type('red123', {force: true})
        userRegistration.pageActions.enterConfirmPassword().type('red123', {force: true})
        userRegistration.pageActions.clickPrivatePolicyBtn().click({force: true})
        userRegistration.pageActions.clickSubmitButton().click({force: true})
        
        
    });
    
});

export class UserRegistration {

     //------------------Selectors --------------------------------
    webSelectors = {

        registerLink: '#menu-item-2815 > .menu-link',
        maleCheckBox: '#wpforms-2811-field_7_1',
        femaleCheckBox: '#wpforms-2811-field_7_2',
        titleDropdown: '#wpforms-2811-field_8',
        firstName: '#wpforms-2811-field_1',
        lastName: '#wpforms-2811-field_1-last',
        address_1:'#wpforms-2811-field_9',
        address_2:'#wpforms-2811-field_9-address2',
        cityField:"#wpforms-2811-field_9-city",
        stateField:"#wpforms-2811-field_9-state",
        postalCodeField:"#wpforms-2811-field_9-postal",
        countryDropdown:"#wpforms-2811-field_9-country",
        userNameField:"#wpforms-2811-field_2",
        emailField:"#wpforms-2811-field_3",
        phoneField:"#wpforms-2811-field_10",
        passwordField:"#wpforms-2811-field_4",
        confirmPasswordField:"#wpforms-2811-field_4-secondary",
        privatePolicyBtn:"#wpforms-2811-field_11_1",
        submitButton:"#wpforms-submit-2811",
             

    }
//-----------------------------Actions-----------------------------  
    pageActions = {

        clickRegisterLink: () => cy.get(this.webSelectors.registerLink),
        clickMaleCheckBox: () => cy.get(this.webSelectors.maleCheckBox),
        clickFemaleCheckBox: () => cy.get(this.webSelectors.femaleCheckBox),
        selectTitleDropdown: () => cy.get(this.webSelectors.titleDropdown),
        enterFirstName: () => cy.get(this.webSelectors.firstName),
        enterLastName: () => cy.get(this.webSelectors.lastName),
        enterAddress_1: () => cy.get(this.webSelectors.address_1),
        enterAddress_2: () => cy.get(this.webSelectors.address_2),
        enterCityField: () => cy.get(this.webSelectors.cityField),
        enterStateField: () => cy.get(this.webSelectors.stateField),
        enterPostalCodeField: () => cy.get(this.webSelectors.postalCodeField),
        selectCountryDropdown: () => cy.get(this.webSelectors.countryDropdown),
        enterUserName: () => cy.get(this.webSelectors.userNameField),
        enterEmail: () => cy.get(this.webSelectors.emailField),
        enterPhone: () => cy.get(this.webSelectors.phoneField),
        enterPassword: () => cy.get(this.webSelectors.passwordField),
        enterConfirmPassword: () => cy.get(this.webSelectors.confirmPasswordField),
        clickPrivatePolicyBtn: () => cy.get(this.webSelectors.privatePolicyBtn),
        clickSubmitButton: () => cy.get(this.webSelectors.submitButton),
        clickSubmitButton: () => cy.get(this.webSelectors.submitButton),



    }
}
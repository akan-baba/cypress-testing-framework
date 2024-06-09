import {Computers} from '../support/pages/desktop-laptops'
import { Environment } from "../support/utils/commonActions/environs";
const computers = new Computers();
const baseUrl = Environment.getBaseUrl();


describe('Laptop Basket', () => {
    
    beforeEach(() => {
        cy.visit(baseUrl);
        computers.pageActions.clickMouseOverComputer().trigger('mouseover')
        computers.pageActions.clickLaptop().click({force: true})
    });

    it('Dell Gaming G3-1187 Core 8th', () => {
        cy.get('.post-125 > .astra-shop-summary-wrap > .button').click()
        computers.pageActions.selectRamDropdown().select('16gb')
        computers.pageActions.selectStorageDropdown().select('512gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i3')
        computers.pageActions.clickCheckbox_1().eq(0).click()
        computers.pageActions.clickCheckbox_1().eq(4).click()
        computers.pageActions.clickCheckbox_1().eq(7).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('3')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 
    });

    it('Dell Inspiron 15 3580-04 Core', () => {
        cy.get('.post-130 > .astra-shop-summary-wrap > .button').click()
        computers.pageActions.selectRamDropdown().select('8gb')
        computers.pageActions.selectStorageDropdown().select('256gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i5')
        computers.pageActions.clickCheckbox_1().eq(0).click()
        computers.pageActions.clickCheckbox_1().eq(4).click()
        computers.pageActions.clickCheckbox_1().eq(7).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('2')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 
    });

    it('Dell Inspiron 3567 Core i3-7130U Black', () => {
        cy.get('.post-133 > .astra-shop-summary-wrap > .button').click()
        computers.pageActions.selectRamDropdown().select('32gb')
        computers.pageActions.selectStorageDropdown().select('256gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i7')
        computers.pageActions.clickCheckbox_1().eq(1).click()
        computers.pageActions.clickCheckbox_1().eq(5).click()
        computers.pageActions.clickCheckbox_1().eq(7).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('4')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 
    });

    it('Dell Inspiron 5481 2-in-1 Laptop Intel Core Touchscreen', () => {
        cy.get('.post-122 > .astra-shop-summary-wrap > .button').click()
        computers.pageActions.selectRamDropdown().select('64gb')
        computers.pageActions.selectStorageDropdown().select('256gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i9')
        computers.pageActions.clickCheckbox_1().eq(1).click()
        computers.pageActions.clickCheckbox_1().eq(5).click()
        computers.pageActions.clickCheckbox_1().eq(7).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('4')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 

    });

    it('Dell Inspiron-5379 Intel Core 13.3-Inch', () => {
        cy.get('.post-137 > .astra-shop-summary-wrap > .button').click()
        computers.pageActions.selectRamDropdown().select('32gb')
        computers.pageActions.selectStorageDropdown().select('256gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i3')
        computers.pageActions.clickCheckbox_1().eq(1).click()
        computers.pageActions.clickCheckbox_1().eq(5).click()
        computers.pageActions.clickCheckbox_1().eq(7).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('4')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 
    });

    it('HP 15-DA0007NE-4MF58EA CORE', () => {
        cy.get('.post-139 > .astra-shop-summary-wrap > .button').cick()
        computers.pageActions.selectRamDropdown().select('16gb')
        computers.pageActions.selectStorageDropdown().select('256gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i5')
        computers.pageActions.clickCheckbox_1().eq(1).click()
        computers.pageActions.clickCheckbox_1().eq(5).click()
        computers.pageActions.clickCheckbox_1().eq(7).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('4')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 
    });

    it('HP PAVILION 14 BK002NE 2CH75EA CORE', () => {
        cy.get('.post-146 > .astra-shop-summary-wrap > .button').click()
        computers.pageActions.selectRamDropdown().select('32gb')
        computers.pageActions.selectStorageDropdown().select('256gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i7')
        computers.pageActions.clickCheckbox_1().eq(1).click()
        computers.pageActions.clickCheckbox_1().eq(5).click()
        computers.pageActions.clickCheckbox_1().eq(7).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('4')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 
    });

    it('HP Pavilion SE Laptop – Intel® N200, Silver', () => {
        cy.get('.post-142 > .astra-shop-summary-wrap > .button').click()
        computers.pageActions.selectRamDropdown().select('16gb')
        computers.pageActions.selectStorageDropdown().select('512gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i7')
        computers.pageActions.clickCheckbox_1().eq(1).click()
        computers.pageActions.clickCheckbox_1().eq(5).click()
        computers.pageActions.clickCheckbox_1().eq(7).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('4')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 
    });

    it('Lenovo Ideapad 330s 2 in 1 Laptop', () => {
        cy.get('.post-152 > .astra-shop-summary-wrap > .button').click()
        computers.pageActions.selectRamDropdown().select('64gb')
        computers.pageActions.selectStorageDropdown().select('768gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i7')
        computers.pageActions.clickCheckbox_1().eq(1).click()
        computers.pageActions.clickCheckbox_1().eq(5).click()
        computers.pageActions.clickCheckbox_1().eq(7).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('4')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 
    });

});
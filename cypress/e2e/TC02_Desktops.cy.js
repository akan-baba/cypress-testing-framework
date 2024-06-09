import {Computers} from '../support/pages/desktop-laptops'
import { Environment } from "../support/utils/commonActions/environs";
const computers = new Computers();
const baseUrl = Environment.getBaseUrl();


describe('Desktop Basket', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
        computers.pageActions.clickMouseOverComputer().trigger('mouseover')
        computers.pageActions.clickDesktop().click({force: true})
        
    });

    it('AeroCool Shard ARGB Mid Tower', () => {
        cy.get('.post-170 > .astra-shop-summary-wrap > .button').click({force: true})
        computers.pageActions.selectRamDropdown().select('16gb')
        computers.pageActions.selectStorageDropdown().select('512gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i3')
        computers.pageActions.clickCheckbox_1().eq(0).click()
        computers.pageActions.clickCheckbox_1().eq(4).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('1')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000)
        
    });

    it('Dell Optiplex 3060 Mini Tower Series Core', () => {
        cy.get('.post-159 > .astra-shop-summary-wrap > .button').click({force: true})
        computers.pageActions.selectRamDropdown().select('8gb')
        computers.pageActions.selectStorageDropdown().select('256gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i5')
        computers.pageActions.clickCheckbox_1().eq(0).click()
        computers.pageActions.clickCheckbox_1().eq(4).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('4')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000)
    });

    it('Dell Vostro 3670 Mini Tower Core', () => {
        cy.get('.post-156 > .astra-shop-summary-wrap > .button').click({force: true})
        computers.pageActions.selectRamDropdown().select('32gb')
        computers.pageActions.selectStorageDropdown().select('768gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i7')
        computers.pageActions.clickCheckbox_1().eq(0).click()
        computers.pageActions.clickCheckbox_1().eq(4).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('3')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000)
    });

    it('Gigabyte Aorus AC300W ATX Mid Tower', () => {
        cy.get('.post-166 > .astra-shop-summary-wrap > .button').click({force: true})
        computers.pageActions.selectRamDropdown().select('64gb')
        computers.pageActions.selectStorageDropdown().select('768gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i9')
        computers.pageActions.clickCheckbox_1().eq(0).click()
        computers.pageActions.clickCheckbox_1().eq(4).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('3')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000)
    });

    it('HP OMEN Tower PC Desktop Core', () => {
        cy.get('.post-162 > .astra-shop-summary-wrap > .button').click({force: true})
        computers.pageActions.selectRamDropdown().select('32gb')
        computers.pageActions.selectStorageDropdown().select('768gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i7')
        computers.pageActions.clickCheckbox_1().eq(0).click()
        computers.pageActions.clickCheckbox_1().eq(4).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('3')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000)
    });

    it('Mac pro 6 Core Machine', () => {
        cy.get('.post-2857 > .astra-shop-summary-wrap > .button').click({force: true})
        computers.pageActions.selectRamDropdown().select('32gb')
        computers.pageActions.selectStorageDropdown().select('768gb-ssd')
        computers.pageActions.selectProcessorDropdown().select('intel-core-i7')
        computers.pageActions.clickCheckbox_1().eq(0).click()
        computers.pageActions.clickCheckbox_1().eq(4).click()
        computers.pageActions.selectQuantityScrollBox().clear().type('3')
        computers.pageActions.clickAddToBasket().click({force: true})
        computers.pageActions.clickViewBasket().click()
        computers.pageActions.clickCheckOutButton().click()
        cy.checkout()
        cy.wait(7000) 
    });
    
});


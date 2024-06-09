
export class Computers {

    webSelectors = {

        mouseOverComputer: '#menu-item-2874 > [href="http://192.168.1.201/huboo-shop/product-category/computers/"]',
        clickDesktop:'#menu-item-2876 > a.menu-link',
        clickLaptop:'#menu-item-2875 > .menu-link',
        containAddTobasket:'Add to basket',
        ramDropdown:'#pa_ram',
        storageDropdown:'#pa_storage',
        processorDropdown:'#pa_processor',
        checkBox_1:'[type="radio"]',
        quantityScrollBox:'[name="quantity"]',
        addToBasket:'.single_add_to_cart_button',
        viewBasket:'.woocommerce-message > .button',
        checkOutButton:'.checkout-button'

    }

    pageActions = {

        clickMouseOverComputer: () => cy.get(this.webSelectors.mouseOverComputer),
        clickDesktop: () => cy.get(this.webSelectors.clickDesktop),
        clickLaptop: () => cy.get(this.webSelectors.clickLaptop),
        clickMouseOverComputer: () => cy.get(this.webSelectors.mouseOverComputer),
        containAaddTobasket: () => cy.contains(this.webSelectors.containAddTobasket),
        selectRamDropdown: () => cy.get(this.webSelectors.ramDropdown),
        selectStorageDropdown: () => cy.get(this.webSelectors.storageDropdown),
        selectProcessorDropdown: () => cy.get(this.webSelectors.processorDropdown),
        clickCheckbox_1: () => cy.get(this.webSelectors.checkBox_1),
        selectQuantityScrollBox: () => cy.get(this.webSelectors.quantityScrollBox),
        clickAddToBasket: () => cy.get(this.webSelectors.addToBasket),
        clickViewBasket: () => cy.get(this.webSelectors.viewBasket),
        clickCheckOutButton: () => cy.get(this.webSelectors.checkOutButton),
       
    }
}
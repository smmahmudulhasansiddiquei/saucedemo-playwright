import { BasePage } from './BasePage.js';

export class CheckoutPage extends BasePage {

    constructor(page) {

        super(page);

        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';
        this.continueBtn = '#continue';
        this.finishBtn = '#finish';
        this.completeHeader = '.complete-header';

    }

    async enterInformation(first, last, zip) {

        await this.fill(this.firstName, first);
        await this.fill(this.lastName, last);
        await this.fill(this.postalCode, zip);

    }

    async continueCheckout() {

        await this.click(this.continueBtn);

    }

    async finishOrder() {

        await this.click(this.finishBtn);

    }

    async completeCheckout(first, last, zip) {

        await this.enterInformation(first, last, zip);
        await this.continueCheckout();
        await this.finishOrder();

    }

    async successMessage() {

        return await this.getText(this.completeHeader);

    }
   

}
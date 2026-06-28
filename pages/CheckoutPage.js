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

   

}
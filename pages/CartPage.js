import { BasePage } from './BasePage.js';

export class CartPage extends BasePage {

    constructor(page) {

        super(page);

        this.checkout =  '#checkout';
        this.continueShopping ='#continue-shopping';
        this.removeBackpack = '#remove-sauce-labs-backpack';
        this.cartItems = '.cart_item';

    }

    async checkout() {

        await this.click(this.checkout);

    }

    async continueShopping() {

        await this.click(this.continueShopping);

    }

    async removeItem() {

        await this.click(this.removeBackpack);

    }

    async totalItems() {

        return await this.page.locator(this.cartItems).count();

    }

}
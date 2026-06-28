import { BasePage } from './BasePage.js';

export class InventoryPage extends BasePage {

    constructor(page) {

        super(page);

        this.title = '.title';

        this.cart = '.shopping_cart_link';
        this.addBackpack = '#add-to-cart-sauce-labs-backpack';
        this.addBike = '#add-to-cart-sauce-labs-bike-light';
        this.removeBackpack = '#remove-sauce-labs-backpack';
        this.sort = '.product_sort_container';
        this.items = '.inventory_item';
        this.menu = '#react-burger-menu-btn';
        this.logout = '#logout_sidebar_link';

    }

    async verifyLogin() {

        return await this.getText(this.title);

    }

    async addBackpackToCart() {

        await this.click(this.addBackpack);

    }

    async addBikeLight() {

        await this.click(this.addBike);

    }

    async openCart() {

        await this.click(this.cart);

    }

    async logout() {

        await this.click(this.menu);
        await this.page.waitForTimeout(1000);
        await this.click(this.logout);

    }

    async sortBy(value) {

        await this.page.selectOption(this.sort, value);

    }

    async totalProducts() {

        return await this.page.locator(this.items).count();

    }

}
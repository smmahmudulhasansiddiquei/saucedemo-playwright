import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
        this.error = '[data-test="error"]';

    }

    async open() {

        await this.goto('/');

    }

    async enterUsername(username) {

        await this.fill(this.username, username);

    }

    async enterPassword(password) {

        await this.fill(this.password, password);

    }

    async clickLogin() {

        await this.click(this.loginBtn);

    }

    async login(username, password) {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLogin();

    }

    async getErrorMessage() {

        return await this.getText(this.error);

    }

}
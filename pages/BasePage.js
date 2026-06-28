export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async goto(url = '') {
        await this.page.goto(url);
    }

    async click(locator) {
        await this.page.locator(locator).click();
    }

    async fill(locator, value) {
        await this.page.locator(locator).fill(value);
    }

    async type(locator, value) {
        await this.page.locator(locator).pressSequentially(value);
    }

    async getText(locator) {
        return await this.page.locator(locator).textContent();
    }

    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }

    async waitFor(locator) {
        await this.page.locator(locator).waitFor();
    }

    async getTitle() {
        return await this.page.title();
    }

    async currentUrl() {
        return this.page.url();
    }

    async screenshot(name) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }
}
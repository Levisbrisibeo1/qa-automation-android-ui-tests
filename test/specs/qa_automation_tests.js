const HomeScreen = require("../screenobjects/android/homescreen");

describe('QA-Automation V0.9 and v1.0', () => {
    it('the app home screen should have Click me button and label with text 0', async () => {
        await expect(HomeScreen.button).toExist();
        await expect(HomeScreen.buttonLabel).toHaveText("Click me");

        await expect(HomeScreen.labelText).toExist()
        await expect(HomeScreen.labelText).toHaveText('0')
    });

    it('should change 0 to 1 when button is clicked', async () => {
        await HomeScreen.button.click();
        await expect(HomeScreen.labelText).toHaveText('1');

    });

    it('should change 1 to 2 when button is clicked', async () => {
        await HomeScreen.button.click()
        await expect(HomeScreen.labelText).toHaveText('2')

    });

    it('should change 2 to MAX when button is clicked', async () => {
        await HomeScreen.button.click()
        await expect(HomeScreen.labelText).toHaveText('MAX')

    });

});

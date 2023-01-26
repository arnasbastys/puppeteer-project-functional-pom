import { baseUrl, disableAllBannersCookies, user } from "@constants";
import { loginPage, navigationBar, registrationPage } from "@pom";

describe("Registration", () => {
  beforeAll(async () => {
    await page.setCookie(...disableAllBannersCookies);
    await page.goto(`${baseUrl}/#/register`, { waitUntil: "domcontentloaded" });
  });

  it("User is able successfully register and login", async () => {
    await page.type(registrationPage.email, user.email);
    await page.type(registrationPage.password, user.password);
    await page.type(registrationPage.repeatPassword, user.password);
    await page.click(registrationPage.securityQuestion);
    const answer = await page.waitForSelector(
      `text/${registrationPage.securityQuestionMovie}`
    );
    if (answer) {
      await answer.click();
    }
    await page.type(registrationPage.securityAnswer, user.securityAnswer);
    await page.click(registrationPage.registerButton);
    await page.waitForNavigation();
    await page.type(loginPage.email, user.email);
    await page.type(loginPage.password, user.password);
    await page.click(loginPage.loginButton);
    await page.waitForNavigation();
    await page.click(navigationBar.account);
    const userEmail = await page.$eval(
      navigationBar.menuitem,
      (el) => el.textContent
    );
    expect(userEmail?.trim()).toEqual(user.email);
  });
});

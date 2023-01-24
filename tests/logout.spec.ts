import { baseUrl, disableAllBannersCookies } from "@constants";
import { navigationBar, createUserAndLoginTask } from "@pom";

describe("Logout", () => {
  beforeAll(async () => {
    await createUserAndLoginTask();
    await page.setCookie(...disableAllBannersCookies);
    await page.goto(`${baseUrl}/#/search`, { waitUntil: "domcontentloaded" });
  });

  it("User is able successfully login", async () => {
    const accountLoggedIn = await page.waitForSelector(navigationBar.account);
    await accountLoggedIn.click();
    const logoutMenuItem = await page.waitForSelector(navigationBar.logout);
    await page.waitForTimeout(200);
    await logoutMenuItem.click();
    await page.waitForTimeout(200);
    const accountLoggedOut = await page.waitForSelector(navigationBar.account);
    await accountLoggedOut.click();
    const loginButton = await page.waitForSelector(navigationBar.login);
    expect(loginButton).toBeTruthy();
  });
});

import { baseUrl } from "@constants";
import { loginPage, registerUserTask, User, navigationBar } from "@pom";

const cookiesToSet = [
  {
    name: "cookieconsent_status",
    value: "dismiss",
    url: baseUrl,
  },
  {
    name: "welcomebanner_status",
    value: "dismiss",
    url: baseUrl,
  },
];

describe("Login", () => {
  let registeredUser: User;

  beforeAll(async () => {
    registeredUser = await registerUserTask();
    await page.setCookie(...cookiesToSet);
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });
    await page.goto(`${baseUrl}/#/login`, { waitUntil: "domcontentloaded" });
  });

  it("User is able successfully login", async () => {
    await page.type(loginPage.email, registeredUser.email);
    await page.type(loginPage.password, registeredUser.password);
    await page.click(loginPage.loginButton);
    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    await page.click(navigationBar.account);
    const userEmail = await page.$eval(
      navigationBar.menuitem,
      (el) => el.textContent
    );
    expect(userEmail?.trim()).toEqual(registeredUser.email);
  });
});

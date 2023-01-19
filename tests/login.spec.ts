import { baseUrl } from "@constants";
import { loginPage, registerUserTask, User, navigationBar } from "@pom";

import puppeteer, { Protocol } from "puppeteer";

const cookiesToSet: Protocol.Network.CookieParam[] = [
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

describe("Login", async () => {
  let registeredUser: User;

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  beforeEach(async () => {
    registeredUser = await registerUserTask();

    await page.setCookie(...cookiesToSet);
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
    browser.close();
  });
});

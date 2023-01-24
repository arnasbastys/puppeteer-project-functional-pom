import { faker } from "@faker-js/faker";

export const baseUrl =
  process.env.docker_running === "true"
    ? `http://juice_shop_app:3000"`
    : `http://localhost:3000`;

export const user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  mobilePhone: faker.phone.number(),
  company: faker.company.name(),
  country: "Lithuania",
  securityAnswer: faker.lorem.word(),
  password: faker.internet.password(),
};

export const disableAllBannersCookies = [
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

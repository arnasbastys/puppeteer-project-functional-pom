import { faker } from "@faker-js/faker";

export const baseUrl = "http://localhost:3000";

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

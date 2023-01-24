import { baseUrl } from "@constants";
import axios from "axios";
import { registerUserTask } from "@pom";

export const createUserAndLoginTask = async () => {
  const registeredUser = await registerUserTask();

  const payload = {
    email: registeredUser.email,
    password: registeredUser.password,
  };

  const loginResponse = await axios.post(`${baseUrl}/rest/user/login`, payload);

  expect(loginResponse.status).toEqual(200);

  const token = loginResponse.data.authentication.token;

  await page.setCookie({
    name: "token",
    value: token,
    url: baseUrl,
  });

  await page.evaluateOnNewDocument((token) => {
    localStorage.setItem("token", token);
  }, token);
};

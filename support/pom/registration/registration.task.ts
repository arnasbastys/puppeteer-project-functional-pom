import { baseUrl, user } from "@constants";
import axios from "axios";

export const registerUserTask = async () => {
  const userData: User = {
    email: user.email,
    password: user.password,
    passwordRepeat: user.password,
    securityQuestion: {
      id: 12,
      question: "Your favorite movie?",
      createdAt: "2023-01-11T10:02:36.121Z",
      updatedAt: "2023-01-11T10:02:36.121Z",
    },
    securityAnswer: user.securityAnswer,
  };

  const userResponse = await axios.post(`${baseUrl}/api/Users/`, userData);

  expect(userResponse.status).toEqual(201);

  return userData;
};

export interface User {
  email: string;
  password: string;
  passwordRepeat: string;
  securityQuestion: SecurityQuestion;
  securityAnswer: string;
}

export interface SecurityQuestion {
  id: number;
  question: string;
  createdAt: string;
  updatedAt: string;
}

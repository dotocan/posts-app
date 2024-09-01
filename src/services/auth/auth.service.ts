const correctUsername = "user@test.com";
const correctPassword = "test";

let token: string | null = null;

export const checkToken = () => {
  return localStorage.getItem("token");
};

export const login = (username: string, password: string) => {
  if (username === correctUsername && password === correctPassword) {
    token = "mockToken";
    localStorage.setItem("token", token);
    return token;
  }

  return null;
};

export const logout = (): boolean => {
  let isSuccessful = true;

  localStorage.removeItem("token");
  token = null;

  return isSuccessful;
};

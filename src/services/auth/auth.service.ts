const correctUsername = "user@test.com";
const correctPassword = "test";

let token: string | null = null;

export const checkToken = () => {
  return token;
}

export const login = (username: string, password: string) => {
  if (username === correctUsername && password === correctPassword) {
    token = "mockToken";
    return token;
  }

  return null;
};

export const logout = (): boolean => {
  let isSuccessful = true;

  // Mock delete token in local storage
  token = null;

  return isSuccessful;
};

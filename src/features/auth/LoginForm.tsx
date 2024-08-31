import { Input } from "../../components/primitives/inputs/Input";
import { ChangeEvent, useState } from "react";
import { useAuth } from "./authProvider.tsx";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    auth?.signIn(username, password);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <Input label="Email address" onChange={handleUsernameChange} />
            <Input
              label="Password"
              type="password"
              onChange={handlePasswordChange}
            />

            <div>
              <button
                onClick={handleSignIn}
                type="submit"
                disabled={auth?.loading}
                className="text-white flex w-full justify-center rounded-md bg-martian-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-martian-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-martian-600"
              >
                Sign in
              </button>
            </div>
          </div>

          <h3>{auth?.error}</h3>

          <p className="mt-10 text-sm text-gray-500">
            email: <strong>user@test.com</strong>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            pw: <strong>test</strong>
          </p>
        </div>
      </div>
    </>
  );
};

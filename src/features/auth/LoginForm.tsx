import { Input } from "../../components/primitives/inputs/Input";
import { ChangeEvent, useState } from "react";
import { useAuth } from "./authProvider.tsx";
import { Heading2 } from "../../components/primitives/typography/Heading.tsx";
import { Button } from "../../components/primitives/buttons/Button.tsx";
import { BodyText } from "../../components/primitives/typography/BodyText.tsx";

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
          <Heading2 weight="bold" className="mt-10 text-cente">
            Sign in to your account
          </Heading2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <Input label="Email address" onChange={handleUsernameChange} />
            <Input
              label="Password"
              type="password"
              onChange={handlePasswordChange}
            />
            <Button
              text="Sign in"
              disabled={auth?.loading}
              onClick={handleSignIn}
            />
          </div>

          <BodyText color="danger">{auth?.error}</BodyText>

          <BodyText color="faded" className="mt-5">
            email: <span className="font-bold">user@test.com</span>
          </BodyText>
          <BodyText color="faded" className="mt-1 ">
            password: <span className="font-bold">test</span>
          </BodyText>
        </div>
      </div>
    </>
  );
};

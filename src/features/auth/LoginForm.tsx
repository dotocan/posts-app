import Input from "../../components/primitives/inputs/Input";
import { ChangeEvent, useState } from "react";
import { useAuth } from "./authProvider.tsx";
import Heading2 from "../../components/primitives/typography/Heading2.tsx";
import Button from "../../components/primitives/buttons/Button.tsx";
import BodyText from "../../components/primitives/typography/BodyText.tsx";
import { logMessage } from "../../shared/constants.ts";
import { withLogger } from "../../shared/loggerHoc.tsx";
import { MessageProps } from "../../shared/message.props.ts";

export const LoginForm = (_: MessageProps) => {
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
          <Heading2
            message={logMessage}
            weight="bold"
            className="mt-10 text-cente"
          >
            Sign in to your account
          </Heading2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <Input
              message={logMessage}
              label="Email address"
              onChange={handleUsernameChange}
            />
            <Input
              message={logMessage}
              label="Password"
              type="password"
              onChange={handlePasswordChange}
            />
            <Button
              message={logMessage}
              text="Sign in"
              disabled={auth?.loading}
              onClick={handleSignIn}
            />
          </div>

          <BodyText message={logMessage} color="danger">
            {auth?.error}
          </BodyText>

          <BodyText message={logMessage} color="faded" className="mt-5">
            email: <span className="font-bold">user@test.com</span>
          </BodyText>
          <BodyText message={logMessage} color="faded" className="mt-1 ">
            password: <span className="font-bold">test</span>
          </BodyText>
        </div>
      </div>
    </>
  );
};

export default withLogger(LoginForm);

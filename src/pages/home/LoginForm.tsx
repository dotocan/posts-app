import { Input } from "../../components/primitives/inputs/Input";

export const LoginForm = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <Input label="Email address" />
            <Input label="Password" type="password" />

            <div>
              <button
                type="submit"
                className="text-white flex w-full justify-center rounded-md bg-martian-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-martian-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-martian-600"
              >
                Sign in
              </button>
            </div>
          </form>

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

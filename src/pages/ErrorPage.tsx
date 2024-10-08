import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { MessageProps } from "../shared/message.props";
import { withLogger } from "../shared/loggerHoc";

export const ErrorPage = (_: MessageProps) => {
  let statusCode = "Oops!";
  let errorMessage = "Something went wrong";

  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    statusCode = error.status.toString();
    errorMessage = error.statusText;
  }

  return (
    <main
      id="error-page"
      className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="text-center">
        <p className="text-base font-semibold text-martian-600">{statusCode}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {errorMessage}
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-martian-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-martian-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-martian-600"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
};

export default withLogger(ErrorPage);

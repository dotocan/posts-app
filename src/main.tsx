import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import PostDetailsPage from "./pages/PostDetailsPage.tsx";
import ProtectedRoutes from "./ProtectedRoutes.tsx";
import RootLayout from "./RootLayout.tsx";
import { AuthProvider } from "./features/auth/authProvider.tsx";
import HomePage from "./pages/HomePage.tsx";
import PostsPage from "./pages/PostsPage.tsx";
import { logMessage } from "./shared/constants.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout message={logMessage} />,
    errorElement: <ErrorPage message={logMessage} />,
    children: [
      {
        path: "/",
        element: <HomePage message={logMessage} />,
      },
    ],
  },
  {
    element: <ProtectedRoutes message={logMessage} />,
    children: [
      { path: "app", element: <PostsPage message={logMessage} /> },
      { path: "posts/:id", element: <PostDetailsPage message={logMessage} /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);

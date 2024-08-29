import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage.tsx";
import { ErrorPage } from "./pages/error/ErrorPage.tsx";
import { PostsPage } from "./pages/posts/PostsPage.tsx";
import { PostDetailsPage } from "./pages/posts/PostDetailsPage.tsx";
import { AuthProvider } from "./providers/authProvider.tsx";
import { ProtectedRoutes } from "./ProtectedRoutes.tsx";
import { RootLayout } from "./RootLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // {
      //   path: "/app",
      //   element: <h1>dsa</h1>,
      //   //children: [{ element: <PostsPage /> }],
      // },
      // {
      //   path: "posts/:id",
      //   element: <ProtectedRoutes />,
      //   children: [{ element: <PostDetailsPage /> }],
      // },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      { path: "app", element: <PostsPage /> },
      { path: "posts/:id", element: <PostDetailsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

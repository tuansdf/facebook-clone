import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShouldAuth from "/src/features/auth/should-auth.layout";
import ShouldNotAuth from "/src/features/auth/should-not-auth.layout";
import AuthPage from "/src/pages/auth/auth.page";
import IndexLayout from "/src/pages/index.layout";
import IndexPage from "/src/pages/index.page";

const router = createBrowserRouter([
  {
    path: "auth/",
    element: <ShouldNotAuth />,
    children: [{ index: true, element: <AuthPage /> }],
  },
  {
    path: "*",
    element: <ShouldAuth />,
    children: [
      {
        path: "*",
        element: <IndexLayout />,
        children: [{ index: true, element: <IndexPage /> }],
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

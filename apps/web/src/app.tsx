import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShouldAuth from "/src/features/auth/should-auth.layout";
import ShouldNotAuth from "/src/features/auth/should-not-auth.layout";
import AuthPage from "/src/pages/auth/auth.page";
import HomeLayout from "/src/pages/home.layout";
import HomePage from "/src/pages/home.page";

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
        element: <HomeLayout />,
        children: [{ index: true, element: <HomePage /> }],
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

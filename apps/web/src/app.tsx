import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShouldAuth from "/src/features/auth/should-auth.layout";
import ShouldNotAuth from "/src/features/auth/should-not-auth.layout";
import AuthPage from "/src/pages/auth/auth.page";

const router = createBrowserRouter([
  {
    path: "auth/",
    element: <ShouldNotAuth />,
    children: [{ element: <AuthPage /> }],
  },
  {
    element: <ShouldAuth />,
    children: [{ path: "/", element: <div>Home</div> }],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

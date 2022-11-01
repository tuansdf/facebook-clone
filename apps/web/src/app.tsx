import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckAuth from "/src/features/auth/check-auth.layout";
import LoginPage from "/src/pages/login/login.page";

const router = createBrowserRouter([
  { path: "login", element: <LoginPage /> },
  {
    element: <CheckAuth />,
    children: [{ path: "/", element: <div>Home</div> }],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

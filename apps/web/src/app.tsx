import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "/src/pages/login/login.page";

const router = createBrowserRouter([{ path: "login", element: <LoginPage /> }]);

export function App() {
  return <RouterProvider router={router} />;
}

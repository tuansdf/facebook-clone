import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "/src/features/auth/auth.store";

export default function ShouldNotAuth() {
  const isNotAuth = useAuthStore((state) => !state.user?.accessToken);

  return isNotAuth ? <Outlet /> : <Navigate to="/" />;
}

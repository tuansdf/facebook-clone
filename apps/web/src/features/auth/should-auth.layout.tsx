import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "/src/features/auth/auth.store";

export default function ShouldAuth() {
  const isAuth = useAuthStore((state) => !!state.user?.accessToken);

  return isAuth ? <Outlet /> : <Navigate to="/auth" />;
}

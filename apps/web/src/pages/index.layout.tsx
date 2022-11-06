import { Outlet } from "react-router-dom";
import Header from "/src/features/layouts/header";

export default function IndexLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

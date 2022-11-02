import { Outlet } from "react-router-dom";
import Header from "/src/features/layouts/header";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

import { Outlet } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";

export default function Layout() {
  return (
    <>
      <Hero />
      <Categories />
      <Outlet />
    </>
  );
}

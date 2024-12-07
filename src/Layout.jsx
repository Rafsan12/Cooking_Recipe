import { Outlet } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Kitchen from "./components/Kitchen/Kitchen";
import Recipes from "./components/Recipes_Card/Recipes";
import Subscribe from "./components/Subscribe/Subscribe";

export default function Layout() {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
      <Kitchen />
      <Subscribe />
      <Footer />
      <Outlet />
    </>
  );
}

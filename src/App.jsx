import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RecipeDetails from "./components/Recipes_Card/RecipeDetails";
import Layout from "./Layout";
import Blogs from "./pages/Blog/Blogs";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

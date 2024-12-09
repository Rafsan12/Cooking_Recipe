import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RecipeDetails from "./components/Recipes_Card/RecipeDetails";
import Layout from "./Layout";
import BlogDetails from "./pages/Blog/BlogDetails";
import Blogs from "./pages/Blog/Blogs";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <Blogs />
            </PrivateRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/recipe/:id"
          element={
            <PrivateRoute>
              <RecipeDetails />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

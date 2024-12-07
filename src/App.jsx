import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./Layout";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="" element={<Layout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

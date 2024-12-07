import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;

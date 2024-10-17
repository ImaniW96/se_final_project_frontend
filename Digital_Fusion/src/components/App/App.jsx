import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Community from "../Community/Community";
import Technews from "../Technews/Technews";
import Mentor from "../Mentor/Mentor";
import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/technews" element={<Technews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

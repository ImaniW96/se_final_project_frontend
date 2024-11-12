import "./App.css";
import { Routes, Route } from "react-router-dom";
import Community from "../Community/Community";
import Technews from "../Technews/Technews";
import Mentor from "../Mentor/Mentor";
import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/technews" element={<Technews />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;

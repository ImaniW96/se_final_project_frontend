import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Community from "../Community/Community";
import Technews from "../Technews/Technews";
import Mentor from "../Mentor/Mentor";
import { Main } from "../Main/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/technews" element={<Technews />} />
      </Routes>
    </Router>
  );
}

export default App;

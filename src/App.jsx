import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cookies from "js-cookie";
import { useState } from "react";

//Pages

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Composants

import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="offers/:id" element={<Offer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup setToken={setToken} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

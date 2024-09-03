import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cookies from "js-cookie";
import { useState } from "react";

//Pages

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Announce from "./pages/Annouce";
import Payment from "./pages/Payment";

// Composants

import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token"));
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  return (
    <>
      <Router>
        <Header
          setInput={setInput}
          isConnected={isConnected}
          setIsConnected={setIsConnected}
        />
        <Routes>
          <Route path="/" element={<Home input={input} token={token} />} />
          <Route path="offers/:id" element={<Offer />} />
          <Route
            path="/login"
            element={
              <Login
                setToken={setToken}
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route path="/signup" element={<Signup setToken={setToken} />} />
          <Route path="/offers?:query" element={<Search />} />
          <Route path="/announce" element={<Announce token={token} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

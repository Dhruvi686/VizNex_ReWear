import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import BrowseItem from "./components/BrowseItem";
import FindNGOs from "./components/FindNGOs";
import ListNewItem from "./components/ListNewItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/browse" element={<BrowseItem />} />
        <Route path="/find-ngos" element={<FindNGOs />} />
        <Route path="/list-new-item" element={<ListNewItem />} />
      </Routes>
    </Router>
  );
}

export default App;

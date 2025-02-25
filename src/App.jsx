import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Trang chủ */}
        <Route path="/admin/*" element={<Admin />} /> {/* Trang Admin */}
        <Route path="*" element={<NotFound />} /> {/* Trang 404 */}
      </Routes>
    </Router>
  );
};

export default App;

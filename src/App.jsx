import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import usePageTracking from "./hooks/usePageTracking";

const App = () => {

  return (
    <Router>
       <TrackingWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

const TrackingWrapper = () => {
  usePageTracking();
  return null;
};
export default App;

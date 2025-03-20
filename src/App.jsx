import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import usePageTracking from "./Usetracing";
// Initialize Google Analytics
ReactGA.initialize("G-KWD41R4GJM");

// Custom Hook for Page Views


const Home = () => {
  usePageTracking();

  const handleButtonClick = () => {
    ReactGA.event({
      category: "User Actions",
      action: "Clicked Home Button",
      label: "Home Page Button"
    });
    console.log("Home Button Click Event Sent!");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleButtonClick}>Click Me</button>
      <br /><Link to="/contact">Go to Contact</Link>
    </div>
  );
};


const Contact = () => {
  usePageTracking();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "Form",
      action: "Submitted Contact Form",
      label: "Contact Page Form"
    });
    console.log("Form Submission Event Sent!");
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter your name" required />
        <button type="submit">Submit</button>
      </form>
      <br /><Link to="/about">Go to About</Link>
    </div>
  );
};

const About = () => {
  usePageTracking();

  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const endTime = Date.now();
      const timeSpent = (endTime - startTime) / 1000;
      ReactGA.event({
        category: "User Engagement",
        action: "Time Spent on About Page",
        value: Math.round(timeSpent)
      });
      console.log("Time Spent on About Page:", Math.round(timeSpent), "seconds");
    };
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

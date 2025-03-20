import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import usePageTracking from "../hooks/usePageTracking";

const Home = () => {
//   usePageTracking(); // Page tracking automatically

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

export default Home;

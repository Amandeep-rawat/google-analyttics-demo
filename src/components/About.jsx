import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import usePageTracking from "../hooks/usePageTracking";

const About = () => {
//   usePageTracking(); // Page tracking automatically

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

export default About;

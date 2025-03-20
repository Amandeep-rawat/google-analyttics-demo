import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import usePageTracking from "../hooks/usePageTracking";

const Contact = () => {
//   usePageTracking(); // Page tracking automatically

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

export default Contact;

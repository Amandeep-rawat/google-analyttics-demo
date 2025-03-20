import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// Initialize Google Analytics once
ReactGA.initialize("G-KWD41R4GJM");

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
    console.log("Page View Tracked:", location.pathname);
  }, [location]);
};

export default usePageTracking;

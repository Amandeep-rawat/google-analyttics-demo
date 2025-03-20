
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
const usePageTracking = () => {
    const location = useLocation();
  
    useEffect(() => {
      ReactGA.send("pageview");
      console.log("Page View Tracked: ", location.pathname);
    }, [location]);
  };

  export default usePageTracking
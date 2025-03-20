import { useState, useEffect } from "react";
import ReactGA from "react-ga4";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    ReactGA.initialize("G-KWD41R4GJM"); // Apna Measurement ID yaha paste karo
    ReactGA.send("pageview"); // Page load hone pe track karega
  }, []); // Empty dependency array means sirf ek baar chalega

  return (
    <>
      <div>
        Hello, how are you?
      </div>
    </>
  );
}

export default App;

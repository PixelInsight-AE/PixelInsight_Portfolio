import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CookieConsent
          loaction="bottom"
          style={{
            background:
              "linear-gradient(91deg,rgba(40,35,59,0.85) 0%, rgba(21,15,47,0.75)100%)",
            fontSize: "16px",
            textAlign: "left",
          }}
          buttonStyle={{
            background: "#f2446e",
            color: "#fff",
            fontSize: "16px",
            borderRadius: "5px",
          }}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

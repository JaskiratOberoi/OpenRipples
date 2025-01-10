import React from "react";
import "./styles.scss";

import howItWorks from "../assets/how-it-works.svg";
import Title from "../components/Title/Title";

function ExtendedFooter() {
  const url = "https://calendly.com/hi-openripples";
  const url2 = "mailto:hi@openripples.com";

  return (
    <div className="extended-footer">
      <img
        src={howItWorks}
        alt="how it works"
        className="hiw-img"
        onClick={() => window.open(url, "_blank")} 
      />

    <div className="build-footer">
      <Title content="Build your product from our trusted service today." />
      <div className="cta-footer">
        <button onClick={() => window.open(url, "_blank")} >
          Schedule a call</button>
          <button onClick={() => window.open(url2, "_blank")} >
            Send Email
          </button>
      </div>
    </div>
      
    </div>
  );
}

export default ExtendedFooter;

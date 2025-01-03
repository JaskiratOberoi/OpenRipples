import React from "react";
import "./pages.scss";

import howItWorks from "../assets/how-it-works.svg";

function ExtendedFooter() {
  const url = "https://calendly.com/hi-openripples";

  return (
    <div className="extended-footer">
      <img
        src={howItWorks}
        alt="how it works"
        className="hiw-img"
        onClick={() => window.open(url, "_blank")}
      />
    </div>
  );
}

export default ExtendedFooter;

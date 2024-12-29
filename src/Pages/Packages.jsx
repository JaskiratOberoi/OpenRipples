import React from "react";

import "./pages.scss";
import Title from "../components/Title/Title";

import packages from "../assets/packages.svg";

function Packages() {
  return (
    <div className="packages">
      <Title content="Expert package for every budget" />
      <img src={packages} alt="packages cards" className="packages-grid" />
      <div className="packages-content">
        OpenRipples reflects our mission to create impactful digital products
        that help your business grow, spreading success one ripple at a time.
      </div>
    </div>
  );
}

export default Packages;

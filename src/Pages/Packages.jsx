import React from "react";

import "./styles.scss";
import Title from "../components/Title/Title";

// import packages from "../assets/packages.svg";

import ux from "../assets/PackageCard/expertux.svg";
import team from "../assets/PackageCard/expertteam.svg";
import dev from "../assets/PackageCard/expertdev.svg";
import mvp from "../assets/PackageCard/expertmvp.svg";


function Packages() {
  return (
    <div className="packages">
      <Title content="Expert package for every budget" />
      <div className="packages-cards">
        <img src={ux} alt="packages cards" className="packages-grid" />
        <img src={team} alt="packages cards" className="packages-grid" />
        <img src={dev} alt="packages cards" className="packages-grid" />
        <img src={mvp} alt="packages cards" className="packages-grid" />
      </div>
      
      <div className="packages-content">
        OpenRipples reflects our mission to create impactful digital products
        that help your business grow, spreading success one ripple at a time.
      </div>
    </div>
  );
}

export default Packages;

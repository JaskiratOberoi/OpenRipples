import React from "react";

import textLogo from "../../assets/OpenRipples.svg";

import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar-header">
      <img src={textLogo} alt="Open Ripples compnay full logo svg" />
    </div>
  );
}

export default Navbar;

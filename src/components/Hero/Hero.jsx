import React from "react";

import "./hero.scss";

// import heroImage from "../../asset/hero-image.svg";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <div className="hero-text--title">
          Your digital product, designed and built, without hiring a team.
        </div>
        <div className="hero-text--content">
          Building a digital product shouldn’t mean building a team. We offer
          tailored design and development services for web, desktop, and mobile,
          delivered on a monthly subscription for ultimate flexibility.
        </div>
        <div className="hero-text--cta">
          <button>Schedule a Call</button>
        </div>
      </div>
      <div className="hero-image">{/* <img src={heroImage} /> */}</div>
    </div>
  );
}

export default Hero;

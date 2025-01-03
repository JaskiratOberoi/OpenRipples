import React from "react";

import "./hero.scss";
import Title from "../Title/Title";

import heroImage from "../../assets/hero-image.svg";
import amazon from "../../assets/amazon long.svg";
import yComb from "../../assets/ycombinator-ar21.svg";
import ust from "../../assets/ust-global-vector-logo-2022.svg";
import jpmc from "../../assets/JP Morgan Chase Logo 1.svg";
import dell from "../../assets/Dell Logo.svg";

function Hero() {
  const url = "https://calendly.com/hi-openripples";
  return (
    <div className="hero-section">
      <div className="hero-text">
        <Title content="Your digital product, designed and built, without hiring a team." />
        <div className="hero-text--content">
          Building a digital product shouldn’t mean building a team. We offer
          tailored design and development services for web, desktop, and mobile,
          delivered on a monthly subscription for ultimate flexibility.
        </div>
        <div className="hero-text--cta">
          <button onClick={() => window.open(url, "_blank")}>
            Schedule a Call
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="hero " />
      </div>
      <div className="hero-logos">
        <img src={amazon} className="amazon" alt="client company " />
        <img src={yComb} className="y-comb" alt="client company " />
        <img src={ust} className="ust" alt="client company " />
        <img src={jpmc} className="jpmc" alt="client company " />
        <img src={dell} className="dell" alt="client company " />
      </div>
      <div className="hero-byline">
        Experienced with Leading Companies and Initiatives in USA, Europe and
        APAC.
      </div>
    </div>
  );
}

export default Hero;

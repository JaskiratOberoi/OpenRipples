import React from "react";
import Title from "../components/Title/Title";

import mktCmp from "../assets/market-comparison-card.svg";
import sbs from "../assets/sbs.svg";

import "./pages.scss";
import AdvGrid from "../components/AdvGrid/AdvGrid";

import { advGridContent } from "../data/advantageGrid";

function MarketComparison() {
  const url = "https://calendly.com/hi-openripples";
  return (
    <div className="mkt-cmp">
      <Title content="Revolutionizing Cost Without Compromising Quality" />
      <img
        src={mktCmp}
        alt="market comparison chart"
        onClick={() => window.open(url, "_blank")}
      />

      <AdvGrid gridContent={advGridContent} className="mkt-grid" />
      <Title content="Side by side, it’s an easy choice" className="t3" />
      <img src={sbs} alt="side by side" className="side-by-side" />
    </div>
  );
}

export default MarketComparison;

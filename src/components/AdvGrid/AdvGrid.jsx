import React from "react";

import GridCard from "./GridCard/GridCard";

import "../../Pages/pages.scss";

function AdvGrid(props) {
  return (
    <div className="adv-grid">
      {props.gridContent.map((data) => (
        <GridCard image={data.img} title={data.title} content={data.content} />
      ))}
    </div>
  );
}

export default AdvGrid;

import React from "react";

function GridCard(props) {
  return (
    <div className="grid-card">
      <img src={props.image} />
      <div className="grid-card--title">{props.title}</div>
      <div className="grid-card--content">{props.content}</div>
    </div>
  );
}

export default GridCard;

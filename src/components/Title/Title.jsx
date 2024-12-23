import React from "react";
import "./title.scss";

function Title(props) {
  return (
    <div className="title-text">
      <div className="text--title">{props.content}</div>
    </div>
  );
}

export default Title;

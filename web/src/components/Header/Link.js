import React from "react";
import "./index.css";

function Link(props) {
  return (
    <a href={props.href}>
      <div className='link-button'>{props.text}</div>
    </a>
  );
}

export default Link;

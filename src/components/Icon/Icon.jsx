import React from "react";
import "./Icon.css";
const Icon = ({ src, link }) => {
  return (
    <div className="icon-container">
      <a href={link} className={"icon"} target="_blank">
        <img width="100%" src={src} />
      </a>
    </div>
  );
};

export default Icon;

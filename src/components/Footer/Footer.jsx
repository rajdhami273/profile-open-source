import React from "react";
import "./Footer.css";
import Icon from "../Icon/Icon";
const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        Made with <Icon src="assets/media/love.png" link={""} /> free for all.
        {/* by Me! */}
      </div>
    </div>
  );
};

export default Footer;

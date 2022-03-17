import React from "react";
import '../style.css';

const Footer = () => (
  <div>
    <p className="footer">
      <a href="https://www.linkedin.com/in/justin-greer1/" target="_blank">
        Justin Greer
      </a>{" "}
      —{" "}
      <a href="https://github.com/justin-tg/MVP---Rocket-League-Postgame" target="_blank">
        Source
      </a>{" "}
      — This product uses the{" "}
      <a
        href="https://ballchasing.com/"
        target="_blank"
      >
        Ballchasing API
      </a>{" "}
      but is not endorsed or certified by Ballchasing.
    </p>
  </div>
);

export default Footer;
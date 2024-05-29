import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p className="footer-text">
        This website is a personal portfolio project and is not affiliated with,
        endorsed by, or sponsored by Burger King Corporation.
      </p>
      <a
        href="https://www.bk.com/trademarks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Burger King Corporation Trademarks,
      </a>
      <p className="footer-text">
        and others, are used here for informational purposes only.
      </p>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1 className="footer-house">Houses</h1>
        <div className="line-two">
          <p className="line-two-of">OF THE </p>
          <p className="line-two-world">World</p>
        </div>
      </div>

      <div className="right">
        <h1>shop</h1>
        <h1>About</h1>
        <h1>Keep Updated</h1>
        <h1>Credits</h1>
        <h1>Terms</h1>
        <div>
          <img src="/vector/instagram.svg" />
          <h1>Instagram</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <h1 className="footer-house">Houses</h1>
        <div className="line-two">
          <p className="line-two-of">OF THE </p>
          <p className="line-two-world">World</p>
        </div>
      </div>

      <div className="right">
        <a>Shop</a>
        <a>About</a>
        <a>Keep Updated</a>
        <a>Credits</a>
        <a>Terms</a>
        <a className="flex gap-2 icon">
          <img src="/vectors/instagram.svg" />
          <h1>Instagram</h1>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

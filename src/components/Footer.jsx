import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h3 style={{ color: "gray", fontSize: "14px", marginLeft: "18px" }}>
        India
      </h3>
      <hr />
      <div className="footer-list">
        <li>About</li> <li>Advertising</li> <li>Bussiness</li> <li>Investor</li>{" "}
        <li>Hiring</li>
      </div>
    </div>
  );
};
export default Footer;

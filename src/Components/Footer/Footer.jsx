import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="upper">
          <div className="links">
            <h4>Quick Links</h4>
            <Link to="/courses">Courses</Link>
            <Link to="/">Services</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="links">
            <h4>Connect With Us</h4>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Linkedin</Link>
          </div>
          <div className="footer-content">
            <h4>About us</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti harum dolorem mus alias. Ullam consequuntur natusdfdfg qui sunt!</p>
          </div>
          <div className="footer-content">
            <h4>Contact</h4>
            <p>Mughal Emperor Aurangzeb Maqbara Road, Hamal Wadi, Khuldabad, Maharashtra, India</p>
          </div>
        </div>
        <div className="lower">
          <div className="branding">
            <p>
              {" "}
              <span className="brand-name">Codeango</span> &copy; All Rights Reserved 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

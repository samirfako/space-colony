import React from "react";
import "./Navbar.scss";
import logoImg from "../../assets/images/group-18.png";

const Navbar = () => {
  return (
    <>
      <div className="logo-box">
        <header>
          <h1 className="logo">
            <img className="logo-img" src={logoImg} />
            Space Colony
          </h1>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <a href="/">Space Colony</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
          <label for="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </header>
      </div>
    </>
  );
};

export default Navbar;

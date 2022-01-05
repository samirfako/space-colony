import React from "react";
import "./Footer.scss";
import FooterIcon from "../../assets/images/group-18.png";
import FooterColorIcon from "../../assets/images/space-colony-website-illustrations-02@3x.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div id="mobile">
          <div className="space-icon-mobile">
            <img src={FooterIcon} alt="icon" />
          </div>

          <div className="space-mail-mobile">
            <a href="/">info@spacecolony.uk</a>
          </div>
          <div className="space-social-mobile">
            <FaFacebookF className="facebook-mobile" />
            <BsTwitter className="twitter-mobile" />
            <BsInstagram className="instagram-mobile" />
          </div>
          <div className="space-copyright-mobile">
            ©Space colony 2021- All Right Reserved
          </div>
        </div>
        <div id="desktop">
          <div className="footer-navbar">
            <div className="space-icon-desktop">
              <img src={FooterColorIcon} />
            </div>
            <ul className="footer-nav">
              <li>
                <a>Space colony</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a> Blog</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="footer-info">
            <div className="space-mail-desktop">
              <a href="/">info@spacecolony.uk</a>
            </div>
            <div className="space-copyright-desktop">
              ©Space colony 2021- All Right Reserved
            </div>
            <div className="space-social-desktop">
              <FaFacebookF className="facebook-desktop" />
              <BsTwitter className="twitter-desktop" />
              <BsInstagram className="instagram-desktop" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

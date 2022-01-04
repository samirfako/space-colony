import React from "react";
import "./Footer.scss";
import FooterIcon from "../../assets/images/group-18.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="mobile">
          <div className="space-icon-mobile">
            <img src={FooterIcon} alt="icon" />
          </div>

          <div className="space-mail-mobile">
            <a>info@spacecolony.uk</a>
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
        <div className="desktop">
          <div className="space-icon-desktop"></div>
          <div className="space-mail-desktop">
            <a>info@spacecolony.uk</a>
          </div>
          <div className="space-social-desktop"></div>
          <div className="space-copyright-desktop">
            ©Space colony 2021- All Right Reserved
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

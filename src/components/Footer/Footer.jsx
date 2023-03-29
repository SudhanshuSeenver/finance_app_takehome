import React from "react";
import styles from "./Footer.module.css";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import { BsGoogle } from "react-icons/bs";
import { SiFramer } from "react-icons/si";
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";
// import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.logo_links}>
        <div className={styles.logo_name}>
          <img src={require("../../assets/logo.png")} alt="logo" />
          <p>Finance App</p>
        </div>
        <Navigation />
      </div>
      <div className={styles.social_cont}>
        <Button className={styles.icons_btn_social}>
          <BsGoogle className={styles.icon_social} />
        </Button>
        <Button className={styles.icons_btn_social}>
          <SiFramer className={styles.icon_social} />
        </Button>
        <Button className={styles.icons_btn_social}>
          <IoLogoWhatsapp className={styles.icon_social} />
        </Button>
        <Button className={styles.icons_btn_social}>
          <FaFacebookSquare className={styles.icon_social} />
        </Button>
        <Button className={styles.icons_btn_social}>
          <IoLogoYoutube className={styles.icon_social} />
        </Button>
      </div>
    </div>
  );
}

export default Footer;

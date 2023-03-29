import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo_links}>
        <div className={styles.logo_name}>
          <img src={require("../../assets/logo.png")} alt="logo" />
          <p>Finance App</p>
        </div>
        <Navigation />
      </div>
      <Button primary>Download Now</Button>
    </div>
  );
}

export default Navbar;

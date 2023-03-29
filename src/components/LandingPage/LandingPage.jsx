import React from "react";
import Button from "../Button/Button";
import Reviewer from "../Reviewer/Reviewer";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h2 className={styles.heading}> Save money fast from app. </h2>
          <p className={styles.desc}>
            Transfer business money easily through finance app without any
            hassle. This app can help you control.
          </p>
          <Button className={styles.btn_check_feat} primary>
            Check our features
          </Button>
          <blockquote className={styles.user_review}>
            “Transfer business money easily through finance app without any
            hassle. This app can help you control.Transfer business money easily
            through finance ”
          </blockquote>
          <Reviewer userName={"Darika Samak"} fromWhere={"From amazon.com"} />
        </div>
        <div className={styles.hero_image_container}>
          <div className={styles.hero_Imgbg}>
            <img
              className={styles.hero_img}
              src={require("../../assets/hero_img.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

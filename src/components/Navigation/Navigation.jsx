import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div>
      <ul className={`${styles.nav_linklist}`}>
        <li className={`${styles.nav_linklist_item}`}>
          <a href="#app">Demos</a>
        </li>
        <li className={`${styles.nav_linklist_item}`}>
          <a href="#app">About</a>
        </li>
        <li className={`${styles.nav_linklist_item}`}>
          <a href="#app">Blog</a>
        </li>
        <li className={`${styles.nav_linklist_item}`}>
          <a href="#app">Pages</a>
        </li>
        <li className={`${styles.nav_linklist_item}`}>
          <a href="#app">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

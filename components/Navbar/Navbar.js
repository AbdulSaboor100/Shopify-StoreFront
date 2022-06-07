import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_head}>
        <h4>
          <span>M</span>elfi<span>x</span>el
        </h4>
      </div>
      <div className={styles.navbar_links}>
        <p>Home</p>
        <p>Contact Us</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Navbar;

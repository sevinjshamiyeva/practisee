import React from "react";
import { Link, Outlet } from "react-router-dom";
// import styles from "./style.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// import FacebookIcon from '@mui/icons-material/Facebook';

function Navbar() {
  return (
    <>
      {/* <header>
        <div className={styles.container}>
          <div className={styles.icon}>
            <div className={styles.facebook}>
            <svg data-testid="FacebookIcon" className={styles.FacebookIcon}></svg>
            </div>
            <div className={styles.twitter}>
            </div>
            <div className={styles.instagram}></div>
            <div className={styles.linkedIn}></div>
          </div>
          <div className={styles.contact}>
            <span></span>
            <span></span>
          </div>
        </div>
      </header> */}

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addProducts">addProducts</Link>
        </li>
        <li>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;

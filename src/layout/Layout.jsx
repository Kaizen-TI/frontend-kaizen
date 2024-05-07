import React from "react";
import styles from "../index.css";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

function Layout({ Children }) {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div
          className={`${styles.paddingX} ${styles.flexCenter} z-50 fixed w-full top-0 left-0`}
        >
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        {Children}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

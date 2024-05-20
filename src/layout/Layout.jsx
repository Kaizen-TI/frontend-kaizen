import React from "react";
import styles from "../index.css";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

function Layout({ Children }) {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>{Children}</div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;

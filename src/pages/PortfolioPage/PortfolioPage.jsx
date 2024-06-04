import React from "react";
import { CardGallery, Footer } from "../../components";
import styles from "../../style";

function PortfolioPage() {
  return (
    <div>
      <div
        className={`bg-primary mt-20  w-full ${styles.paddingY} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <CardGallery />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PortfolioPage;

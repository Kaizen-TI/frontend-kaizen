import React from "react";
import styles from "../../index.css";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  Contact,
  CTA,
  Footer,
  Hero,
  Stats,
  Testimonials,
  WhatsAppBtn,
} from "../../components";
import Layout from "../../layout/Layout";

function HomePage() {
  return (
      <div className="bg-white w-full overflow-hidden">
        <div className={` ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            {/* <Testimonials /> */}
            <Clients />
            <CTA />
            <Contact />
            <Footer />
          </div>
          <div className="relative">
            <WhatsAppBtn />
          </div>
        </div>
      </div>
  );
}

export default HomePage;

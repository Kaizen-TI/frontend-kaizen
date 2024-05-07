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

function Home() {
  return (
      <div className="bg-primary w-full overflow-hidden">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
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

export default Home;

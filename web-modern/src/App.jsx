import React from "react";
import styles from "./styles";
import { Navbar, Billing, Business, Button, CTA, CardDeal, Clients, FeedbackCard, Footer, GetStarted, Hero, Stats } from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Billing/>
        <Business/>
        <Button/>
        <CTA/>
        <CardDeal/>
        <Clients/>
        <FeedbackCard/>
        <GetStarted/>
        <Stats/>
        <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;

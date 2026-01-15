import React from "react";
import { heroStyles } from "../assets/dummyStyles";

const Hero = () => {
  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.bgElement1}></div>
      <div className={heroStyles.bgElement2}></div>
      <div className={heroStyles.bgElement3}></div>

      <div className={heroStyles.gridPattern}></div>
      <div className={heroStyles.container}>
        <div className={heroStyles.grid} >
          <div className={heroStyles.content}>
            <div className={heroStyles.containerInner}>
              <div className={heroStyles.badge}>
                <div className={heroStyles.badgeDot}></div>
                <span className={heroStyles.badgeText}>
                    AI-Powered Invoicing Platform 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

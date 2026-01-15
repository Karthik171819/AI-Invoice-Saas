import React from "react";
import { heroStyles } from "../assets/dummyStyles";
import { useNavigate } from "react-router-dom";
import { useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";

const Hero = () => {
  const navigate = useNavigate();
  const clerk = useClerk();

  const handleSignedInPrimary = () => {
    navigate("/app/create-invoice");
  };

  const handleSignedOutPrimary = () => {
    try {
      if (clerk && typeof clerk.openSignUp === "function") {
        clerk.openSignUp();
      }
    } catch (err) {
      console.error("failed to open clerk signup model", err);
    }
  };
  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.bgElement1}></div>
      <div className={heroStyles.bgElement2}></div>
      <div className={heroStyles.bgElement3}></div>

      <div className={heroStyles.gridPattern}></div>
      <div className={heroStyles.container}>
        <div className={heroStyles.grid}>
          <div className={heroStyles.content}>
            <div className={heroStyles.containerInner}>
              <div className={heroStyles.badge}>
                <div className={heroStyles.badgeDot}></div>
                <span className={heroStyles.badgeText}>
                  AI-Powered Invoicing Platform
                </span>
              </div>
              {/* main heading */}
              <h1 className={heroStyles.heading}>
                <span className={heroStyles.headingLine1}>Profesional</span>
                <br />
                <span className={heroStyles.headingLine2}>Invoices</span>
                <br />
                <span className={heroStyles.headingLine3}>in Seconds</span>
                <br />
              </h1>
              {/* Description */}
              <p className={heroStyles.description}>
                Transform conversations into professional invoices with AI.{" "}
                <span className={heroStyles.descriptionHighlight}>
                  Paste any text
                </span>{" "}
                and watch AI extract items, calculate totals, and generate
                ready-to-send invoices instantly.
              </p>
            </div>
            {/* CTA Btn */}
            <div className={heroStyles.ctaContainer}>
              <SignedIn>
                <button
                  type="button"
                  onClick={handleSignedInPrimary}
                  className={heroStyles.primaryButton}
                >
                  <div className={heroStyles.primaryButtonOverlay}></div>
                  <span className={heroStyles.primaryButtonText}>
                    Start Creating Free
                  </span>
                  <svg
                    className={heroStyles.primaryButtonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </SignedIn>

              <SignedOut>
                <button
                  type="button"
                  onClick={handleSignedOutPrimary}
                  className={heroStyles.primaryButton}
                >
                  <div className={heroStyles.primaryButtonOverlay}></div>
                  <span className={heroStyles.primaryButtonText}>
                    Start Creating Free
                  </span>
                  <svg
                    className={heroStyles.primaryButtonIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </SignedOut>

              <a href="#features" className={heroStyles.secondaryButton}>
                <span>Explore Features</span>
                <svg
                  className={heroStyles.secondaryButtonIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* Features highlights */}
            <div className={heroStyles.featuresGrid}>
                {[
                { icon: "🤖", label: "AI-Powered", desc: "Smart text parsing" },
                {
                  icon: "⚡",
                  label: "Lightning Fast",
                  desc: "Generate in seconds",
                },
                {
                  icon: "🎨",
                  label: "Professional",
                  desc: "Branded templates",
                },
              ].map((feature, index) => (
                  <div key={index} className={heroStyles.featureItem}>
                    <div className={heroStyles.featureIcon}>{feature.icon}</div>
                    <div className={heroStyles.featureText}>
                      <div className={heroStyles.featureLabel}>
                        {feature.label}
                      </div>
                      <div className={heroStyles.featureDesc}></div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          {/* Right side */}
          <div className={heroStyles.demoColumn}>
            <div className={heroStyles.demoFloating1}></div>
            <div className={heroStyles.demoFloating2}></div>

            <div className={heroStyles.demoContainer}>
              <div classname={heroStyles.demoCard}>
                <div className={heroStyles.cardHeader}>
                  <div className=" space-y-1">
                    <div className={heroStyles.cardLogoContainer}>
                        <div className={heroStyles.cardLogo}>AI</div>
                        <div>
                          <div className={heroStyles.cardClientName}>
                            {/* card client name */}
                            ABC Solutions Pvt Ltd
                          </div>
                          <div className={heroStyles.cardClientGst}>
                            GST: 17AAAPUG321C1ZV
                          </div>
                        </div>
                    </div>
                  </div>
                  
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

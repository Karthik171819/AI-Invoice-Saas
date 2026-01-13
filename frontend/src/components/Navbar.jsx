import React from "react";
import { navbarStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useUser, useAuth, useClerk, SignedOut } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { user } = useUser();
  const { getToken, isSignedIn } = useAuth();
  const clerk = useClerk();

  //useNavigate from react router  dom package
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const TOKEN_KEY = "token";

  // to open login model
  function openSignIn() {
    try {
      if (clerk && typeof clerk.openSignIn === "function") {
        clerk.openSignIn();
      } else {
        navigate("/login");
      }
    } catch (e) {
      console.error("Error opening sign-in:", e);
      navigate("/login");
    }
  }

  //to open signup model
  function openSignUp() {
    try {
      if (clerk && typeof clerk.openSignUp === "function") {
        clerk.openSignUp();
      } else {
        navigate("/signup");
      }
    } catch (e) {
      console.error("Error opening sign-up:", e);
      navigate("/signup");
    }
  }

  return (
    <header className={navbarStyles.navbar}>
      <div className={navbarStyles.container}>
        <nav className={navbarStyles.nav}>
          <div className={navbarStyles.logoSection}>
            <Link to="/" className={navbarStyles.logoLink}>
              <img src={logo} alt="logo" className={navbarStyles.logoImage} />
              <span className={navbarStyles.logoText}>InvoiceAI</span>
            </Link>

            <div className={navbarStyles.desktopNav}>
              <a href="#features" className={navbarStyles.navLink}>
                Features
              </a>
              <a href="#features" className={navbarStyles.navLinkInactive}>
                Pricing
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={navbarStyles.authSection}>
              <SignedOut>
                <button
                  onClick={openSignIn}
                  className={navbarStyles.signInButton}
                  type="button"
                >
                  Sign in
                </button>

                <button
                  onClick={openSignUp}
                  className={navbarStyles.signUpButton}
                  type="button"
                >
                  <div className={navbarStyles.signUpOverlay}></div>
                  <span className={navbarStyles.signUpText}>Get Started</span>
                  <svg
                    className={navbarStyles.signUpIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </SignedOut>
            </div>

            {/* mobile toggle menu */}
            <button
              onClick={() => setOpen(!open)}
              className={navbarStyles.mobileMenuButton}
            >
              <div className={navbarStyles.mobileMenuIcon}>
                <span
                  className={`${navbarStyles.mobileMenuLine1} ${
                    open
                      ? navbarStyles.mobileMenuLine1Open
                      : navbarStyles.mobileMenuLine1Closed
                  }`}
                ></span>

                 <span
                  className={`${navbarStyles.mobileMenuLine2} ${
                    open
                      ? navbarStyles.mobileMenuLine2Open
                      : navbarStyles.mobileMenuLine2Closed
                  }`}
                ></span>

                 <span
                  className={`${navbarStyles.mobileMenuLine3} ${
                    open
                      ? navbarStyles.mobileMenuLine3Open
                      : navbarStyles.mobileMenuLine3Closed
                  }`}
                ></span>

              </div>
            </button>
          </div>
        </nav>
      </div>

      <div className={`$open ? 'block' : 'hidden'} ${navbarStyles.mobileMenu}`}>
        <div className={navbarStyles.mobileMenuContainer}>
            <a href="#features" className={navbarStyles.mobileNavLink}>
                Features
            </a>
            <a href="#pricing" className={navbarStyles.mobileNavLink}>
                Pricing
            </a>

            <div>

            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

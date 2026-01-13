import React from "react";
import { navbarStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={navbarStyles.navbar}>
      <div className={navbarStyles.container}>
        <nav className={navbarStyles.nav}>
          <div className={navbarStyles.logoSection}>
            <Link to='/' className={navbarStyles.logoLink}>
            <img src={logo} alt="logo" className={navbarStyles.logoImage}/>
            <span className={navbarStyles.logoText}>InvoiceAI</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

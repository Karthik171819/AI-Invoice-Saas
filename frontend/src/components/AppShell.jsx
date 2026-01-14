import React, { useState } from "react";
import { appShellStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const AppShell = () => {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const { user } = useUser();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem("sidebar_collapsed") === "true";
    } catch {
      return false;
    }
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className={appShellStyles.root}>
      <div className={appShellStyles.layout}>
        {/* Sidebar */}
        <aside
          className={`${appShellStyles.sidebar} ${
            collapsed
              ? appShellStyles.sidebarCollapsed
              : appShellStyles.sidebarExpanded
          }`}
        >
          <div className={appShellStyles.sidebarGradient}></div>
          <div className={appShellStyles.sidebarContainer}>
            <div>
              <div
                className={`${appShellStyles.logoContainer} ${
                  collapsed ? appShellStyles.logoContainerCollapsed : ""
                }`}
              >
                <Link to="/" className={appShellStyles.logoLink}>
                  <div className="relative">
                    <img
                      src={logo}
                      alt="logo"
                      className={appShellStyles.logoImage}
                    />
                    <div className="absolute inset-0 ronded-lg blur-sm
                    group-hover:blur-md transition-all duration-300"/> 
                  </div>
                  {!collapsed && (
                    <div className={appShellStyles.logoTextContainer}>
                      <span className={appShellStyles.logoText}>InvoiceAI</span>
                      <div className={appShellStyles.logoUnderline}></div>
                    </div>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AppShell;

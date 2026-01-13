import React, { useState } from 'react'
import { appShellStyles } from '../assets/dummyStyles';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useClerk, useUser } from '@clerk/clerk-react';

const AppShell = () => {
    const navigate = useNavigate();
    const {signOut} = useClerk();
    const { user } = useUser();

    const [mobileOpen, setMobileOpen] =useState(false);
  return (
    <div className={appShellStyles.root}>
        <div className={appShellStyles.layout}>
            {/* Sidebar */}
            <aside classname={`${appShellStyles.sidebar} ${}`}></aside>
        </div>
    </div>
  )
}

export default AppShell
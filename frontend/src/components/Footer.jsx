import React from 'react'
import { footerStyles } from '../assets/dummyStyles.js'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.container}>
            <div className={footerStyles.copyright}>
                &copy; {new Date().getFullYear()} Invoice AI • Built by AI Digital Services
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
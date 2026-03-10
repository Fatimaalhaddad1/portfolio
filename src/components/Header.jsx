import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/fatima-alhaddad-a049bb2b5/', '_blank')
  }

  const downloadResume = () => {
    window.open('Fatimah Alhaddad-CV.pdf', '_blank')
  }

  return (
    <header className="header">
      <Link to="/" className="header-left" onClick={() => setMenuOpen(false)}>
        <div className="logo">FA</div>
        <div className="logo-text">
          <h1>FATIMAH ALHADDAD</h1>
          <p>SOFTWARE ENGINEER</p>
        </div>
      </Link>

      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={menuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
        <span className={menuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
        <span className={menuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
      </button>

      <div className="header-nav-group">
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/#about" onClick={() => setMenuOpen(false)} className="nav-link">About Me</Link>
          <Link to="/#projects" onClick={() => setMenuOpen(false)} className="nav-link">My Project</Link>
          <Link to="/#experience" onClick={() => setMenuOpen(false)} className="nav-link">My Experience</Link>
          <Link to="/#journey" onClick={() => setMenuOpen(false)} className="nav-link">PMU Experience</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)} className="nav-link">Contact</Link>
        </nav>
        <div className="header-right">
        <div className="tooltip-container">
          <button className="icon-button" onClick={downloadResume} title="Download Resume">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          </button>
          <span className="tooltip">Download Resume</span>
        </div>
        <div className="tooltip-container">
          <button className="icon-button linkedin-button" onClick={openLinkedIn} title="Visit LinkedIn Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
          <span className="tooltip">Visit LinkedIn Profile</span>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header

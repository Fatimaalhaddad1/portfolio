import React from 'react'

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const openCV = () => {
    window.open('/assets/Fatimah-Alhaddad-CV.pdf', '_blank')
  }

  return (
    <section className="top-hero">
      <div className="top-hero-inner">
        <h1 className="top-hero-title">FATIMAH ALHADDAD</h1>
        <p className="top-hero-sub">Software Engineer • UI/UX Designer • Mobile & Web Developer</p>
        <p className="top-hero-lead">Building practical, user-centered apps with clean design and reliable engineering.</p>
        <div className="hero-actions">
          <button className="btn" onClick={() => scrollTo('contact')}>Contact me</button>
          <button className="btn btn-outline" onClick={() => scrollTo('projects')}>My work</button>
          <button className="btn btn-outline" onClick={openCV}>My CV</button>
        </div>
        <button className="chevron" aria-label="Scroll to about" onClick={() => scrollTo('about')}>▾</button>
      </div>
    </section>
  )
}






export default Hero

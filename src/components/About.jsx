import React from 'react'

const About = () => {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <div className="hero-content">
        <div className="hero-image">
          <div className="photo-placeholder">
            <img src="/photo.JPG" alt="Fatimah Alhaddad" className="hero-photo" />
          </div>
        </div>
        <div className="hero-text">
          <p>
          I'm a Software Engineering graduate from Prince Mohammad Bin Fahd University.<br/>
I focus on creating practical and efficient technology solutions and have experience in app development, web design, and teamwork. <br/>
I'm talented in UI and UX design, with a strong interest in building clean and user-centered interfaces that improve usability. 
I'm motivated to continue learning, advance in the tech field, and contribute to projects that deliver real value.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About



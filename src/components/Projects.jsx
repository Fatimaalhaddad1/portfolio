import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "FlashPass",
      description: "A smart traffic-light priority system I developed for emergency vehicles. I designed and built the Flutter-based mobile app and Firebase backend that manage route requests, trigger green-light signals, and monitor real-time incident data. The system ensures faster emergency response through a secure, user-friendly, and reliable interface.",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Android Studio", "UI/UX Design"],
      github: "https://github.com/ravDev-darting/flash-pass-app.git",
     
    },
    {
      title: "FlashPass Mockups",
      description: "High-fidelity UI/UX mockups I designed for my FlashPass senior project using JustInMind. The prototypes illustrate user flows, mobile and web screens, and interface components for the emergency traffic-light priority system.",
      technologies: ["JustInMind", "UI/UX Design", "Prototyping", "Wireframing"],
      github: "https://github.com/Fatimaalhaddad1/FlashPass-Mockups.git",
      
    },
    {
      title: "Personal Portfolio Website",
description: "A fully responsive React-based portfolio I designed and developed to showcase my projects, skills, and experience. The site features smooth animations, reusable components, and a modern UI/UX layout — all crafted with custom CSS and clean, accessible code.",
technologies: ["React", "JavaScript", "HTML", "CSS", "UI/UX Design"],
      github: "https://github.com/Fatimaalhaddad1/portfolio.git",

    }
  ]

  return (
    <section id="projects" className="section projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="project-link">GitHub</a>
            </div>
          </div>
        ))}
      

      </div>
    </section>
  )
}

export default Projects

import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts with location-based services and interactive maps.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      github: "#",
      demo: "#"
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
              <a href={project.demo} className="project-link">Live Demo</a>
            </div>
          </div>
        ))}
      

      </div>
    </section>
  )
}

export default Projects

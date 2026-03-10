import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const Projects = () => {
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
              <Link to={`/projects/${project.slug}`} className="project-link project-link--primary">
                View Details
              </Link>
              <a href={project.github} className="project-link project-link--secondary" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

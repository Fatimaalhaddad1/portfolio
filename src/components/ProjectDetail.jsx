import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import Header from './Header'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="page-background">
        <Header />
        <div className="project-detail project-detail--not-found">
          <h1>Project Not Found</h1>
          <Link to="/" className="btn btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page-background">
      <Header />
      <div className="project-detail">
        <div className="project-detail-back">
          <Link to="/#projects" className="project-detail-back-link">
            ← Back to Projects
          </Link>
        </div>

        <div className="project-detail-banner">
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">{project.subtitle}</p>
          <div className="project-detail-tags">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-tag project-detail-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-detail-content">
          <section className="project-detail-card">
            <h2>About This Project</h2>
            <p>{project.about}</p>
          </section>

          <section className="project-detail-card">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>

          <div className="project-detail-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail

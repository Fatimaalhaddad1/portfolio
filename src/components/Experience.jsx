import React from 'react'

const Experience = () => {
  const openPublic = (path) => {
    // Important: open synchronously to avoid popup blockers
    const absolute = path.startsWith('/') ? path : `/${path}`
    window.open(absolute, '_blank')
  }

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Aramco",
      duration: "September 2025 - November 2025",
      description: "- Applied software engineering principles in documenting, organizing, and analyzing training-related data.\n- Contributed to maintaining digital records and reporting systems with focus on accuracy and consistency.\n- Facilitated Virtual Reality (VR) training sessions for employees by setting up, operating, and guiding them through interactive scenarios.\n- Tracked attendance and completion, ensuring employees were registered and certified after each session.\n- Strengthened ability to adapt engineering knowledge to industrial settings within a large-scale organization.",
      actions: [
        { label: 'Certificate', file: '/aramco-certificate.png' },
        { label: 'Recommendation Letter', file: '/aramco-recommendation.png' },
      ],
    },
    {
      title: "OT Cybersecurity Fundamentals Trainee",
      company: "Oregon System",
      duration: "August 2024 - September 2024",
      description: "Completed a one-month OT Cybersecurity Fundamentals program with Oregon Systems, gaining practical insights into industrial Cybersecurity concepts, threat mitigation, and risk management strategies.",
      actions: [
        { label: 'Certificate', file: '/ot-cybersecurity-certificate.png' },
      ],
    },
  ]

  return (
    <section id="experience" className="section experience">
      <h2>My Experience</h2>
      <ul className="experience-list">
        {experiences.map((exp, index) => (
          <li key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <p><strong>{exp.company}</strong></p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>

            {exp.actions && exp.actions.length > 0 && (
              <div className="experience-actions">
                {exp.actions.map((action, i) => (
                  <button
                    key={i}
                    className="btn"
                    onClick={() => openPublic(action.file)}
                    aria-label={`${exp.title} - ${action.label}`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience

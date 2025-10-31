import React from 'react'

const Journey = () => {
  const memberships = [
    {
      
      title: "Member of Public Relations at Google Developer Groups on Campus | PMU | 09/2024 – 05/2025",
      description: "– Handled communication with guests and speakers, promoted events, and supported coordination between teams to ensure effective outreach and engagement.",
      photos: [
        // Replace with your real image URLs or public folder paths like "/events/gdg-pr-1.jpg"
        '/events/gdg-pr-1.jpg',
        '/events/gdg-pr-2.jpg',
        '/events/gdg-pr-3.jpg'
      ]
    },
    {
      title: "Member of Cybersecurity Department at Google Developer Groups on Campus | PMU | 09/2023 – 05/2024",
      description: "– Assisted in preparing workshop content, supporting event organization, and collaborating with team members to promote cybersecurity awareness on campus.",
      photos: [
        // Replace with your real image URLs or public folder paths like "/events/gdg-cyber-1.jpg"
        '/events/gdg-cyber-1.jpg',
        '/events/gdg-cyber-2.jpg',
        '/events/gdg-cyber-3.jpg'
      ]
    }
  ]

  return (
    <section id="journey" className="section journey">
      <h2>My Journey At PMU</h2>

      <div className="journey-content">
        <div className="memberships">
          <ul className="membership-list">
            {memberships.map((membership, index) => (
              <li key={index} className="membership-item">
                <p className="membership-title">
                  {membership.title}
                </p>
                <p className="membership-desc">
                  {membership.description}
                </p>
                
                {membership.photos.length > 0 && (
                  <div className="membership-photos">
                    <div className="photos-grid">
                      {membership.photos.map((src, photoIndex) => (
                        <a
                          key={photoIndex}
                          href={src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="photo-link"
                          aria-label={`Open ${membership.title} photo ${photoIndex + 1} in new tab`}
                        >
                          <img src={src} alt={`${membership.title} photo ${photoIndex + 1}`} className="photo-img" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Journey

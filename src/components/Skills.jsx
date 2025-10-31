import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h2>Technical Skills</h2>

      <div className="skills-groups">
      <div className="skill-group">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
       
        <div className="skill-group">
        <h3>Mobile Development</h3>
          <ul>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Android Studio</li>
          </ul>
        </div>

        <div className="skill-group">
        <h3>Backend & APIs</h3>
          <ul>
            <li>Firebase</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-group">
        <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>Firestore</li>
          </ul>
        </div>
        <div className="skill-group">
          <h3>Tools & Version Control</h3>
          <ul>
            <li>Git</li>
            <li>Cursor</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
      <div className="page-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Journey />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

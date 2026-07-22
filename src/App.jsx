import React from 'react'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import CultureReport from './components/CultureReport.jsx'
import IntelligenceAPI from './components/IntelligenceAPI.jsx'
import Dashboard from './components/Dashboard.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <CultureReport />
      <IntelligenceAPI />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App
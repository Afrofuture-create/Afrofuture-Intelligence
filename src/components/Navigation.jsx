import React, { useEffect, useState } from 'react'

function Navigation() {
  const [activeSection, setActiveSection] = useState('culture-report')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['culture-report', 'intelligence-api', 'dashboard']
      let current = 'culture-report'
      sections.forEach(section => {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = section
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(10, 10, 15, 0.85)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #2a2a35', padding: '0 40px', height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '40px', height: '40px',
          background: 'linear-gradient(135deg, #d4a843, #b8941f)',
          borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: '18px', color: '#0a0a0f'
        }}>AF</div>
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.5px', color: '#f0f0f5' }}>AfroFuture Intelligence</h1>
          <p style={{ fontSize: '11px', color: '#8a8a9a', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '-2px' }}>Product Suite</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {['culture-report', 'intelligence-api', 'dashboard'].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            style={{
              padding: '10px 20px', borderRadius: '8px',
              color: activeSection === section ? '#d4a843' : '#8a8a9a',
              background: activeSection === section ? 'rgba(212, 168, 67, 0.08)' : 'transparent',
              border: activeSection === section ? '1px solid rgba(212, 168, 67, 0.2)' : '1px solid transparent',
              fontSize: '14px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease'
            }}
          >
            {section === 'culture-report' ? 'Culture Report' : section === 'intelligence-api' ? 'Intelligence API' : 'Dashboard'}
          </button>
        ))}
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '6px 14px', background: 'rgba(46, 204, 113, 0.08)',
        border: '1px solid rgba(46, 204, 113, 0.2)', borderRadius: '6px',
        fontSize: '11px', fontWeight: 600, color: '#2ecc71',
        textTransform: 'uppercase', letterSpacing: '0.5px'
      }}>
        <span style={{
          width: '6px', height: '6px', background: '#2ecc71', borderRadius: '50%',
          animation: 'pulse 2s infinite'
        }} />
        Live System
      </div>
    </nav>
  )
}

export default Navigation
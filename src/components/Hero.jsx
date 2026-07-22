import React from 'react'

function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      padding: '120px 40px 80px', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: '-50%', left: '-50%',
        width: '200%', height: '200%',
        background: 'radial-gradient(circle at 30% 40%, rgba(212, 168, 67, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(155, 89, 182, 0.06) 0%, transparent 50%)',
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        <div className="animate-fade-in-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '8px 20px', background: 'rgba(212, 168, 67, 0.08)',
          border: '1px solid rgba(212, 168, 67, 0.2)', borderRadius: '100px',
          fontSize: '12px', fontWeight: 600, color: '#d4a843',
          textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px'
        }}>
          <span>CMG Proprietary Data Platform</span>
        </div>
        <h2 className="animate-fade-in-up delay-1" style={{
          fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.05,
          letterSpacing: '-2px', marginBottom: '24px',
          background: 'linear-gradient(135deg, #f0f0f5 0%, #d4a843 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Intelligence Built on<br />Live Experience
        </h2>
        <p className="animate-fade-in-up delay-2" style={{
          fontSize: 'clamp(16px, 2vw, 20px)', color: '#8a8a9a',
          maxWidth: '680px', margin: '0 auto 48px', lineHeight: 1.7
        }}>
          Three products. One moat. AfroFuture Intelligence transforms 50,000+ live event touchpoints 
          into actionable brand sentiment, cultural trend velocity, and investor-grade market intelligence 
          that no competitor can replicate.
        </p>
        <div className="animate-fade-in-up delay-3" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#culture-report" style={{
            padding: '14px 32px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #d4a843, #b8941f)',
            color: '#0a0a0f', fontSize: '15px', fontWeight: 700,
            textDecoration: 'none', boxShadow: '0 4px 24px rgba(212, 168, 67, 0.2)'
          }}>Explore Products</a>
          <a href="#dashboard" style={{
            padding: '14px 32px', borderRadius: '8px',
            background: '#111118', color: '#f0f0f5',
            border: '1px solid #2a2a35', fontSize: '15px', fontWeight: 700,
            textDecoration: 'none'
          }}>View Live Dashboard</a>
        </div>
        <div className="animate-fade-in-up delay-4" style={{
          display: 'flex', justifyContent: 'center', gap: '48px',
          marginTop: '64px', flexWrap: 'wrap'
        }}>
          {[
            { value: '45.7K', label: 'Verified Respondents' },
            { value: '4', label: 'Global Markets' },
            { value: '50+', label: 'Live Events' },
            { value: '$10M+', label: 'Revenue Generated' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 800, color: '#d4a843', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: '#5a5a6a', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '8px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
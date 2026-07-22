import React from 'react'

const markets = [
  { flag: '🇬🇭', name: 'Accra, Ghana', respondents: '12,400' },
  { flag: '🇳🇬', name: 'Lagos, Nigeria', respondents: '18,700' },
  { flag: '🇬🇧', name: 'London, UK', respondents: '8,400' },
  { flag: '🇺🇸', name: 'Detroit, USA', respondents: '6,200' },
]

const tocItems = [
  { num: '01', title: 'Executive Summary', desc: 'Four-Market Pulse, QoQ Movement, Strategic Implications for Investors' },
  { num: '02', title: 'Market-by-Market Deep Dive', desc: 'Accra Detty December carryover, Lagos Afrobeats velocity, London premium positioning, Detroit baseline' },
  { num: '03', title: 'Brand Alignment Scores', desc: 'Spirits: Martell, Hennessy, Crown Royal, Jack Daniel\'s — Affinity Index methodology & competitive matrix' },
  { num: '04', title: 'Category Spend Shifts', desc: 'Spirits premiumization, Fashion streetwear-to-luxury, Financial remittance-to-investment, Travel experience-first' },
  { num: '05', title: 'Cultural Trend Radar', desc: 'Amapiano crossover velocity, Afrobeats saturation, declining generic messaging, Francophone wildcard' },
  { num: '06', title: 'First-Party Data Moat', desc: 'afrofuture_live_first_party capture mechanics, persistent profiles, real-time vs quarterly, compliance' },
]

const indicators = [
  { label: 'Indicator 01', title: 'Diaspora Cultural Affinity Index', desc: 'Composite score measuring emotional connection to African cultural outputs (music, fashion, live events) across all four markets. Baseline established Q1 2026.', investor: 'Leading indicator of sponsorship willingness and premium pricing power for live events.' },
  { label: 'Indicator 02', title: 'Spirits Category Premiumization Rate', desc: 'Share of wallet shifting from standard to premium/super-premium spirits within verified AfroFuture audience segments.', investor: 'Directly correlates with sponsor ARPU and Martell/Hennessy contract renewal likelihood.' },
  { label: 'Indicator 03', title: 'Cross-Market Content Amplification Factor', desc: 'Ratio of organic content sharing from live event attendees to non-attendees, measured across Instagram, TikTok, X.', investor: 'Measures earned media value per production dollar — core efficiency metric for CMG Creative.' },
  { label: 'Indicator 04', title: 'Brand-Culture Integration Velocity', desc: 'Speed at which new brand entrants achieve >60% cultural alignment score within target market (median days from first touch).', investor: 'Predicts CMG Creative pipeline velocity and new client onboarding efficiency.', highlight: true },
]

function CultureReport() {
  return (
    <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }} id="culture-report">
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{
          display: 'inline-block', padding: '6px 16px',
          background: 'rgba(212, 168, 67, 0.08)', border: '1px solid rgba(212, 168, 67, 0.15)',
          borderRadius: '100px', fontSize: '12px', fontWeight: 600, color: '#d4a843',
          textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px'
        }}>Product 01</div>
        <h3 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '16px', color: '#f0f0f5' }}>Quarterly Culture Report</h3>
        <p style={{ fontSize: '18px', color: '#8a8a9a', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
          A gated B2B intelligence document for investors and enterprise partners. 
          Structured depth without fabricated data.
        </p>
      </div>

      <div style={{
        background: '#111118', border: '1px solid #2a2a35',
        borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      }}>
        {/* COVER */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a24 0%, rgba(212, 168, 67, 0.05) 100%)',
          padding: '48px', borderBottom: '1px solid #2a2a35', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', background: 'rgba(212, 168, 67, 0.12)', color: '#d4a843', border: '1px solid rgba(212, 168, 67, 0.25)' }}>B2B Licensed</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', background: 'rgba(52, 152, 219, 0.08)', color: '#3498db', border: '1px solid rgba(52, 152, 219, 0.2)' }}>Enterprise Distribution</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', background: '#1a1a24', color: '#8a8a9a', border: '1px solid #2a2a35' }}>Q2 2026</span>
            <span style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', background: '#1a1a24', color: '#8a8a9a', border: '1px solid #2a2a35' }}>Investor Grade</span>
          </div>
          <h4 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-1px', marginBottom: '8px', color: '#f0f0f5' }}>AfroFuture Intelligence — Quarterly Culture Report</h4>
          <div style={{ fontSize: '14px', color: '#8a8a9a', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <span>📅 Issued: June 1, 2026</span>
            <span>🔄 Rolling 90-Day Window</span>
            <span>📊 Methodology: First-Party Live Event Capture + Digital Panel Triangulation</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '32px' }}>
            {markets.map((m, i) => (
              <div key={m.name} className={`animate-fade-in-up delay-${i + 1}`} style={{
                background: '#0a0a0f', border: '1px solid #2a2a35', borderRadius: '12px',
                padding: '24px', textAlign: 'center', transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{m.flag}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#f0f0f5', marginBottom: '4px' }}>{m.name}</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#d4a843', fontFamily: 'var(--font-mono)' }}>{m.respondents}</div>
                <div style={{ fontSize: '11px', color: '#5a5a6a', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Respondents</div>
              </div>
            ))}
          </div>
        </div>

        {/* TOC */}
        <div style={{ padding: '48px' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#8a8a9a', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>Table of Contents</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {tocItems.map((item, i) => (
              <div key={item.num} className={`${i % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'} delay-${Math.floor(i / 2) + 1}`} style={{
                display: 'flex', gap: '16px', padding: '20px',
                background: '#1a1a24', border: '1px solid #2a2a35', borderRadius: '12px'
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  background: 'linear-gradient(135deg, #d4a843, #b8941f)',
                  borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '14px', color: '#0a0a0f', flexShrink: 0
                }}>{item.num}</div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#f0f0f5', marginBottom: '6px' }}>{item.title}</h5>
                  <p style={{ fontSize: '13px', color: '#8a8a9a', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INDICATORS */}
        <div style={{ padding: '0 48px 48px' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#8a8a9a', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>Q2 2026 Headline Indicators</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {indicators.map((ind, i) => (
              <div key={ind.label} className={`animate-fade-in-up delay-${i + 1}`} style={{
                background: '#1a1a24', border: `1px solid ${ind.highlight ? 'rgba(212, 168, 67, 0.3)' : '#2a2a35'}`,
                borderRadius: '12px', padding: '28px', position: 'relative', overflow: 'hidden',
                backgroundImage: ind.highlight ? 'linear-gradient(135deg, #1a1a24 0%, rgba(212, 168, 67, 0.03) 100%)' : 'none'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #d4a843, transparent)' }} />
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#d4a843', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>{ind.label}</div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#f0f0f5', marginBottom: '8px' }}>{ind.title}</div>
                <div style={{
                  display: 'inline-block', padding: '8px 16px',
                  background: 'rgba(212, 168, 67, 0.08)', border: '1px dashed rgba(212, 168, 67, 0.3)',
                  borderRadius: '6px', fontSize: '13px', fontWeight: 600, color: '#d4a843',
                  fontFamily: 'var(--font-mono)', marginBottom: '12px'
                }}>Q2 FIGURE — PLACEHOLDER</div>
                <div style={{ fontSize: '13px', color: '#8a8a9a', lineHeight: 1.6, marginBottom: '12px' }}>{ind.desc}</div>
                <div style={{ fontSize: '12px', color: '#5a5a6a', padding: '10px 14px', background: '#0a0a0f', borderRadius: '6px', borderLeft: '2px solid #d4a843' }}>
                  <strong style={{ color: '#d4a843' }}>Investor relevance:</strong> {ind.investor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CultureReport
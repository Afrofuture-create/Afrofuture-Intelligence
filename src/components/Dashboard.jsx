import React, { useState, useEffect } from 'react'

const markets = [
  { name: 'Accra, Ghana', count: '12,400 respondents' },
  { name: 'Lagos, Nigeria', count: '18,700 respondents' },
  { name: 'London, UK', count: '8,400 respondents' },
  { name: 'Detroit, USA', count: '6,200 respondents' },
]

const brands = [
  { name: 'Martell', score: 74, rel: 'Active Partner', relClass: 'partner', trend: '+4.2%', trendClass: 'up', barClass: 'martell' },
  { name: 'Hennessy', score: 61, rel: 'Tracked Competitor', relClass: '', trend: '+0.8%', trendClass: 'up', barClass: 'hennessy' },
  { name: 'Crown Royal', score: 43, rel: 'Tracked Competitor', relClass: '', trend: '-2.1%', trendClass: 'down', barClass: 'crown' },
  { name: "Jack Daniel's", score: 38, rel: 'Tracked Competitor', relClass: '', trend: '-0.3%', trendClass: 'flat', barClass: 'jack' },
]

const aggregates = [
  { value: '54', label: 'Avg Affinity', sub: 'Category baseline' },
  { value: '8.6K', label: 'Total Mentions', sub: 'Tracked volume' },
  { value: 'Strong', label: 'Premiumization', sub: 'Share of wallet shift', color: '#2ecc71' },
]

const rings = [
  { value: 88, color: 'gold', label: 'Detty December Cultural Moment' },
  { value: 75, color: 'green', label: 'Afrobeats-to-Brand Velocity' },
  { value: 55, color: 'blue', label: 'Amapiano Crossover Index' },
]

function Dashboard() {
  const [activeMarket, setActiveMarket] = useState(0)
  const [ringsAnimated, setRingsAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setRingsAnimated(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const circumference = 2 * Math.PI * 55

  const barColors = {
    martell: 'linear-gradient(90deg, #c9a84c, #d4a843)',
    hennessy: 'linear-gradient(90deg, #b8860b, #daa520)',
    crown: 'linear-gradient(90deg, #6b5b95, #7b6ba5)',
    jack: 'linear-gradient(90deg, #4a4a5a, #5a5a6a)',
  }

  const trendColors = {
    up: '#2ecc71',
    down: '#e74c3c',
    flat: '#5a5a6a',
  }

  const ringColors = {
    gold: '#d4a843',
    green: '#2ecc71',
    blue: '#3498db',
  }

  return (
    <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }} id="dashboard">
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{
          display: 'inline-block', padding: '6px 16px',
          background: 'rgba(212, 168, 67, 0.08)', border: '1px solid rgba(212, 168, 67, 0.15)',
          borderRadius: '100px', fontSize: '12px', fontWeight: 600, color: '#d4a843',
          textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px'
        }}>Product 03</div>
        <h3 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '16px', color: '#f0f0f5' }}>Brand Sentiment Dashboard</h3>
        <p style={{ fontSize: '18px', color: '#8a8a9a', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
          A single-screen visualization that makes the business model loop visible.
        </p>
      </div>

      <div className="animate-fade-in-up" style={{
        background: '#111118', border: '1px solid #2a2a35',
        borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      }}>
        {/* HEADER */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '24px 32px', background: 'linear-gradient(135deg, #1a1a24 0%, #0a0a0f 100%)',
          borderBottom: '1px solid #2a2a35'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '36px', height: '36px',
              background: 'linear-gradient(135deg, #d4a843, #b8941f)',
              borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '14px', color: '#0a0a0f'
            }}>AF</div>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#f0f0f5' }}>AfroFuture Intelligence</h4>
              <p style={{ fontSize: '12px', color: '#5a5a6a', letterSpacing: '1px', textTransform: 'uppercase' }}>Brand Sentiment Dashboard</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{
              padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.5px',
              background: 'rgba(46, 204, 113, 0.1)', color: '#2ecc71',
              border: '1px solid rgba(46, 204, 113, 0.2)', display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <span style={{ width: '6px', height: '6px', background: '#2ecc71', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
              Live Data
            </span>
            <span style={{
              padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.5px',
              background: 'rgba(212, 168, 67, 0.08)', color: '#d4a843',
              border: '1px solid rgba(212, 168, 67, 0.15)'
            }}>Enterprise License</span>
          </div>
        </div>

        {/* BODY */}
        <div style={{ padding: '32px' }}>
          {/* MARKET SELECTOR */}
          <div style={{
            display: 'flex', gap: '8px', marginBottom: '32px',
            background: '#1a1a24', padding: '6px', borderRadius: '12px',
            width: 'fit-content', border: '1px solid #2a2a35'
          }}>
            {markets.map((m, i) => (
              <button
                key={m.name}
                onClick={() => setActiveMarket(i)}
                style={{
                  padding: '10px 20px', borderRadius: '8px', border: 'none',
                  background: activeMarket === i ? 'linear-gradient(135deg, #d4a843, #b8941f)' : 'transparent',
                  color: activeMarket === i ? '#0a0a0f' : '#8a8a9a',
                  fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.3s ease', textAlign: 'left',
                  boxShadow: activeMarket === i ? '0 4px 24px rgba(212, 168, 67, 0.2)' : 'none'
                }}
              >
                {m.name}
                <span style={{ display: 'block', fontSize: '10px', fontWeight: 500, opacity: 0.8, marginTop: '2px' }}>{m.count}</span>
              </button>
            ))}
          </div>

          {/* ROW 1: BRAND BARS + CATEGORY */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            {/* BRAND BARS */}
            <div style={{
              background: '#1a1a24', border: '1px solid #2a2a35', borderRadius: '16px',
              padding: '28px', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #d4a843, transparent)', opacity: 0.6 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#8a8a9a', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Spirits Brand Affinity — {markets[activeMarket].name.split(',')[0]}</span>
                <span style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '4px', background: 'rgba(212, 168, 67, 0.08)', color: '#d4a843', border: '1px solid rgba(212, 168, 67, 0.15)', fontWeight: 600 }}>Q2 2026</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {brands.map((brand) => (
                  <div key={brand.name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '150px', flexShrink: 0 }}>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#f0f0f5' }}>{brand.name}</div>
                      <div style={{ fontSize: '11px', color: brand.relClass === 'partner' ? '#d4a843' : '#5a5a6a', marginTop: '2px', fontWeight: brand.relClass === 'partner' ? 600 : 400 }}>
                        {brand.relClass === 'partner' ? '★ ' : ''}{brand.rel}
                      </div>
                    </div>
                    <div style={{ flex: 1, height: '40px', background: '#111118', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', borderRadius: '8px', position: 'relative',
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
                        paddingRight: '14px', transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        width: `${brand.score}%`, background: barColors[brand.barClass]
                      }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 800, color: 'white', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{brand.score}%</span>
                      </div>
                    </div>
                    <div style={{ width: '70px', textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: trendColors[brand.trendClass] }}>{brand.trend}</div>
                      <div style={{ fontSize: '10px', color: '#5a5a6a', marginTop: '2px' }}>QoQ</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '14px 18px', background: '#111118', borderRadius: '8px',
                marginTop: '20px', border: '1px solid #2a2a35'
              }}>
                <div style={{ width: '8px', height: '8px', background: '#2ecc71', borderRadius: '50%', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                <div style={{ fontSize: '12px', color: '#8a8a9a', lineHeight: 1.5 }}>
                  Data Source: <code style={{ color: '#d4a843', fontFamily: 'var(--font-mono)', background: 'rgba(212, 168, 67, 0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>afrofuture_live_first_party</code> — 
                  Post-event surveys + social listening triangulation. n=12,400. Confidence: 95% ±2.1%
                </div>
              </div>
            </div>

            {/* CATEGORY + RINGS */}
            <div style={{
              background: '#1a1a24', border: '1px solid #2a2a35', borderRadius: '16px',
              padding: '28px', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #d4a843, transparent)', opacity: 0.6 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#8a8a9a', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Category Intelligence — {markets[activeMarket].name.split(',')[0]} Spirits</span>
                <span style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '4px', background: 'rgba(212, 168, 67, 0.08)', color: '#d4a843', border: '1px solid rgba(212, 168, 67, 0.15)', fontWeight: 600 }}>90-Day Window</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
                {aggregates.map((agg) => (
                  <div key={agg.label} style={{
                    textAlign: 'center', padding: '24px 16px',
                    background: '#111118', borderRadius: '12px', border: '1px solid #2a2a35'
                  }}>
                    <div style={{ fontSize: '36px', fontWeight: 800, color: agg.color || '#d4a843', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>{agg.value}</div>
                    <div style={{ fontSize: '11px', color: '#8a8a9a', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{agg.label}</div>
                    <div style={{ fontSize: '11px', color: '#5a5a6a', marginTop: '4px' }}>{agg.sub}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '8px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#8a8a9a', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px' }}>Cultural Alignment Signals</div>
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                  {rings.map((ring) => {
                    const offset = circumference - (ring.value / 100) * circumference
                    return (
                      <div key={ring.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                        <div style={{ position: 'relative', width: '130px', height: '130px' }}>
                          <svg style={{ transform: 'rotate(-90deg)' }} width="130" height="130" viewBox="0 0 130 130">
                            <circle fill="none" stroke="#111118" strokeWidth="10" cx="65" cy="65" r="55" />
                            <circle 
                              fill="none" strokeWidth="10" strokeLinecap="round"
                              stroke={ringColors[ring.color]}
                              cx="65" cy="65" r="55"
                              strokeDasharray={circumference}
                              strokeDashoffset={ringsAnimated ? offset : circumference}
                              style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                            />
                          </svg>
                          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <div style={{ fontSize: '28px', fontWeight: 800, color: '#f0f0f5', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>{ring.value}%</div>
                          </div>
                        </div>
                        <div style={{ fontSize: '12px', color: '#8a8a9a', textAlign: 'center', maxWidth: '120px', lineHeight: 1.4, fontWeight: 500 }}>{ring.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* MOAT SECTION */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a24 0%, rgba(212, 168, 67, 0.03) 100%)',
            border: '1px solid #2a2a35', borderRadius: '16px', padding: '32px',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #d4a843, transparent)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
              <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#8a8a9a', textTransform: 'uppercase', letterSpacing: '1.5px' }}>The Live Event Moat — Business Model Visualization</h5>
              <span style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '4px', background: 'rgba(212, 168, 67, 0.08)', color: '#d4a843', border: '1px solid rgba(212, 168, 67, 0.15)', fontWeight: 600 }}>Proprietary Differentiator</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', padding: '20px 0', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { icon: '🎤', value: '50K+', label: 'Live Event Attendees', sub: ['AfroFuture Festival Ghana', 'Amapiano & Brunch', 'BAL Tour Activations'], highlight: false },
                { icon: '📊', value: '+18.4', label: 'Affinity Point Gap', sub: ['Attendee vs. Non-Attendee', 'Martell brand affinity delta', 'First-party captured'], highlight: true },
                { icon: '💰', value: '$10M+', label: 'CMG Revenue', sub: ['Since inception', 'Live + Creative + Digital', 'Reinvestment cycle'], highlight: false },
                { icon: '🌍', value: '25M+', label: 'Annual Reach', sub: ['Digital marketing', 'Content licensing', 'Brand partnerships'], highlight: false },
              ].map((node, i, arr) => (
                <React.Fragment key={node.label}>
                  <div style={{
                    flex: 1, minWidth: '160px', textAlign: 'center', padding: '24px 16px',
                    background: '#111118', border: `1px solid ${node.highlight ? 'rgba(212, 168, 67, 0.25)' : '#2a2a35'}`,
                    borderRadius: '12px', transition: 'all 0.3s ease',
                    backgroundColor: node.highlight ? 'rgba(212, 168, 67, 0.05)' : '#111118',
                    animation: node.highlight ? 'glow 3s ease-in-out infinite' : 'none'
                  }}>
                    <div style={{ fontSize: '36px', marginBottom: '12px' }}>{node.icon}</div>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: node.highlight ? '#d4a843' : '#f0f0f5', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>{node.value}</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#8a8a9a', marginTop: '8px' }}>{node.label}</div>
                    <div style={{ fontSize: '11px', color: '#5a5a6a', marginTop: '4px', lineHeight: 1.5 }}>
                      {node.sub.map((line, j) => <span key={j}>{line}<br /></span>)}
                    </div>
                  </div>
                  {i < arr.length - 1 && <div style={{ fontSize: '28px', color: '#d4a843', opacity: 0.5, flexShrink: 0 }}>→</div>}
                </React.Fragment>
              ))}
            </div>

            <div style={{
              marginTop: '28px', padding: '20px 24px',
              background: '#111118', borderRadius: '12px', borderLeft: '3px solid #d4a843'
            }}>
              <p style={{ fontSize: '14px', color: '#8a8a9a', lineHeight: 1.7 }}>
                <strong style={{ color: '#d4a843' }}>The Loop:</strong> High-quality live event production (AfroFuture Festival, Amapiano & Brunch) generates first-party audience data at scale. 
                This data feeds the Intelligence API, producing brand sentiment scores that no competitor can replicate because no competitor owns both the stage and the audience. 
                Higher sponsor confidence (Martell at 74% affinity) drives more production investment, which deepens the data moat. 
                <strong style={{ color: '#d4a843' }}>This is the entire CMG business model in a single screen.</strong>
              </p>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '14px 18px', background: '#111118', borderRadius: '8px',
              marginTop: '20px', border: '1px solid #2a2a35'
            }}>
              <div style={{ width: '8px', height: '8px', background: '#2ecc71', borderRadius: '50%', animation: 'pulse 2s infinite', flexShrink: 0 }} />
              <div style={{ fontSize: '12px', color: '#8a8a9a', lineHeight: 1.5 }}>
                Data Source: <code style={{ color: '#d4a843', fontFamily: 'var(--font-mono)', background: 'rgba(212, 168, 67, 0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>afrofuture_live_first_party</code> — 
                Event attendee behavioral capture → persistent profile enrichment → quarterly intelligence product. 
                No third-party data broker involved. Privacy-first architecture. GDPR/CCPA compliant.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
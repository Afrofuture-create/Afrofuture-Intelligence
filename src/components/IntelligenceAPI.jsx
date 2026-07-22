import React, { useState } from 'react'

const endpoints = [
  { method: 'GET', path: '/sentiment', desc: 'Real-time brand sentiment across 4 markets' },
  { method: 'GET', path: '/trends', desc: 'Cultural trend velocity & trajectory' },
  { method: 'GET', path: '/spend-index', desc: 'Category spend & premiumization' },
  { method: 'GET', path: '/brand-score', desc: 'Comprehensive brand alignment' },
  { method: 'POST', path: '/brand-query', desc: 'Custom due diligence queries' },
]

const responseLines = [
  '{',
  '  "status": "success",',
  '  "request_id": "afint-req-2026q2-884721",',
  '  "timestamp": "2026-06-01T10:32:00Z",',
  '  "market": "accra",',
  '  "category": "spirits",',
  '  "time_window": "90d",',
  '  "data_source": "afrofuture_live_first_party",',
  '  "methodology": {',
  '    "primary_capture": "Post-event survey (AfroFuture Festival Ghana Dec 2025, Amapiano & Brunch Q1 2026)",',
  '    "sample_size": 12400,',
  '    "confidence_level": "95%",',
  '    "margin_of_error": "±2.1%"',
  '  },',
  '  "brand_sentiment_breakdown": [',
  '    {',
  '      "brand": "Martell",',
  '      "affinity_score": 74,',
  '      "sentiment_polarity": "strongly_positive",',
  '      "volume_mentions": 2847,',
  '      "cultural_resonance": "high",',
  '      "key_associations": ["Detty December", "premium celebration", "African excellence", "sponsor recognition"],',
  '      "trend_direction": "improving",',
  '      "quarter_change": "+4.2%",',
  '      "insight": "Martell\'s multi-year AfroFuture partnership and exclusive VIP activation at December festival driving top-quartile affinity."',
  '    },',
  '    {',
  '      "brand": "Hennessy",',
  '      "affinity_score": 61,',
  '      "sentiment_polarity": "positive",',
  '      "volume_mentions": 4123,',
  '      "cultural_resonance": "moderate_high",',
  '      "key_associations": ["hip-hop culture", "legacy brand", "club presence"],',
  '      "trend_direction": "stable",',
  '      "quarter_change": "+0.8%",',
  '      "insight": "Hennessy maintains broad awareness but lacks event-specific cultural anchoring in Accra market."',
  '    },',
  '    {',
  '      "brand": "Crown Royal",',
  '      "affinity_score": 43,',
  '      "sentiment_polarity": "neutral_positive",',
  '      "volume_mentions": 892,',
  '      "cultural_resonance": "low_moderate",',
  '      "key_associations": ["Diaspora recall", "North American heritage"],',
  '      "trend_direction": "declining",',
  '      "quarter_change": "-2.1%",',
  '      "insight": "Crown Royal struggles to translate North American Diaspora equity into Accra market."',
  '    },',
  '    {',
  '      "brand": "Jack Daniel\'s",',
  '      "affinity_score": 38,',
  '      "sentiment_polarity": "neutral",',
  '      "volume_mentions": 756,',
  '      "cultural_resonance": "low",',
  '      "key_associations": ["generic whiskey", "bar standard", "no cultural hook"],',
  '      "trend_direction": "stable",',
  '      "quarter_change": "-0.3%",',
  '      "insight": "Jack Daniel\'s operates as category default with minimal cultural differentiation."',
  '    }',
  '  ],',
  '  "category_aggregate": {',
  '    "average_affinity": 54,',
  '    "total_mentions": 8618,',
  '    "premiumization_signal": "strong",',
  '    "spend_shift_indicator": "Share of wallet moving from standard (Jack Daniel\'s) to premium (Martell, Hennessy)"',
  '  },',
  '  "live_event_moat_signal": {',
  '    "event_attendee_vs_non_attendee_affinity_gap": 18.4,',
  '    "description": "Attendees of AfroFuture Festival and Amapiano & Brunch show 18.4-point higher affinity for Martell vs. non-attendees. This gap is the proprietary moat visible in data."',
  '  }',
  '}'
]

function IntelligenceAPI() {
  const [activeEndpoint, setActiveEndpoint] = useState(0)

  const getLineColor = (line) => {
    const trimmed = line.trim()
    if (trimmed.match(/^"[a-z_]+":/)) return '#3498db'
    if (trimmed.includes('"') && !trimmed.includes('":')) return '#2ecc71'
    if (trimmed.match(/\d+/)) return '#e67e22'
    return '#8a8a9a'
  }

  return (
    <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }} id="intelligence-api">
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{
          display: 'inline-block', padding: '6px 16px',
          background: 'rgba(212, 168, 67, 0.08)', border: '1px solid rgba(212, 168, 67, 0.15)',
          borderRadius: '100px', fontSize: '12px', fontWeight: 600, color: '#d4a843',
          textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px'
        }}>Product 02</div>
        <h3 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '16px', color: '#f0f0f5' }}>Intelligence API</h3>
        <p style={{ fontSize: '18px', color: '#8a8a9a', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
          The endpoint architecture is the product story. Five coherent endpoints that transform 
          first-party live event data into actionable intelligence.
        </p>
      </div>

      <div className="animate-fade-in-up" style={{
        display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px',
        background: '#111118', border: '1px solid #2a2a35',
        borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      }}>
        <div style={{ background: '#1a1a24', borderRight: '1px solid #2a2a35', padding: '32px 24px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#5a5a6a', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Endpoints</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {endpoints.map((ep, i) => (
              <div key={ep.path} onClick={() => setActiveEndpoint(i)} style={{
                padding: '12px 16px', borderRadius: '8px', cursor: 'pointer',
                transition: 'all 0.3s ease', border: '1px solid transparent',
                background: activeEndpoint === i ? 'rgba(212, 168, 67, 0.08)' : 'transparent',
                borderColor: activeEndpoint === i ? 'rgba(212, 168, 67, 0.2)' : 'transparent'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#2ecc71', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{ep.method}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f0f5', fontFamily: 'var(--font-mono)' }}>{ep.path}</div>
                <div style={{ fontSize: '12px', color: '#8a8a9a', marginTop: '4px', lineHeight: 1.4 }}>{ep.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '32px', overflowX: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#f0f0f5' }}>GET /sentiment — Spirits Category, Accra Market</h4>
            <span style={{ padding: '4px 12px', background: '#0a0a0f', border: '1px solid #2a2a35', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: '#5a5a6a', fontFamily: 'var(--font-mono)' }}>v1.0 Enterprise</span>
          </div>

          <div style={{ background: '#0a0a0f', border: '1px solid #2a2a35', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid #2a2a35' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#8a8a9a', textTransform: 'uppercase', letterSpacing: '1px' }}>Sample Request</span>
              <span style={{ padding: '3px 10px', background: 'rgba(46, 204, 113, 0.1)', color: '#2ecc71', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>200 OK</span>
            </div>
            <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.7, color: '#8a8a9a', whiteSpace: 'pre-wrap' }}>
              <span style={{ color: '#3498db' }}>GET</span> <span style={{ color: '#2ecc71' }}>/v1/sentiment?market=accra&category=spirits&time_window=90d</span>
              {'
'}<span style={{ color: '#5a5a6a', fontStyle: 'italic' }}>Authorization: Bearer {'{'}enterprise_token{'}'}</span>
              {'
'}<span style={{ color: '#5a5a6a', fontStyle: 'italic' }}>Content-Type: application/json</span>
            </div>
          </div>

          <div style={{ background: '#0a0a0f', border: '1px solid #2a2a35', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid #2a2a35' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#8a8a9a', textTransform: 'uppercase', letterSpacing: '1px' }}>Sample Response</span>
              <span style={{ padding: '3px 10px', background: 'rgba(212, 168, 67, 0.1)', color: '#d4a843', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>afrofuture_live_first_party</span>
            </div>
            <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.7, overflowX: 'auto' }}>
              {responseLines.map((line, i) => (
                <div key={i} style={{ color: getLineColor(line), whiteSpace: 'pre' }}>{line}</div>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: '24px', padding: '20px 24px',
            background: 'linear-gradient(135deg, rgba(212, 168, 67, 0.08) 0%, rgba(212, 168, 67, 0.02) 100%)',
            border: '1px solid rgba(212, 168, 67, 0.2)', borderRadius: '12px',
            display: 'flex', alignItems: 'center', gap: '16px'
          }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(212, 168, 67, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>🔒</div>
            <div>
              <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#d4a843', marginBottom: '4px' }}>The Moat, Visible in Code</h5>
              <p style={{ fontSize: '13px', color: '#8a8a9a', lineHeight: 1.5 }}>
                Every response carries <code style={{ background: 'rgba(212, 168, 67, 0.1)', padding: '2px 6px', borderRadius: '4px', color: '#d4a843', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>"data_source": "afrofuture_live_first_party"</code> — 
                the signal that no third-party broker, no social listening scraper, no survey panel 
                can replicate. Only CMG owns both the stage and the audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntelligenceAPI
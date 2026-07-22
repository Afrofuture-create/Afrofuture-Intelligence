import React from 'react'

function Footer() {
  return (
    <footer style={{
      padding: '48px 40px', borderTop: '1px solid #2a2a35',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      maxWidth: '1400px', margin: '0 auto', flexWrap: 'wrap', gap: '20px'
    }}>
      <div style={{ fontSize: '13px', color: '#5a5a6a' }}>
        AfroFuture Intelligence &copy; 2026 Culture Management Group. 
        Data proprietary. Licensed for Enterprise use only.
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <span style={{ fontSize: '11px', color: '#5a5a6a', padding: '6px 12px', border: '1px solid #2a2a35', borderRadius: '6px', fontFamily: 'var(--font-mono)' }}>API v1.0</span>
        <span style={{ fontSize: '11px', color: '#5a5a6a', padding: '6px 12px', border: '1px solid #2a2a35', borderRadius: '6px', fontFamily: 'var(--font-mono)' }}>Q2 2026</span>
        <span style={{ fontSize: '11px', color: '#5a5a6a', padding: '6px 12px', border: '1px solid #2a2a35', borderRadius: '6px', fontFamily: 'var(--font-mono)' }}>45,700 Verified Respondents</span>
      </div>
    </footer>
  )
}

export default Footer
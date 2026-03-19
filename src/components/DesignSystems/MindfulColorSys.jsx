import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ArtMeditationColorSystem() {
  const navigate = useNavigate()
  return (
    <>
      <style>{`
        .cs-root {
          background: #fff9f0;
          color: #1a1816;
          font-family: 'Cormorant Garamond', Georgia, serif;
          min-height: 100vh;
        }

        /* ── HERO ── */
        .cs-hero {
          padding: 80px 60px 60px;
          position: relative;
          overflow: hidden;
        }

        .cs-hero::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,124,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .cs-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          color: #a67c52;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .cs-title {
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #1a1816;
        }

        .cs-title em {
          font-style: italic;
          color: #a67c52;
        }

        .cs-sub {
          font-size: 1.2rem;
          font-weight: 300;
          color: #c9a87c;
          margin-top: 20px;
          max-width: 500px;
          line-height: 1.6;
        }

        /* ── SWATCH STRIP ── */
        .cs-swatch-strip {
          display: flex;
          height: 8px;
          margin: 0 60px 70px;
          border-radius: 4px;
          overflow: hidden;
        }

        .cs-swatch-strip div { flex: 1; }

        /* ── SECTION ── */
        .cs-section {
          padding: 70px 60px;
        }

        .cs-section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #b9cad1;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cs-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, #b9cad1, transparent);
          opacity: 0.4;
        }

        /* ── PALETTE GRID ── */
        .cs-palette-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .cs-color-card {
          border-radius: 20px;
          overflow: hidden;
          background: white;
          box-shadow: 0 4px 24px rgba(26,24,22,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cs-color-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(26,24,22,0.12);
        }

        .cs-color-swatch {
          height: 120px;
          display: flex;
          align-items: flex-end;
          padding: 14px 18px;
        }

        .cs-color-hex {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
          opacity: 0.75;
        }

        .cs-color-body {
          padding: 20px 20px 22px;
        }

        .cs-color-name {
          font-size: 1.35rem;
          font-weight: 600;
          margin-bottom: 2px;
          color: #1a1816;
        }

        .cs-color-role {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #a67c52;
          margin-bottom: 12px;
        }

        .cs-color-emotion {
          font-style: italic;
          font-size: 0.95rem;
          color: #c9a87c;
          margin-bottom: 14px;
        }

        .cs-color-uses {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 0;
          margin: 0;
        }

        .cs-color-uses li {
          font-size: 0.78rem;
          color: #5a4a3a;
          padding-left: 14px;
          position: relative;
          line-height: 1.4;
        }

        .cs-color-uses li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #b9cad1;
        }

        /* ── DARK PREVIEW ── */
        .cs-dark-preview {
          background: #1a1816;
          margin: 0 60px;
          border-radius: 24px;
          padding: 50px;
          position: relative;
          overflow: hidden;
        }

        .cs-dark-preview::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,124,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .cs-dp-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c9a87c;
          margin-bottom: 30px;
        }

        .cs-dp-title {
          font-size: 2.2rem;
          font-weight: 300;
          color: #c9a87c;
          margin-bottom: 10px;
          font-style: italic;
        }

        .cs-dp-body {
          font-size: 1rem;
          color: #b9cad1;
          line-height: 1.7;
          max-width: 500px;
          font-weight: 300;
          margin-bottom: 30px;
        }

        .cs-dp-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cs-dp-btn {
          padding: 10px 22px;
          border-radius: 100px;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s;
        }

        .cs-dp-btn:hover { opacity: 0.85; }
        .cs-dp-btn-primary  { background: #c94e11; color: #fff9f0; }
        .cs-dp-btn-secondary { background: #a67c52; color: #fff9f0; }
        .cs-dp-btn-ghost    { background: transparent; color: #c9a87c; border: 1px solid #c9a87c; }
        .cs-dp-btn-disabled { background: transparent; color: #b9cad1; border: 1px solid rgba(185,202,209,0.3); }

        /* ── TOKENS ── */
        .cs-token-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
        }

        .cs-token-card {
          background: white;
          border-radius: 14px;
          padding: 18px 20px;
          box-shadow: 0 2px 12px rgba(26,24,22,0.05);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cs-token-dot {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .cs-token-info { flex: 1; }

        .cs-token-name {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          color: #a67c52;
          letter-spacing: 0.05em;
          margin-bottom: 3px;
        }

        .cs-token-val {
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          color: #1a1816;
        }

        /* ── FOOTER ── */
        .cs-footer {
          padding: 40px 60px;
          border-top: 1px solid rgba(166,124,82,0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .cs-footer p {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: #b9cad1;
          text-transform: uppercase;
        }

        .cs-footer-swatches {
          display: flex;
          gap: 6px;
        }

        .cs-footer-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .btn-padding {
          padding: 12px;
        }

        @media (max-width: 600px) {
          .cs-hero, .cs-section { padding: 40px 24px; }
          .cs-swatch-strip { margin: 0 24px 40px; }
          .cs-dark-preview { margin: 0 24px; padding: 32px 24px; }
          .cs-footer { padding: 32px 24px; }
        }
      `}</style>

      <div className="cs-root">

        {/* HERO */}
        <section className="cs-hero">
          <p className="cs-eyebrow">Color System · v1.0 · Art & Meditation PWA</p>
          <h1 className="cs-title">Warm.<br /><em>Earthy.</em><br />Intentional.</h1>
          <p className="cs-sub">A palette built for stillness, creativity, and mindful interaction — inspired by natural pigments, aged paper, and ember light.</p>
        </section>

        {/* SWATCH STRIP */}
        <div className="cs-swatch-strip">
          <div style={{ background: '#1a1816' }} />
          <div style={{ background: '#fff9f0', border: '1px solid rgba(166,124,82,0.2)' }} />
          <div style={{ background: '#a67c52' }} />
          <div style={{ background: '#c9a87c' }} />
          <div style={{ background: '#b9cad1' }} />
          <div style={{ background: '#c94e11' }} />
          <div style={{ background: '#6b9e78' }} />
        </div>

        {/* PALETTE */}
        <section className="cs-section" style={{ paddingTop: 0 }}>
          <div className="cs-section-label">Color Definitions</div>
          <div className="cs-palette-grid">

            <div className="cs-color-card">
              <div className="cs-color-swatch" style={{ background: '#1a1816' }}>
                <span className="cs-color-hex" style={{ color: '#fff9f0' }}>#1a1816</span>
              </div>
              <div className="cs-color-body">
                <div className="cs-color-name">Charcoal Ink</div>
                <div className="cs-color-role">Dark Theme Background</div>
                <div className="cs-color-emotion">Grounding · Depth · Focus</div>
                <ul className="cs-color-uses">
                  <li>App background in dark mode</li>
                  <li>Modals, drawers, overlays</li>
                  <li>Body text on light surfaces</li>
                </ul>
              </div>
            </div>

            <div className="cs-color-card">
              <div className="cs-color-swatch" style={{ background: '#fff9f0', borderBottom: '1px solid rgba(166,124,82,0.15)' }}>
                <span className="cs-color-hex" style={{ color: '#a67c52' }}>#fff9f0</span>
              </div>
              <div className="cs-color-body">
                <div className="cs-color-name">Parchment Glow</div>
                <div className="cs-color-role">Light Theme Background</div>
                <div className="cs-color-emotion">Calm · Openness · Clarity</div>
                <ul className="cs-color-uses">
                  <li>Main app background, light mode</li>
                  <li>Card surfaces & journal areas</li>
                  <li>Canvas / drawing workspace</li>
                </ul>
              </div>
            </div>

            <div className="cs-color-card">
              <div className="cs-color-swatch" style={{ background: '#a67c52' }}>
                <span className="cs-color-hex" style={{ color: '#fff9f0' }}>#a67c52</span>
              </div>
              <div className="cs-color-body">
                <div className="cs-color-name">Warm Earth</div>
                <div className="cs-color-role">Light Accent</div>
                <div className="cs-color-emotion">Warmth · Craft · Authenticity</div>
                <ul className="cs-color-uses">
                  <li>Secondary buttons & links</li>
                  <li>Icon fills, dividers</li>
                  <li>Progress indicators</li>
                </ul>
              </div>
            </div>

            <div className="cs-color-card">
              <div className="cs-color-swatch" style={{ background: '#c9a87c' }}>
                <span className="cs-color-hex" style={{ color: '#1a1816' }}>#c9a87c</span>
              </div>
              <div className="cs-color-body">
                <div className="cs-color-name">Golden Sand</div>
                <div className="cs-color-role">Dark Accent / Hover</div>
                <div className="cs-color-emotion">Softness · Elevation · Reward</div>
                <ul className="cs-color-uses">
                  <li>Hover & active states</li>
                  <li>Achievement backgrounds</li>
                  <li>Gradient partner to Warm Earth</li>
                </ul>
              </div>
            </div>

            <div className="cs-color-card">
              <div className="cs-color-swatch" style={{ background: '#b9cad1' }}>
                <span className="cs-color-hex" style={{ color: '#1a1816' }}>#b9cad1</span>
              </div>
              <div className="cs-color-body">
                <div className="cs-color-name">Misted Sky</div>
                <div className="cs-color-role">Grey Accent / Neutral</div>
                <div className="cs-color-emotion">Stillness · Space · Rest</div>
                <ul className="cs-color-uses">
                  <li>Disabled / inactive states</li>
                  <li>Breath timer backgrounds</li>
                  <li>Skeleton loaders, tags</li>
                </ul>
              </div>
            </div>

            <div className="cs-color-card">
              <div className="cs-color-swatch" style={{ background: '#c94e11' }}>
                <span className="cs-color-hex" style={{ color: '#fff9f0' }}>#c94e11</span>
              </div>
              <div className="cs-color-body">
                <div className="cs-color-name">Ember Orange</div>
                <div className="cs-color-role">CTA / Primary Action</div>
                <div className="cs-color-emotion">Energy · Urgency · Passion</div>
                <ul className="cs-color-uses">
                  <li>Primary action buttons</li>
                  <li>Streaks & notifications</li>
                  <li>Onboarding CTAs</li>
                </ul>
              </div>
            </div>

            <div className="cs-color-card" style={{ border: '2px dashed rgba(107,158,120,0.4)' }}>
              <div className="cs-color-swatch" style={{ background: '#6b9e78' }}>
                <span className="cs-color-hex" style={{ color: '#fff9f0' }}>#6b9e78</span>
              </div>
              <div className="cs-color-body">
                <div className="cs-color-name">Sage Mist</div>
                <div className="cs-color-role">Success</div>
                <div className="cs-color-emotion">Growth · Completion · Peace</div>
                <ul className="cs-color-uses">
                  <li>Completed meditation sessions</li>
                  <li>Saved artwork confirmations</li>
                  <li>Streak milestones</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* DARK PREVIEW */}
        <div className="cs-dark-preview">
          <div className="cs-dp-label">Dark Mode Preview</div>
          <div className="cs-dp-title">Begin your practice.</div>
          <p className="cs-dp-body">Find stillness in the space between brushstrokes. Your creative session awaits — all your tools, intentions, and reflections, in one mindful space.</p>
          <div className="cs-dp-buttons">
            <button className="cs-dp-btn cs-dp-btn-primary">Start Session</button>
            <button className="cs-dp-btn cs-dp-btn-secondary">Browse Art</button>
            <button className="cs-dp-btn cs-dp-btn-ghost">Journal</button>
            <button className="cs-dp-btn cs-dp-btn-disabled">Locked</button>
          </div>
        </div>

        {/* TOKENS */}
        <section className="cs-section">
          <div className="cs-section-label">Design Tokens</div>
          <div className="cs-token-grid">
            {[
              { name: 'color/dark',         val: '#1a1816', bg: '#1a1816' },
              { name: 'color/light-bg',     val: '#fff9f0', bg: '#fff9f0', border: '1px solid rgba(166,124,82,0.2)' },
              { name: 'color/light-accent', val: '#a67c52', bg: '#a67c52' },
              { name: 'color/dark-accent',  val: '#c9a87c', bg: '#c9a87c' },
              { name: 'color/grey-accent',  val: '#b9cad1', bg: '#b9cad1' },
              { name: 'color/cta',          val: '#c94e11', bg: '#c94e11' },
              { name: 'color/success',      val: '#6b9e78', bg: '#6b9e78' },
            ].map((token) => (
              <div className="cs-token-card" key={token.name}>
                <div className="cs-token-dot" style={{ background: token.bg, border: token.border || 'none' }} />
                <div className="cs-token-info">
                  <div className="cs-token-name">{token.name}</div>
                  <div className="cs-token-val">{token.val}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="cs-footer">
          <p>Art & Meditation PWA · Color System v1.0 · 2025</p>
          <div className="cs-footer-swatches">
            {[
              { bg: '#1a1816' },
              { bg: '#fff9f0', border: '1px solid rgba(166,124,82,0.3)' },
              { bg: '#a67c52' },
              { bg: '#c9a87c' },
              { bg: '#b9cad1' },
              { bg: '#c94e11' },
              { bg: '#6b9e78' },
            ].map((dot, i) => (
              <div key={i} className="cs-footer-dot"
                style={{ background: dot.bg, border: dot.border || 'none' }} />
            ))}
          </div>
        </footer>
        <div className="btn-padding">
          <button className="cs-dp-btn cs-dp-btn-primary" onClick={() => navigate('/')}>
              Back to Projects
          </button>
        </div>
      </div>
    </>
  )
}
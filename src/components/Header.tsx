"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={wrapperStyle}>
      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <div style={topBarStyle}>
        <div className="container flex items-center justify-between" style={{ height: '100%' }}>
          {/* Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.82rem', color: '#444' }}>
            <span>🌐 English</span>
          </div>

          {/* Right quick-links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.82rem' }}>
            <Link href="/about-us" style={topLinkStyle}>About Us</Link>
            <Link href="/blog" style={topLinkStyle}>Blog</Link>
            <Link href="/contact-us" style={topLinkStyle}>Ask NeoFatbury</Link>
            <span style={{ color: '#555' }}>Customer Care · 8 AM–10 PM</span>
            <a href="tel:9700641000" style={{ ...topLinkStyle, fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              📞 9700641000
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ────────────────────────────────────────── */}
      <div style={mainNavStyle}>
        <div className="container flex items-center justify-between" style={{ height: '100%' }}>
          {/* Logo */}
          <Link href="/" style={logoStyle}>
            <span style={{ color: 'var(--color-cyan)', fontSize: '2rem', fontWeight: '800' }}>N</span>
            <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.5px' }}>eo</span>
            <span style={{ color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: '500', opacity: 0.8, marginLeft: '2px', textTransform: 'uppercase', letterSpacing: '1.5px', lineHeight: 1 }}>
              <br/>Fatbury<br/>
              <span style={{ fontSize: '0.55rem', letterSpacing: '1px' }}>SKIN · HAIR · SLIMMING</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-desktop">
            <NavDropdown label="Treatments" items={[
              { label: 'Laser Hair Reduction', href: '/skin/laser-hair-reduction' },
              { label: 'Acne & Scar Treatment', href: '/skin/acne-scar-treatment' },
              { label: 'Skin Brightening', href: '/skin/skin-brightening' },
              { label: 'Hair Loss Treatment', href: '/hair/hair-loss-treatment' },
              { label: 'CoolSculpting', href: '/slimming/coolsculpting-fat-freezing' },
              { label: 'Inch Loss', href: '/slimming/inch-loss-treatment' },
            ]} />
            <NavDropdown label="Conditions" items={[
              { label: 'Acne', href: '/skin/acne-scar-treatment' },
              { label: 'Hair Fall', href: '/hair/hair-loss-treatment' },
              { label: 'Pigmentation', href: '/skin/skin-brightening' },
              { label: 'Stubborn Fat', href: '/slimming/coolsculpting-fat-freezing' },
            ]} />
            <NavDropdown label="Gallery" items={[
              { label: 'Results Gallery', href: '/results' },
            ]} />
            <NavDropdown label="Locations" items={[
              { label: 'Kukatpally, Hyderabad', href: '/location/kukatpally-hyderabad' },
              { label: 'Himayatnagar, Hyderabad', href: '/location/himayatnagar-hyderabad' },
            ]} />
          </nav>

          {/* Book Appointment */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/contact-us" className="btn btn-book">
              📅 Book Appointment
            </Link>
            {/* Mobile hamburger */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ fontSize: '1.5rem', color: 'var(--color-primary)', background: 'none', border: 'none' }}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ─────────────────────────────────────── */}
      {mobileOpen && (
        <div style={mobileMenuStyle}>
          <div className="container" style={{ padding: '1.5rem' }}>
            {[
              ['Home', '/'], ['Skin', '/skin'], ['Hair', '/hair'],
              ['Slimming', '/slimming'], ['Results', '/results'],
              ['Blog', '/blog'], ['About Us', '/about-us'],
              ['Contact', '/contact-us'],
            ].map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '0.75rem 0', borderBottom: '1px solid var(--color-border)', color: 'var(--color-primary)', fontWeight: '500' }}>
                {label}
              </Link>
            ))}
            <Link href="/contact-us" className="btn btn-book" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
              📅 Book Appointment
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop { }
        .nav-mobile-toggle { display: none !important; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}

/* ─── NavDropdown Component ──────────────────────────────── */
function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button style={navBtnStyle}>
        {label} <span style={{ fontSize: '0.65rem', marginLeft: '2px' }}>▼</span>
      </button>
      {open && (
        <div style={dropdownStyle}>
          {items.map(item => (
            <Link key={item.href} href={item.href} style={dropItemStyle}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f8f8')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Styles ─────────────────────────────────────────────── */
const wrapperStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, right: 0,
  zIndex: 1000,
  boxShadow: '0 2px 12px rgba(0,80,82,0.08)',
};

const topBarStyle: React.CSSProperties = {
  backgroundColor: '#e8f6f7',
  borderBottom: '1px solid #cce5e6',
  height: '38px',
};

const mainNavStyle: React.CSSProperties = {
  backgroundColor: 'white',
  height: '68px',
  display: 'flex',
  alignItems: 'center',
};

const topLinkStyle: React.CSSProperties = {
  color: '#444',
  transition: 'color 0.2s',
  fontSize: '0.82rem',
};

const logoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  lineHeight: 1,
  textDecoration: 'none',
};

const navBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontFamily: 'var(--font-heading)',
  fontWeight: '600',
  fontSize: '0.9rem',
  color: 'var(--color-primary)',
  cursor: 'pointer',
  padding: '0.25rem 0',
};

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  minWidth: '220px',
  backgroundColor: 'white',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  border: '1px solid var(--color-border)',
  overflow: 'hidden',
  zIndex: 100,
};

const dropItemStyle: React.CSSProperties = {
  display: 'block',
  padding: '0.75rem 1.25rem',
  fontSize: '0.9rem',
  color: 'var(--color-text)',
  transition: 'background 0.2s',
  borderBottom: '1px solid #f0f0f0',
};

const mobileMenuStyle: React.CSSProperties = {
  backgroundColor: 'white',
  borderTop: '1px solid var(--color-border)',
  maxHeight: '80vh',
  overflowY: 'auto',
};

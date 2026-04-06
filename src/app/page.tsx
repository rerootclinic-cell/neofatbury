"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

// ─── Hero Slides ─────────────────────────────────────────────
const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600',
    heading: 'Glow Up This Season.',
    sub: 'Laser Hair Reduction with US-FDA Approved Technology',
    badge: 'Treatment Planned by Dermatologists',
  },
  {
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1600',
    heading: 'Clear Skin. Real Confidence.',
    sub: 'Advanced Acne & Scar Treatments by Expert Dermatologists',
    badge: 'US-FDA Approved Laser Technology',
  },
  {
    image: 'https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=1600',
    heading: 'Sculpt the Body You Deserve.',
    sub: 'Non-surgical CoolSculpting & Inch Loss — No Downtime',
    badge: 'Clinically Proven Results',
  },
  {
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1600',
    heading: 'Revive Your Hair. Reclaim Your Look.',
    sub: 'Advanced Hair Loss Treatments Designed for You',
    badge: 'Personalized by MD-Certified Specialists',
  },
];

// ─── Why Choose Cards ─────────────────────────────────────────
const WHY_CARDS = [
  { icon: '👩‍⚕️', text: 'Expert dermatologists with 10+ years of clinical experience.' },
  { icon: '🔬', text: 'A detailed consultation to understand your skin, hair & body.' },
  { icon: '✅', text: 'US-FDA approved equipment ensuring safety and effectiveness.' },
  { icon: '📈', text: 'Achieve significant visible improvement in just a few sessions.' },
  { icon: '💳', text: 'No hidden costs. Full transparency at every step of the process.' },
  { icon: '😊', text: 'Served 15,000+ happy clients with a 95% satisfaction rate.' },
];

// ─── Treatments Tab ───────────────────────────────────────────
const TREATMENTS = {
  Skin: {
    desc: 'We specialise in advanced dermatology & aesthetic skin treatments to help you achieve flawless, radiant skin. Our expert dermatologists personalise treatments to give you healthy, glowing skin.',
    items: [
      { title: 'Laser Hair Reduction',  img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=400', href: '/skin/laser-hair-reduction' },
      { title: 'Acne Scar Treatment',   img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400', href: '/skin/acne-scar-treatment' },
      { title: 'Skin Brightening',      img: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=400', href: '/skin/skin-brightening' },
      { title: 'Pigmentation Treatment',img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400', href: '/skin/skin-brightening' },
      { title: 'Anti-Aging Treatments', img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=400', href: '/skin' },
    ],
  },
  Hair: {
    desc: 'Advanced clinical solutions designed to address hair loss, dandruff, and scalp health. Our trichologists craft personalised treatment plans using the latest hair restoration techniques.',
    items: [
      { title: 'Hair Loss Treatment',   img: 'https://images.unsplash.com/photo-1634225251648-525cd882c815?q=80&w=400', href: '/hair/hair-loss-treatment' },
      { title: 'Hair Transplantation',  img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400', href: '/hair/hair-transplantation' },
      { title: 'Anti-Dandruff',         img: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400', href: '/hair/anti-dandruff-treatment' },
      { title: 'Hair Regrowth Therapy', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400', href: '/hair/hair-loss-treatment' },
    ],
  },
  Body: {
    desc: 'Non-surgical body contouring and slimming treatments for visible, lasting results. From CoolSculpting to targeted inch loss — reshape your body without any surgery or downtime.',
    items: [
      { title: 'CoolSculpting',          img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400', href: '/slimming/coolsculpting-fat-freezing' },
      { title: 'Inch Loss Treatment',    img: 'https://images.unsplash.com/photo-1518611507436-b5183355be88?q=80&w=400', href: '/slimming/inch-loss-treatment' },
      { title: 'Weight Loss Program',    img: 'https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=400', href: '/slimming/weight-loss-treatment' },
      { title: 'Body Contouring',        img: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=400', href: '/slimming' },
    ],
  },
};

export default function Home() {
  const [slide, setSlide]            = useState(0);
  const [tab, setTab]                = useState<'Skin' | 'Hair' | 'Body'>('Skin');
  const [treatmentScroll, setTreatmentScroll] = useState(0);

  const next = useCallback(() => setSlide(s => (s + 1) % SLIDES.length), []);
  const prev = useCallback(() => setSlide(s => (s - 1 + SLIDES.length) % SLIDES.length), []);

  // Auto-play hero slider
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  // Scroll treatment carousel on arrow click
  useEffect(() => {
    const row = document.getElementById('treatment-row');
    if (row) row.scrollLeft = treatmentScroll * 210;
  }, [treatmentScroll]);

  const s = SLIDES[slide];

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          1. HERO SLIDER
      ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: '82vh', minHeight: '500px', overflow: 'hidden' }}>
        {/* Slide image */}
        <div style={{ position: 'absolute', inset: 0, transition: 'opacity 0.8s ease' }}>
          <Image src={s.image} alt={s.heading} fill priority style={{ objectFit: 'cover', objectPosition: 'top center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,80,82,0.75) 0%, rgba(0,80,82,0.2) 60%, transparent 100%)' }} />
        </div>

        {/* Text Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: '580px', color: 'white' }}>
            <span style={{ display: 'inline-block', backgroundColor: 'var(--color-cta)', color: 'white', padding: '0.3rem 1rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {s.badge}
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-heading)', fontWeight: '800', lineHeight: 1.15, marginBottom: '1rem', color: 'white' }}>
              {s.heading}
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '2rem', opacity: 0.9 }}>{s.sub}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact-us" className="btn btn-cta">Book Free Consultation</Link>
              <a href="tel:9700641000" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>📞 9700641000</a>
            </div>
          </div>

          {/* Lead Form Card */}
          <div style={{ marginLeft: 'auto', display: 'none' }} className="hero-form">
            <LeadForm title="Get Expert Consultation" />
          </div>
        </div>

        {/* Arrows */}
        <button className="hero-arrow" onClick={prev} style={arrowStyle('left')}>‹</button>
        <button className="hero-arrow" onClick={next} style={arrowStyle('right')}>›</button>

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 3 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              style={{ width: i === slide ? '28px' : '10px', height: '10px', borderRadius: '5px', border: 'none', backgroundColor: i === slide ? 'white' : 'rgba(255,255,255,0.5)', transition: 'all 0.3s', cursor: 'pointer' }} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. WHY CHOOSE NEOFATBURY — matching Oliva style
      ══════════════════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container text-center">
          <h2 className="section-title">Why Choose NeoFatbury for Skin, Hair & Slimming Treatments</h2>
          <p className="section-subtitle">Trusted clinical care backed by science, technology and compassion.</p>

          {/* 4-column top row + 2 centred below — exactly like Oliva */}
          <div className="grid grid-4" style={{ marginBottom: '1.25rem' }}>
            {WHY_CARDS.slice(0, 4).map((c, i) => (
              <WhyCard key={i} icon={c.icon} text={c.text} />
            ))}
          </div>
          <div className="grid grid-2" style={{ maxWidth: '620px', margin: '0 auto' }}>
            {WHY_CARDS.slice(4).map((c, i) => (
              <WhyCard key={i} icon={c.icon} text={c.text} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. DOCTORS & STATS — Oliva-style split section
      ══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#e8f6f7', padding: '5rem 0', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>

          {/* LEFT — Doctors image with teal circle bg + floating stat badges */}
          <div style={{ flex: '1 1 320px', position: 'relative', minHeight: '360px', maxWidth: '100%' }}>
            {/* Teal circle background */}
            <div style={{
              position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
              width: 'min(340px, 90vw)', height: 'min(340px, 90vw)', borderRadius: '50%',
              backgroundColor: 'var(--color-cyan)', opacity: 0.18, zIndex: 0
            }} />

            {/* Doctors image */}
            <div style={{ position: 'relative', zIndex: 1, height: '360px' }}>
              <Image
                src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=800"
                alt="NeoFatbury Expert Dermatologists"
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
              />
            </div>

            {/* Floating stat badges */}
            <div className="stat-badge" style={statBadge('top: 10%; left: 0')}>
              <span style={{ fontSize: '1.5rem', color: 'var(--color-cyan)' }}>🏅</span>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '1.1rem', lineHeight: 1 }}>10 +</div>
                <div style={{ fontSize: '0.78rem', color: '#555', lineHeight: 1.3 }}>Years of<br/>Experience</div>
              </div>
            </div>

            <div className="stat-badge" style={statBadge('top: 38%; right: -15px')}>
              <span style={{ fontSize: '1.5rem', color: 'var(--color-cyan)' }}>📍</span>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '1.1rem', lineHeight: 1 }}>2</div>
                <div style={{ fontSize: '0.78rem', color: '#555', lineHeight: 1.3 }}>Premium<br/>Clinics</div>
              </div>
            </div>

            <div className="stat-badge" style={statBadge('bottom: 12%; left: 0')}>
              <span style={{ fontSize: '1.5rem', color: 'var(--color-cyan)' }}>👥</span>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '1.1rem', lineHeight: 1 }}>15K +</div>
                <div style={{ fontSize: '0.78rem', color: '#555', lineHeight: 1.3 }}>Happy<br/>Clients</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Text content */}
          <div style={{ flex: '1 1 380px' }}>
            <p style={{ color: 'var(--color-cyan)', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
              Expert Care
            </p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: 'var(--font-heading)', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              Best Dermatologists &amp;<br/>Trichologists in Hyderabad
            </h2>
            <p style={{ color: 'var(--color-cyan)', fontWeight: '500', marginBottom: '1.25rem' }}>
              Leading Skin, Hair &amp; Slimming Clinic in Hyderabad
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.97rem' }}>
              NeoFatbury is a chain of leading medico-aesthetic clinics, revolutionizing the concept of aesthetic
              dermatology in Hyderabad. Our expert Dermatologists and Trichologists are rigorously trained to
              give real results for all your skin, hair, and body concerns.
            </p>
            <Link href="/our-doctors" className="btn btn-cyan" style={{ padding: '0.875rem 2rem' }}>
              View Our Doctors →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. TREATMENTS (Tabbed — Skin / Hair / Body)
      ══════════════════════════════════════════════════════ */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <h2 className="section-title text-center">Our Treatments</h2>

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '1.5rem 0 1rem' }}>
            {(['Skin', 'Hair', 'Body'] as const).map(t => (
              <button key={t} onClick={() => { setTab(t); setTreatmentScroll(0); }}
                style={{ padding: '0.55rem 1.75rem', borderRadius: '4px', fontFamily: 'var(--font-heading)', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', border: '2px solid var(--color-cyan)', color: tab === t ? 'white' : 'var(--color-text)', backgroundColor: tab === t ? 'var(--color-cyan)' : 'transparent', transition: 'all 0.25s' }}>
                {t}
              </button>
            ))}
          </div>

          {/* Tab description */}
          <p style={{ textAlign: 'center', fontSize: '0.93rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            {TREATMENTS[tab].desc}
          </p>

          {/* Circular Treatment Cards Carousel */}
          <div style={{ position: 'relative' }}>
            {/* Cards row — overflow hidden for carousel */}
            <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: '0.5rem', scrollbarWidth: 'none' }} id="treatment-row">
              {TREATMENTS[tab].items.map(item => (
                <Link key={item.href} href={item.href} style={{ textDecoration: 'none', flexShrink: 0, textAlign: 'center', width: '185px' }}>
                  {/* Circle image container */}
                  <div style={{ position: 'relative', width: '185px', height: '185px', borderRadius: '50%', overflow: 'hidden', backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-border)' }}>
                    <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                    {/* Teal arrow overlay at bottom */}
                    <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.1rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,162,167,0.4)' }}>
                      →
                    </div>
                  </div>
                  <p style={{ marginTop: '1rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--color-text)', lineHeight: 1.4 }}>{item.title}</p>
                </Link>
              ))}
            </div>

            {/* Scroll arrows */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <button onClick={() => setTreatmentScroll(s => Math.max(0, s - 1))}
                style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--color-cyan)', backgroundColor: 'white', color: 'var(--color-cyan)', fontSize: '1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                ‹
              </button>
              <button onClick={() => setTreatmentScroll(s => s + 1)}
                style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--color-cyan)', backgroundColor: 'white', color: 'var(--color-cyan)', fontSize: '1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                ›
              </button>
            </div>
          </div>

          {/* View All */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href={`/${tab.toLowerCase()}`} className="btn btn-cyan" style={{ padding: '0.75rem 2.5rem' }}>
              View all
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          4. RESULTS TEASER
      ══════════════════════════════════════════════════════ */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Real Transformations. Real Confidence.</h2>
          <p className="section-subtitle">Before &amp; after results from our clients across skin, hair and body treatments.</p>
          <div className="grid grid-3" style={{ marginBottom: '2.5rem' }}>
            {[
              { label: 'Laser Hair Reduction', color: '#e8f6f7' },
              { label: 'Acne Scar Treatment', color: '#f0f8e8' },
              { label: 'CoolSculpting',        color: '#f8f0e8' },
            ].map(r => (
              <div key={r.label} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '220px', backgroundColor: r.color, display: 'flex' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid white', fontSize: '0.85rem', color: '#999', fontWeight: '600' }}>BEFORE</div>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600' }}>AFTER</div>
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>{r.label}</h4>
                </div>
              </div>
            ))}
          </div>
          <Link href="/results" className="btn btn-book">View Full Gallery</Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. LOCATIONS CTA (teal bg — like Oliva)
      ══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--color-primary)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '0.75rem' }}>Visit Our Clinics in Hyderabad</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '3rem' }}>Two convenient locations — Kukatpally &amp; Himayatnagar.</p>

          <div className="grid grid-2" style={{ maxWidth: '860px', margin: '0 auto' }}>
            {[
              { name: 'Kukatpally Branch', addr: 'Road No 1, KPHB Colony, Hyderabad', href: '/location/kukatpally-hyderabad' },
              { name: 'Himayatnagar Branch', addr: 'Main Road, Himayatnagar, Hyderabad', href: '/location/himayatnagar-hyderabad' },
            ].map(loc => (
              <div key={loc.href} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '2.5rem 2rem', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{loc.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{loc.addr}</p>
                <Link href={loc.href} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>View on Maps</Link>
                <p style={{ textAlign: 'center', fontWeight: '600', color: 'var(--color-cyan)' }}>📞 9700641000</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. FINAL LEAD FORM CTA
      ══════════════════════════════════════════════════════ */}
      <section className="section bg-surface" id="book">
        <div className="container" style={{ maxWidth: '500px' }}>
          <h2 className="section-title text-center">Book Your Consultation Today</h2>
          <p className="section-subtitle text-center">Our dermatologists will call you back within 1 hour.</p>
          <LeadForm title="Schedule Expert Consultation" />
        </div>
      </section>

      {/* Hero styles */}
      <style>{`
        @media (min-width: 901px) {
          .hero-form { display: block !important; }
        }
        @media (max-width: 768px) {
          .hero-arrow { display: none !important; }
          .stat-badge {
            padding: 0.5rem 0.75rem !important;
            min-width: 120px !important;
          }
          .stat-badge > span { font-size: 1.25rem !important; }
          .stat-badge div div:first-child { font-size: 1rem !important; }
          .stat-badge div div:last-child { font-size: 0.7rem !important; }
        }
      `}</style>
    </>
  );
}

function WhyCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{
      backgroundColor: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: '10px',
      padding: '1.75rem 1.5rem',
      textAlign: 'center',
      transition: 'all 0.3s',
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,80,82,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-cyan)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = ''; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'; }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

function statBadge(pos: string): React.CSSProperties {
  return {
    position: 'absolute',
    ...Object.fromEntries(pos.split(';').map(p => {
      const [k, v] = p.split(':').map(s => s.trim());
      return [k, v];
    })),
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '0.75rem 1rem',
    boxShadow: '0 4px 16px rgba(0,80,82,0.12)',
    minWidth: '145px',
  } as React.CSSProperties;
}

function arrowStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '1.5rem',
    transform: 'translateY(-50%)',
    zIndex: 3,
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.25)',
    border: '2px solid rgba(255,255,255,0.6)',
    color: 'white',
    fontSize: '1.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backdropFilter: 'blur(4px)',
    transition: 'background 0.3s',
  };
}

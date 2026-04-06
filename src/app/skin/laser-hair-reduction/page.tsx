import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function LaserHairRemoval() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="service-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', minHeight: '60vh' }}>
          <div style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="animate-fade-in">
              Smooth Skin. <br/><span className="text-accent">Zero Hassle.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              Permanent hair reduction with advanced, US-FDA approved laser technology.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="badge">✔ Safe for all skin types</span>
              <span className="badge">✔ Dermatologist supervised</span>
              <span className="badge">✔ Visible results in few sessions</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#book" className="btn btn-primary">Book Free Consultation</a>
              <a href="tel:9700641000" className="btn btn-outline">Call Now</a>
            </div>
          </div>
          
          <div style={{ flex: '1 1 400px' }} id="book">
            <LeadForm title="Get Free Consultation" />
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Still Struggling with <span className="text-accent">Shaving & Waxing?</span></h2>
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Tired of Shaving?</h3>
              <p className="text-muted">Frequent shaving takes time and leaves rough stubble.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Painful Waxing?</h3>
              <p className="text-muted">Painful monthly sessions that damage skin elasticity.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ingrown Hair?</h3>
              <p className="text-muted">Skin irritation and dark spots from constant hair removal.</p>
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', marginTop: '3rem', fontWeight: '500' }}>
            👉 Laser hair removal is a long-term, painless solution.
          </p>
        </div>
      </section>

      {/* 3. WHAT IS LASER HAIR REMOVAL */}
      <section className="section bg-surface">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>What is <span className="text-accent">Laser Hair Removal?</span></h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Laser Hair Removal is a safe and effective procedure that uses focused light energy to target hair follicles, reducing hair growth over time.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <li>✔ Precise</li>
              <li>✔ Fast</li>
              <li>✔ Minimal discomfort</li>
            </ul>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Suitable for:</h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Face', 'Underarms', 'Legs', 'Bikini area', 'Full body'].map(area => (
                <span key={area} className="badge" style={{ backgroundColor: 'white', border: '1px solid var(--color-border)' }}>{area}</span>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
             <Image src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800" alt="Laser Procedure" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 4. BEFORE / AFTER SECTION */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">See the <span className="text-accent">Transformation</span></h2>
          <p className="section-subtitle">Real results from our clients after laser treatment.</p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem', height: '400px', position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid white' }}>
              <h3 style={{ color: '#888' }}>Before</h3>
            </div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#eefcf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ color: 'var(--color-accent)' }}>After</h3>
            </div>
          </div>
          
          <Link href="#book" className="btn btn-primary">Book Your Transformation Today</Link>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">How the <span className="text-accent">Treatment Works</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3rem' }}>
            {[
              { step: '1', title: 'Consultation', desc: 'Skin & hair analysis' },
              { step: '2', title: 'Preparation', desc: 'Area cleaned & prepped' },
              { step: '3', title: 'Laser Session', desc: 'Quick & precise treatment' },
              { step: '4', title: 'Post Care', desc: 'Cooling & guidance' }
            ].map(item => (
              <div key={item.step} className="card text-center" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', margin: '0 auto 1rem' }}>
                  {item.step}
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center" style={{ marginTop: '2rem', fontWeight: '500' }}>👉 Each session: 15–45 mins</p>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center">Frequently <span className="text-accent">Asked Questions</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Q1: Is it painful?</h4>
              <p className="text-muted">Minimal discomfort, much less than waxing.</p>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Q2: How many sessions needed?</h4>
              <p className="text-muted">Typically 6–8 sessions.</p>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Q3: Is it safe?</h4>
              <p className="text-muted">Yes, performed by trained professionals.</p>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Q4: Results permanent?</h4>
              <p className="text-muted">Long-term hair reduction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="section bg-primary text-center" style={{ padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>Ready for Smooth Skin?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Say goodbye to unwanted hair forever.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="#book" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Get Free Consultation</Link>
          <a href="tel:9700641000" className="btn btn-accent">Call Now</a>
        </div>
      </section>

      <style>{`
        .service-hero {
          background: linear-gradient(135deg, #f0f7f6 0%, #ffffff 100%);
          padding: 4rem 0;
        }
      `}</style>
    </>
  );
}

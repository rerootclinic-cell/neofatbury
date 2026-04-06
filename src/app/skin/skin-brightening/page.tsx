import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function SkinBrightening() {
  return (
    <>
      <section className="service-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', minHeight: '60vh' }}>
          <div style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="animate-fade-in">
              Reveal Brighter, <br/><span className="text-accent">Radiant Skin.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              Advanced skin brightening treatments for even tone, glow, and confidence.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="badge">✔ Safe & dermatologist-approved</span>
              <span className="badge">✔ Visible glow in few sessions</span>
              <span className="badge">✔ Customized for your skin</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#book" className="btn btn-primary">Book Free Consultation</a>
              <a href="tel:9700641000" className="btn btn-outline">Call Now</a>
            </div>
          </div>
          
          <div style={{ flex: '1 1 400px' }} id="book">
            <LeadForm title="Get Skin Analysis" />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Dull, Uneven or <span className="text-accent">Pigmented Skin?</span></h2>
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Dark Spots</h3>
              <p className="text-muted">Pigmentation and persistent dark spots appearing on face and neck.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Sun Tanning</h3>
              <p className="text-muted">Severe sun damage leading to uneven skin tone and tanning.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Dull Skin</h3>
              <p className="text-muted">Loss of natural healthy glow making your face look tired.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>What is <span className="text-accent">Skin Brightening?</span></h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Skin brightening treatments focus on improving skin tone, reducing pigmentation, and restoring natural glow using advanced, dermatologically proven procedures.
            </p>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Treatment options:</h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ backgroundColor: 'white', border: '1px solid var(--color-border)' }}>Chemical Peels</span>
              <span className="badge" style={{ backgroundColor: 'white', border: '1px solid var(--color-border)' }}>Laser Toning</span>
              <span className="badge" style={{ backgroundColor: 'white', border: '1px solid var(--color-border)' }}>Medi-facials</span>
            </div>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
             <Image src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800" alt="Skin Glowing Procedure" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Glow You <span className="text-accent">Can See</span></h2>
          <p className="section-subtitle">Notice visible improvement in brightness, clarity, and even skin tone.</p>
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem', height: '400px', position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid white' }}>Before</div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#eefcf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>After</div>
          </div>
          <Link href="#book" className="btn btn-primary">Start Your Glow Journey Today</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Our <span className="text-accent">Process</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3rem' }}>
            {[
              { step: '1', title: 'Skin Analysis', desc: 'Understand your skin type and pigmentation depth.' },
              { step: '2', title: 'Custom Plan', desc: 'Designed exactly for your unique skin concerns.' },
              { step: '3', title: 'Treatment', desc: 'Safe medi-facials and peels.' },
              { step: '4', title: 'Maintenance', desc: 'Specialized care routines for long-lasting glow.' }
            ].map(item => (
              <div key={item.step} className="card text-center" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', margin: '0 auto 1rem' }}>{item.step}</div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-center" style={{ padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>Ready for Radiant Skin?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Let your skin glow with true confidence.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="#book" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Book Appointment</Link>
          <a href="tel:9700641000" className="btn btn-accent">Get Free Consultation</a>
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

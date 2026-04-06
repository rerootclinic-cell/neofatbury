import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function HairLossTreatment() {
  return (
    <>
      <section className="service-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', minHeight: '60vh' }}>
          <div style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="animate-fade-in">
              Stop Hair Loss. <br/><span className="text-accent">Regrow Stronger Hair.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              Advanced doctor-led hair loss treatments designed to restore healthy hair growth and absolute confidence.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="badge">✔ Clinically proven treatments</span>
              <span className="badge">✔ Dermatologist supervision</span>
              <span className="badge">✔ Visible results</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#book" className="btn btn-primary">Book Free Consultation</a>
              <a href="tel:9700641000" className="btn btn-outline">Call Now</a>
            </div>
          </div>
          
          <div style={{ flex: '1 1 400px' }} id="book">
            <LeadForm title="Get Hair Analysis" />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Facing Hair Loss <span className="text-accent">or Thinning?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Excessive Hair Fall</h3>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Thinning Crown</h3>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Receding Hairline</h3>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Weak, Lifeless Hair</h3>
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', marginTop: '3rem', fontWeight: '500' }}>
            👉 Hair loss is incredibly common — and it is totally treatable.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>What is <span className="text-accent">Hair Loss Treatment?</span></h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Hair loss treatment at NeoFatbury focuses on identifying the specific root cause and using advanced clinical techniques to strengthen dormant hair follicles and vigorously promote regrowth.
            </p>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Common Causes We Address:</h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Genetics', 'Hormonal Imbalance', 'Stress', 'Nutritional Deficiency', 'Lifestyle'].map(cause => (
                <span key={cause} className="badge" style={{ backgroundColor: 'white', border: '1px solid var(--color-border)' }}>{cause}</span>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
             <Image src="https://images.unsplash.com/photo-1634225251648-525cd882c815?q=80&w=800" alt="Hair Loss Treatment" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section bg-primary text-center" style={{ padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>Ready to Regrow Your Hair?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Take the very first step towards thicker, heathier head of hair today.</p>
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

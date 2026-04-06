import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function AcneScarTreatment() {
  return (
    <>
      <section className="service-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', minHeight: '60vh' }}>
          <div style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="animate-fade-in">
              Clear Skin <br/><span className="text-accent">Starts Here.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              Advanced acne & scar treatments backed by dermatology experts. Smooth Skin. Visible Scar Reduction.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="badge">✔ Safe & clinically proven</span>
              <span className="badge">✔ Personalized treatment plans</span>
              <span className="badge">✔ Visible results</span>
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
          <h2 className="section-title">Struggling with <span className="text-accent">Acne & Scars?</span></h2>
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Persistent Breakouts?</h3>
              <p className="text-muted">Pimples and regular breakouts that just won’t seem to stop.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Dark Spots?</h3>
              <p className="text-muted">Stubborn dark marks and pigmentation left over after acne heals.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Uneven Texture?</h3>
              <p className="text-muted">Deep acne scars or surgical scars affecting your skin's smoothness.</p>
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', marginTop: '3rem', fontWeight: '500' }}>
            👉 You’re not alone — and it’s completely treatable.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>What is <span className="text-accent">Acne & Scar Treatment?</span></h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Acne and scar treatment involves advanced dermatological procedures like medical peels, laser therapy, and skin resurfacing. We target the root cause of acne, reduce inflammation, and stimulate healthy skin regeneration to fade scars.
            </p>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Types We Treat:</h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Whiteheads/Blackheads', 'Hormonal Acne', 'Cystic Acne', 'Acne Scars', 'Surgical Scars', 'Pigmentation'].map(area => (
                <span key={area} className="badge" style={{ backgroundColor: 'white', border: '1px solid var(--color-border)' }}>{area}</span>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
             <Image src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800" alt="Skin Procedure" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Real Results. <span className="text-accent">Real Confidence.</span></h2>
          <p className="section-subtitle">See visible improvements in acne prevention, scar depth, and overall skin texture.</p>
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem', height: '400px', position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid white' }}>Before</div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#eefcf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>After</div>
          </div>
          <Link href="#book" className="btn btn-primary">Start Your Skin Transformation</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Our Treatment <span className="text-accent">Process</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3rem' }}>
            {[
              { step: '1', title: 'Skin Analysis', desc: 'Understand your specific skin type and trigger factors.' },
              { step: '2', title: 'Custom Plan', desc: 'A tailored plan based on acne and scar severity.' },
              { step: '3', title: 'Treatment', desc: 'Advanced, safe medical procedures.' },
              { step: '4', title: 'Follow-up Care', desc: 'Guidance and products for long-lasting results.' }
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

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center">Frequently <span className="text-accent">Asked Questions</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Q1: Can scars be completely removed?</h4>
              <p className="text-muted">Scars can be significantly reduced and improved to blend naturally with skin.</p>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Q2: How long does it take to see results?</h4>
              <p className="text-muted">Visible improvement can be seen in just a few sessions depending on severity.</p>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Q3: Will acne come back?</h4>
              <p className="text-muted">We focus on long-term control and prevention through post-care routines.</p>
            </div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Q4: Is there any downtime?</h4>
              <p className="text-muted">There is little to minimal downtime in most laser and peel procedures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-center" style={{ padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>Say Goodbye to Acne</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Start your journey to clear, confident skin today.</p>
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

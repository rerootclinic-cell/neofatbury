import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function WeightLossTreatment() {
  return (
    <>
      <section className="service-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', minHeight: '60vh' }}>
          <div style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="animate-fade-in">
              Lose Weight. <br/><span className="text-accent">Gain Confidence.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              Doctor-guided weight loss programs designed for safe, effective, and lasting results.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="badge">✔ Personalized plans</span>
              <span className="badge">✔ Safe & medically supervised</span>
              <span className="badge">✔ Sustainable results</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#book" className="btn btn-primary">Book Free Consultation</a>
              <a href="tel:9700641000" className="btn btn-outline">Call Now</a>
            </div>
          </div>
          
          <div style={{ flex: '1 1 400px' }} id="book">
            <LeadForm title="Get Body Analysis" />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Struggling to <span className="text-accent">Lose Weight?</span></h2>
          <div className="grid grid-2" style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Yo-yo Weight Loss</h3>
              <p className="text-muted">Weight gain immediately despite dieting and excessive hard work.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Slow Metabolism</h3>
              <p className="text-muted">Persistent low energy and chronically slow metabolism making it harder.</p>
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', marginTop: '3rem', fontWeight: '500' }}>
            👉 You don’t need extreme diets — you simply need the correct medical plan.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>What is <span className="text-accent">Medical Weight Loss?</span></h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Medical weight loss involves personalized programs meticulously based on your body type, natural lifestyle, and health conditions to achieve completely safe and truly sustainable fat loss.
            </p>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(39, 166, 156, 0.1)', borderLeft: '4px solid var(--color-accent)', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }}>
              <strong>Important:</strong> We focus on fat loss and healthy weight management — not quick fixes.
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <li>✔ Diet planning</li>
              <li>✔ Body contouring integration</li>
              <li>✔ Consistent Lifestyle guidance</li>
            </ul>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
             <Image src="https://images.unsplash.com/photo-1518611507436-b5183355be88?q=80&w=800" alt="Body Contouring" fill style={{ objectFit: 'cover' }} />
          </div>
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

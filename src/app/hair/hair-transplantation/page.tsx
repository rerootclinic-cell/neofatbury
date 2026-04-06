import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function HairTransplant() {
  return (
    <>
      <section className="service-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', minHeight: '60vh' }}>
          <div style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="animate-fade-in">
              Restore Your Hair. <br/><span className="text-accent">Restore Your Confidence.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              Advanced hair transplantation for natural-looking, permanent results.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="badge">✔ Natural-looking results</span>
              <span className="badge">✔ Expert surgeons</span>
              <span className="badge">✔ Permanent solution</span>
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

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Struggling with <span className="text-accent">Hair Loss or Baldness?</span></h2>
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Receding Hairline</h3>
              <p className="text-muted">A hairline that is tracking further back over time.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Bald Patches</h3>
              <p className="text-muted">Noticeable patches of deep thinning or complete hair loss on the scalp.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Loss of Confidence</h3>
              <p className="text-muted">Feeling overly anxious or lacking daily confidence due to balding.</p>
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', marginTop: '3rem', fontWeight: '500' }}>
            👉 Hair transplant offers a permanent and effective solution.
          </p>
        </div>
      </section>
      
      <section className="section bg-primary text-center" style={{ padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>Ready to Transform Your Hair?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Take the first step towards a significantly fuller head of hair.</p>
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

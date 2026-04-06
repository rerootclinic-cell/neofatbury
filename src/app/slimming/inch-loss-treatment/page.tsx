import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function InchLossTreatment() {
  return (
    <>
      <section className="service-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', minHeight: '60vh' }}>
          <div style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="animate-fade-in">
              Lose Inches. <br/><span className="text-accent">Shape Your Body.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              Target stubborn localized fat and reduce inches with our advanced contouring procedures.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="badge">✔ Non-surgical procedures</span>
              <span className="badge">✔ Visible inch reduction</span>
              <span className="badge">✔ Highly effective & safe</span>
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

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Struggling with <span className="text-accent">Stubborn Inches?</span></h2>
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Waistline Issues</h3>
              <p className="text-muted">Trouble fitting into your favorite clothes due to waist fat.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Love Handles</h3>
              <p className="text-muted">Stubborn sides that simply refuse to react to workouts.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Specific Problem Areas</h3>
              <p className="text-muted">Excess buildup essentially limited to arms, thighs, or hips.</p>
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', marginTop: '3rem', fontWeight: '500' }}>
            👉 Even after workouts, some fat areas remain — we strictly target those exact spots.
          </p>
        </div>
      </section>
      
      <section className="section bg-primary text-center" style={{ padding: '6rem 1.5rem' }}>
        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>Ready to Reduce Inches?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Achieve a slimmer, profoundly contoured body.</p>
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

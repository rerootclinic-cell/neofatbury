import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function CoolSculpting() {
  return (
    <>
      <section className="service-hero">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', minHeight: '60vh' }}>
          <div style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="animate-fade-in">
              Freeze Fat. <br/><span className="text-accent">Shape Your Body.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              Non-surgical fat reduction with advanced body contouring technology.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span className="badge">✔ No surgery, no downtime</span>
              <span className="badge">✔ FDA-approved technology</span>
              <span className="badge">✔ Visible results</span>
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
          <h2 className="section-title">Stubborn Fat <span className="text-accent">That Won't Go Away?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Belly Fat</h3>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Love Handles</h3>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Thigh Fat</h3>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Double Chin</h3>
            </div>
          </div>
          <p style={{ fontSize: '1.25rem', marginTop: '3rem', fontWeight: '500' }}>
            👉 Even with diet & exercise, some fat stays — we help remove it safely.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>What is <span className="text-accent">CoolSculpting?</span></h2>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              CoolSculpting is a non-invasive fat reduction treatment that uses controlled cooling to freeze and eliminate stubborn fat cells. The body then naturally removes these fat cells over time.
            </p>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(39, 166, 156, 0.1)', borderLeft: '4px solid var(--color-accent)', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }}>
              <strong>Important:</strong> This is a body contouring procedure for specific areas, not a general weight-loss method.
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <li>✔ Permanent fat reduction</li>
              <li>✔ Natural-looking results</li>
              <li>✔ No invasive surgery</li>
            </ul>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
             <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" alt="Body Contouring" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">See the <span className="text-accent">Difference</span></h2>
          <p className="section-subtitle">Visible reduction in fat and significantly improved body contour.</p>
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem', height: '400px', position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '2px solid white' }}>Before</div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', backgroundColor: '#eefcf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>After</div>
          </div>
          <Link href="#book" className="btn btn-primary">Start Your Transformation</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">How It <span className="text-accent">Works</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3rem' }}>
            {[
              { step: '1', title: 'Consultation', desc: 'Target body areas are mapped out.' },
              { step: '2', title: 'Treatment', desc: 'Controlled cooling is applied.' },
              { step: '3', title: 'Fat Reduction', desc: 'Fat cells crystalize and break down.' },
              { step: '4', title: 'Results', desc: 'Gradual visible change in body shape.' }
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
        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>Ready to Sculpt Your Body?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2rem' }}>Achieve your desired shape gracefully without surgery.</p>
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

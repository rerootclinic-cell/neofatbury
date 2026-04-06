import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <section className="section text-center" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 2rem' }}>
          ✓
        </div>
        <h1 className="section-title text-primary" style={{ marginBottom: '1rem' }}>Thank You!</h1>
        <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Your request has been successfully submitted. Our expert medical team will get back to you shortly to confirm your consultation.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">Return to Home</Link>
          <a href="tel:9700641000" className="btn btn-outline">Call Us Now</a>
        </div>
        
        {/* Placeholder for Google Ads Tracking Code if needed */}
      </div>
    </section>
  );
}

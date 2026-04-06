import LeadForm from "@/components/LeadForm";

export default function HimayatnagarLocation() {
  return (
    <>
      <section className="section" style={{ minHeight: '80vh', backgroundColor: '#F8FAF9' }}>
        <div className="container grid grid-2">
          <div>
            <h1 className="section-title text-primary" style={{ textAlign: 'left', marginBottom: '1rem' }}>Our Himayatnagar Clinic</h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Experience the absolute best in dermatology and clinical aesthetic treatments in the heart of Himayatnagar, Hyderabad.
            </p>
            <address style={{ fontStyle: 'normal', fontSize: '1.1rem', marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <strong>NeoFatbury Clinic - Himayatnagar</strong><br/>
              Main Road, Himayatnagar,<br/>
              Near Main Signal, Hyderabad, Telangana.<br/><br/>
              <strong>Phone:</strong> <a href="tel:9700641000" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>9700641000</a>
            </address>
          </div>
          <div>
            <LeadForm title="Book Appointment at Himayatnagar" />
          </div>
        </div>
      </section>
    </>
  );
}

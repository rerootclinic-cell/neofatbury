import Image from "next/image";
import LeadForm from "@/components/LeadForm";

export default function KukatpallyLocation() {
  return (
    <>
      <section className="section" style={{ minHeight: '80vh', backgroundColor: '#F8FAF9' }}>
        <div className="container grid grid-2">
          <div>
            <h1 className="section-title text-primary" style={{ textAlign: 'left', marginBottom: '1rem' }}>Our Kukatpally Clinic</h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Experience the absolute best in dermatology and clinical aesthetic treatments in the heart of Kukatpally, Hyderabad.
            </p>
            <address style={{ fontStyle: 'normal', fontSize: '1.1rem', marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <strong>NeoFatbury Clinic - Kukatpally</strong><br/>
              Road No 1, KPHB Colony,<br/>
              Beside Main Road Exit, Hyderabad, Telangana.<br/><br/>
              <strong>Phone:</strong> <a href="tel:9700641000" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>9700641000</a>
            </address>
          </div>
          <div style={{ flex: '1 1 400px' }}>
             <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem' }}>
                <Image src="/images/clinic-reception.webp" alt="NeoFatbury Kukatpally Reception" fill style={{ objectFit: 'cover' }} />
             </div>
             <LeadForm title="Book Appointment at Kukatpally" />
          </div>
        </div>
      </section>
    </>
  );
}

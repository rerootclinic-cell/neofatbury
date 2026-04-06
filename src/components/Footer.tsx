import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={footerStyles}>
      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <div className="grid grid-4" style={{ gap: '3rem' }}>
          
          <div>
            <h3 style={logoStyles}>Neo<span style={{ color: 'var(--color-accent)'}}>Fatbury</span></h3>
            <p style={{ color: 'var(--color-border)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              NeoFatbury is Hyderabad's premier destination for advanced Skin, Hair, and Slimming treatments. Combining US-FDA approved technology with expert dermatological care.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-border)' }}>
              ✅ ISO 9001:2015 Certified <br/>
              ✅ US-FDA Approved Equipment <br/>
              ✅ Certified Dermatologists
            </div>
          </div>

          <div>
            <h4 style={headingStyles}>Skin Care Solutions</h4>
            <ul style={listStyles}>
              <li><Link href="/skin" style={linkStyles}>Advanced Skin Clinic</Link></li>
              <li><Link href="/skin/laser-hair-reduction" style={linkStyles}>Laser Hair Reduction</Link></li>
              <li><Link href="/skin/acne-scar-treatment" style={linkStyles}>Acne Scar Treatment</Link></li>
              <li><Link href="/skin/skin-brightening" style={linkStyles}>Skin Brightening</Link></li>
              <li><Link href="/skin" style={linkStyles}>Chemical Peels</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={headingStyles}>Hair & Slimming</h4>
            <ul style={listStyles}>
              <li><Link href="/hair/hair-loss-treatment" style={linkStyles}>Hair Loss Treatment</Link></li>
              <li><Link href="/hair/anti-dandruff-treatment" style={linkStyles}>Anti-Dandruff Solutions</Link></li>
              <li><Link href="/hair" style={linkStyles}>Hair Regrowth Therapies</Link></li>
              <li><Link href="/slimming/coolsculpting-fat-freezing" style={linkStyles}>CoolSculpting Fat Freezing</Link></li>
              <li><Link href="/slimming/inch-loss-treatment" style={linkStyles}>Inch Loss Treatment</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={headingStyles}>Quick Access</h4>
            <address style={{ fontStyle: 'normal', fontSize: '0.9rem', color: 'var(--color-border)', marginBottom: '1rem' }}>
              <strong>Kukatpally Clinic:</strong><br/>
              Road No 1, KPHB Colony, Hyd.<br/>
              <Link href="/location/kukatpally-hyderabad" style={{ color: 'var(--color-accent)' }}>View Location</Link>
            </address>
            <address style={{ fontStyle: 'normal', fontSize: '0.9rem', color: 'var(--color-border)', marginBottom: '1rem' }}>
              <strong>Himayatnagar Clinic:</strong><br/>
              Main Road, Himayatnagar, Hyd.<br/>
              <Link href="/location/himayatnagar-hyderabad" style={{ color: 'var(--color-accent)' }}>View Location</Link>
            </address>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-border)' }}>
              Call: <a href="tel:9700641000" style={{ color: 'white', fontWeight: 'bold' }}>9700641000</a><br/>
              Email: info@neofatbury.co.in
            </p>
          </div>
          
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/about-us" style={bottomLinkStyles}>About Us</Link>
            <Link href="/our-doctors" style={bottomLinkStyles}>Our Doctors</Link>
            <Link href="/privacy-policy" style={bottomLinkStyles}>Privacy Policy</Link>
            <Link href="/terms-and-conditions" style={bottomLinkStyles}>Terms & Conditions</Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', maxWidth: '800px' }}>
            Disclaimer: Results may vary from person to person depending on individual body types, genetics, and adherence to post-treatment care. All medical procedures are performed by or under the supervision of certified dermatologists.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} NeoFatbury. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const footerStyles: React.CSSProperties = {
  backgroundColor: '#041c2b',
  color: 'white',
  marginTop: 'auto'
};

const logoStyles: React.CSSProperties = {
  fontSize: '1.5rem',
  fontFamily: 'var(--font-primary)',
  color: 'white',
  marginBottom: '1rem'
};

const headingStyles: React.CSSProperties = {
  fontFamily: 'var(--font-primary)',
  color: 'white',
  marginBottom: '1.5rem',
  fontSize: '1.1rem'
};

const listStyles: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem'
};

const linkStyles: React.CSSProperties = {
  color: 'var(--color-border)',
  fontSize: '0.9rem',
  transition: 'color 0.2s'
};

const bottomLinkStyles: React.CSSProperties = {
  color: 'rgba(255,255,255,0.7)',
  fontSize: '0.85rem',
  textDecoration: 'none'
};

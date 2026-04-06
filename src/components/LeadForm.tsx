"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadForm({ title = "Schedule Your Expert Consultation" }: { title?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call and then redirect
    setTimeout(() => {
      router.push('/thank-you');
    }, 500);
  };

  return (
    <div className="card animate-fade-in" style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h3 style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.25rem' }}>{title}</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <input type="text" placeholder="Full Name" required className="input-field" />
        </div>
        <div>
          <input type="tel" placeholder="Mobile Number" required className="input-field" pattern="[0-9]{10}" title="Please enter a valid 10-digit number" />
        </div>
        <div>
          <select required className="input-field" defaultValue="">
            <option value="" disabled>Select Service Interested In</option>
            <option value="Laser Hair Reduction">Laser Hair Reduction</option>
            <option value="Acne Scar Treatment">Acne Scar Treatment</option>
            <option value="Skin Brightening">Skin Brightening</option>
            <option value="Hair Loss Treatment">Hair Loss Treatment</option>
            <option value="CoolSculpting">CoolSculpting (Fat Freezing)</option>
            <option value="Inch Loss">Inch Loss</option>
            <option value="General Consultation">General Consultation</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={loading}>
          {loading ? 'Processing...' : 'Get a Call Back'}
        </button>
      </form>
      <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
        Your data is secure and will never be shared.
      </div>
    </div>
  );
}

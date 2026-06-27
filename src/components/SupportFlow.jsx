import { useState } from 'react';
import { Heart, Gift, Users, Handshake, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure you have exported 'db' from firebase.js

const SupportFlow = () => {
  const [step, setStep] = useState(1);
  const [supportType, setSupportType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    transactionDetails: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const supportOptions = [
    { id: 'financial', title: 'Financial Support', icon: <Heart size={24} />, desc: 'Give a monetary gift to fund our programs.' },
    { id: 'in-kind', title: 'Gift In-Kind Items', icon: <Gift size={24} />, desc: 'Donate physical items like clothes, food, or supplies.' },
    { id: 'volunteer', title: 'Volunteer Time', icon: <Users size={24} />, desc: 'Offer your skills, time, and expertise.' },
    { id: 'partner', title: 'Corporate / Partner', icon: <Handshake size={24} />, desc: 'Form an organizational partnership.' }
  ];

  const handleSelect = (id) => {
    setSupportType(id);
    setStep(2);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Save to Firebase Firestore
      await addDoc(collection(db, 'supporters'), {
        supportType,
        ...formData,
        createdAt: new Date().toISOString()
      });

      setStep(3); // Go to success step
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an issue submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '0', overflow: 'hidden' }}>
      
      {/* Progress Bar */}
      <div style={{ display: 'flex', height: '6px', backgroundColor: 'var(--bg-sand-dark)' }}>
        <div style={{ width: `${(step / 3) * 100}%`, backgroundColor: 'var(--primary)', transition: 'width 0.4s ease' }}></div>
      </div>

      <div style={{ padding: '3rem' }}>
        
        {/* Step 1: Impact Selector */}
        {step === 1 && (
          <div className="animate-fade">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase' }}>Step 1 of 3</span>
              <h2 style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>How would you like to help?</h2>
              <p style={{ color: 'var(--text-muted)' }}>Choose the path that best fits how you want to make an impact today.</p>
            </div>

            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
              {supportOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    border: '2px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--surface)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.backgroundColor = 'rgba(var(--primary-rgb), 0.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.backgroundColor = 'var(--surface)';
                  }}
                >
                  <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{opt.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{opt.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Tailored Form */}
        {step === 2 && (
          <div className="animate-fade">
            <button 
              onClick={() => setStep(1)} 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', background: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: '600' }}
            >
              <ArrowLeft size={16} /> Back to Options
            </button>

            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase' }}>Step 2 of 3</span>
              <h2 style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                {supportType === 'financial' && 'Financial Support Details'}
                {supportType === 'in-kind' && 'Gift In-Kind Details'}
                {supportType === 'volunteer' && 'Volunteer Application'}
                {supportType === 'partner' && 'Partnership Inquiry'}
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>Please provide your details so we can connect with you.</p>
            </div>

            {error && (
              <div style={{ backgroundColor: '#ffebee', color: '#c62828', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.9rem', fontWeight: '600' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Full Name *</label>
                  <input type="text" name="name" required className="form-control" value={formData.name} onChange={handleInputChange} placeholder="Jane Doe" />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Email Address *</label>
                  <input type="email" name="email" required className="form-control" value={formData.email} onChange={handleInputChange} placeholder="jane@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleInputChange} placeholder="+254 700 000000" />
              </div>

              {supportType === 'financial' && (
                <>
                  <div className="form-group">
                    <label className="form-label">Pledge Amount (KES) *</label>
                    <input type="text" name="amount" required className="form-control" value={formData.amount} onChange={handleInputChange} placeholder="e.g. 5000" />
                  </div>
                  
                  {/* Payment Instructions */}
                  <div style={{ backgroundColor: 'var(--bg-sand-dark)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', marginTop: '0.5rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--primary-dark)', fontSize: '1rem' }}>How to send your gift:</h4>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>M-PESA Till:</strong> 8970123</p>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0' }}><strong>Equity Bank:</strong> 0120178493021 (Kisumu Main Branch)</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Transaction Details *</label>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 0.5rem 0' }}>Please enter the M-PESA Confirmation Code or Bank Transaction ID so we can verify your gift.</p>
                    <input type="text" name="transactionDetails" required className="form-control" value={formData.transactionDetails} onChange={handleInputChange} placeholder="e.g. QAL5..." />
                  </div>
                </>
              )}

              {supportType !== 'financial' && (
                <div className="form-group">
                  <label className="form-label">
                    {supportType === 'in-kind' && 'What items would you like to donate? *'}
                    {supportType === 'volunteer' && 'What skills or time can you offer? *'}
                    {supportType === 'partner' && 'Tell us about your organization *'}
                  </label>
                  <textarea name="comments" required className="form-control" rows="4" value={formData.comments} onChange={handleInputChange} placeholder="Please provide details here..."></textarea>
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                {isSubmitting ? 'Submitting...' : 'Complete Submission'} <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="animate-slide-up" style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', backgroundColor: 'rgba(37, 211, 102, 0.1)', color: '#25D366', borderRadius: '50%', marginBottom: '2rem' }}>
              <CheckCircle size={40} />
            </div>
            <h2 style={{ marginBottom: '1rem' }}>Thank You!</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
              We have received your details. A confirmation email has been sent to <strong>{formData.email}</strong> and our team has been notified. 
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              Together, we are creating second chances.
            </p>
            <button onClick={() => window.location.reload()} className="btn btn-outline" style={{ marginTop: '2rem' }}>
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default SupportFlow;

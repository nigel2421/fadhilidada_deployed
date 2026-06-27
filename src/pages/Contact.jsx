import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate contact form submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="animate-fade">
      {/* Page Header */}
      <section className="section section-primary" style={{ padding: '3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '0.5rem' }}>Reach Out to Us</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto' }}>
            We would love to hear from you — whether you are a donor, a potential partner, a volunteer, or someone in need of help.
          </p>
        </div>
      </section>

      {/* Main Details and Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Contact Details Column */}
            <div>
              <span style={{ 
                color: 'var(--secondary)', 
                fontWeight: '700', 
                fontSize: '0.9rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Information
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Get in Touch</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Physical Address */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    backgroundColor: 'rgba(var(--primary-rgb), 0.08)', 
                    color: 'var(--primary)', 
                    padding: '0.75rem', 
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--primary-dark)' }}>Physical Address</h3>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                      1 km off Kibos Road (from Enigma Resort), Kisumu East Constituency,<br />
                      P.O. Box 1932–40100, Kisumu, Kenya
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    backgroundColor: 'rgba(223, 91, 32, 0.08)', 
                    color: 'var(--secondary)', 
                    padding: '0.75rem', 
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--primary-dark)' }}>Phone Lines</h3>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>
                      +254 700 084 897 <span style={{ color: 'var(--border-color-dark)', margin: '0 0.5rem' }}>|</span> +254 727 948 016
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Monday to Saturday, 8:00 AM — 5:00 PM</span>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    backgroundColor: 'rgba(var(--primary-rgb), 0.08)', 
                    color: 'var(--primary)', 
                    padding: '0.75rem', 
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--primary-dark)' }}>Email Address</h3>
                    <a href="mailto:okello47@gmail.com" style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                      okello47@gmail.com
                    </a>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>We respond to all emails within 24 hours.</span>
                  </div>
                </div>

                {/* Official Website */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    backgroundColor: 'rgba(223, 91, 32, 0.08)', 
                    color: 'var(--secondary)', 
                    padding: '0.75rem', 
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--primary-dark)' }}>Official Website</h3>
                    <a href="https://fadhilidada-8b70d.web.app/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                      fadhilidada-8b70d.web.app
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="card" style={{ padding: '2.5rem', position: 'relative' }}>
              {formSubmitted ? (
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  height: '350px',
                  textAlign: 'center',
                  animation: 'fadeIn 0.5s ease forwards'
                }}>
                  <CheckCircle2 size={60} style={{ color: 'green', marginBottom: '1.5rem' }} />
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '350px', margin: 0 }}>
                    Thank you for reaching out to Fadhili Dada. Our team has received your inquiry and we will get back to you shortly.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="btn btn-outline" style={{ marginTop: '2rem' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>Send Us a Message</h3>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="form-control" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="form-control" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="form-control" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      className="form-control" 
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Donation / Support">Donation / Support</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Partnership Proposal">Partnership Proposal</option>
                      <option value="Seeking Help">Seeking Help / Admissions</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label" htmlFor="message">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5} 
                      className="form-control" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you or how would you like to partner with us?"
                      style={{ resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '8px' }}>
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Staff / Welcome photo banner */}
      <section className="section section-bg-alt" style={{ borderTop: '1px solid var(--border-color)', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>

            {/* Board of Trustees photo */}
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-grey)',
              border: '2px solid var(--border-color)',
            }}>
              <img
                src="/images/The Board of trustees/IMG_20231210_163328.webp"
                alt="Board of Trustees"
                style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <div>
              <span style={{
                color: 'var(--secondary)',
                fontWeight: '700',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Our Welcome
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>Always Ready to Walk With You</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Whether you are a mother looking for safety, a parent trying to reconnect, a donor wanting to see our accounts, or a researcher studying youth rehabilitation, we open our doors to you.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Our physical center in Kisumu East is open for pre-arranged donor visits, community mentoring campaigns, and family reconciliation mediations. Please reach out to make an appointment.
              </p>
              <a href="mailto:okello47@gmail.com" className="btn btn-outline">
                Email the Director
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

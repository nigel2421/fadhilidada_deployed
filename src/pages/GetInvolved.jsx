import { Sparkles } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';
import SupportFlow from '../components/SupportFlow';

const GetInvolved = () => {


  return (
    <div className="animate-fade">
      {/* Page Header */}
      <section className="section section-primary" style={{ padding: '3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '0.5rem' }}>Join the Mission</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Fadhili Dada exists because people choose to act. Your support directly changes the course of a young mother's life.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section" style={{ paddingBottom: '0rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="lead" style={{ color: 'var(--text-charcoal)' }}>
            We believe that every young woman deserves a second chance. Whether through financial giving, sharing your professional skills, forming an organizational partnership, or praying for our community, you play a vital role.
          </p>
        </div>
      </section>

      {/* Dynamic Support Flow */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <SupportFlow />
        </div>
      </section>

      {/* Pray With Us */}
      <section className="section section-primary" style={{ borderTop: '4px solid var(--secondary)' }}>
        <div className="container text-center" style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: 'var(--accent)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={22} />
          </div>
          <h2 style={{ color: 'var(--text-light)', fontSize: '2.2rem', marginBottom: '1.25rem' }}>4. Pray With Us</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
            As an organization rooted in faith, we believe deeply in the power of prayer. We invite individuals, prayer groups, and churches to partner with us in intercession.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: '0px' }}>
            We request prayers for our social workers, our resident mothers and their children, the reconciliation of broken families, and the financial provision necessary to keep our safe house running smoothly.
          </p>
        </div>
      </section>

      {/* Our Partners */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Strategic Collaborations
            </span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>Our Partners & Supporters</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              We work alongside trusted organizations and institutions that share our vision of protecting and empowering vulnerable young women.
            </p>
          </div>

          <div className="marquee-container">
            <div className="marquee-content">
              {[
                { name: 'Crossroads Fellowship Kisumu', img: '/images/partners/crossroads fellowship kisumu.png' },
                { name: 'Samaritan Purse', img: '/images/partners/samaritan purse.png' },
                { name: 'Hands on Africa', img: '/images/partners/hands on africa.png' },
                { name: 'Ministry of Labour', img: '/images/partners/ministry of labour.png' },
                { name: 'KCT Innovation', img: '/images/partners/kctinnovation.png' },
                { name: 'Aquarech', img: '/images/partners/aquarech.png' },
                { name: 'Crossroads Fellowship Kisumu', img: '/images/partners/crossroads fellowship kisumu.png' },
                { name: 'Samaritan Purse', img: '/images/partners/samaritan purse.png' },
                { name: 'Hands on Africa', img: '/images/partners/hands on africa.png' },
                { name: 'Ministry of Labour', img: '/images/partners/ministry of labour.png' },
                { name: 'KCT Innovation', img: '/images/partners/kctinnovation.png' },
                { name: 'Aquarech', img: '/images/partners/aquarech.png' }
              ].map((partner, idx) => (
                <div key={idx} className="partner-thumbnail">
                  <ImageWithFallback
                    src={partner.img}
                    alt={partner.name}
                    description={partner.name}
                    style={{ maxHeight: '80px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--bg-sand)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>Interested in partnering with us?</h3>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 1rem 0' }}>
              We actively seek partnerships with churches, NGOs, businesses, government agencies, and international foundations.
            </p>
            <a href="mailto:okello47@gmail.com" style={{
              color: 'var(--primary)',
              fontWeight: '600',
              textDecoration: 'none',
              borderBottom: '2px solid var(--primary)'
            }}>
              Contact our Executive Director to initiate a partnership discussion
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default GetInvolved;

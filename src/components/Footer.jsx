import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    // eslint-disable-next-line react-hooks/immutability
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: 'var(--primary-dark)', 
      color: 'var(--text-light)', 
      padding: '4rem 0 2rem 0',
      borderTop: '5px solid var(--primary)'
    }}>
      <div className="container">
        <div className="grid grid-3" style={{ marginBottom: '3rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src="/images/logo.png"
                alt="Fadhili Dada Logo"
                style={{ height: '32px', width: 'auto' }}
              />
              Fadhili Dada
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              "Second Chances to Fullness of Life"<br />
              Rescuing, restoring, and reintegrating teenage mothers and their children in Kisumu, Kenya.
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>
              Registered Community-Based Organization (CBO)<br />
              Kisumu County, Kenya
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'problem', label: 'The Problem' },
                { id: 'programs', label: 'Our Programs' },
                { id: 'stories', label: 'Impact Stories' },
                { id: 'get-involved', label: 'Get Involved' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id} style={{ marginBottom: '0.75rem' }}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
                    onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                  >
                    › {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Action */}
          <div>
            <h3 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Get in Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                <span>1 km off Kibos Road (from Enigma Resort), Kisumu East Constituency, Kenya</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--primary)' }} />
                <span>+254 700 084 897 / +254 727 948 016</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--primary-light)' }} />
                <a href="mailto:okello47@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.7)' }} onMouseOver={(e) => e.target.style.color = 'var(--accent)'} onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>okello47@gmail.com</a>
              </div>
            </div>
            
            <button
              onClick={() => handleNavClick('get-involved')}
              className="btn btn-secondary"
              style={{ width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
            >
              <Heart size={16} fill="currentColor" /> Support Our Work
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          paddingTop: '2rem', 
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          <p>© {currentYear} Fadhili Dada Organization. All Rights Reserved.</p>
          <p style={{ marginTop: '0.25rem', fontSize: '0.8rem' }}>Designed with compassion for teenage mothers and their families in Kisumu, Kenya.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

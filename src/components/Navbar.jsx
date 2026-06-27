import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'problem', label: 'The Problem' },
    { id: 'programs', label: 'Our Programs' },
    { id: 'stories', label: 'Impact Stories' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    // eslint-disable-next-line react-hooks/immutability
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo and Brand Name */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="nav-logo">
          <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/images/logo.png"
              alt="Fadhili Dada Logo"
              style={{ height: '40px', width: 'auto' }}
            />
            <span className="brand-text" style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}>
              Fadhili <span style={{ color: 'var(--secondary)' }}>Dada</span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => handleNavClick('get-involved')}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', borderRadius: 'var(--radius-sm)' }}
          >
            <Heart size={14} fill="currentColor" /> Donate
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="nav-toggle-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
            className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => handleNavClick('get-involved')}
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
        >
          <Heart size={18} fill="currentColor" /> Give / Support Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

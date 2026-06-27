import React from 'react';
import { Heart, Compass, Shield, Users, Award, BookOpen } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const About = () => {
  const values = [
    {
      icon: <Heart size={20} />,
      title: 'Compassion',
      desc: 'We see every person as worthy of dignity and care, treating each individual with warmth, respect, and unconditional love.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Integrity',
      desc: 'We operate with complete transparency, absolute accountability, and Christian ethics in all organizational dealings.',
    },
    {
      icon: <Award size={20} />,
      title: 'Holism',
      desc: 'We address physical, emotional, educational, and spiritual needs together, recognizing that true recovery involves the whole person.',
    },
    {
      icon: <Users size={20} />,
      title: 'Empowerment',
      desc: 'We build self-sufficiency and capacity rather than dependency, equipping girls with tools to stand on their own feet.',
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Community',
      desc: 'We believe lasting change happens within healthy relationships, supportive networks, and reconciled family structures.',
    },
  ];

  return (
    <div className="animate-fade">
      {/* Page Header */}
      <section className="section section-primary" style={{ padding: '3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '0.5rem' }}>About Us</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Discover the heart, history, and vision behind Fadhili Dada Organization.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '3.5rem' }}>

            {/* Story Image Section */}
            <div>
              <div className="img-frame img-frame-square" style={{ maxWidth: '360px', margin: '0 auto 1.5rem auto' }}>
                <ImageWithFallback
                  src="/images/team/.jaredabout.jpg"
                  alt="Reverend Jared Okello"
                  description="Reverend Jared Okello, Founder of Fadhili Dada"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              <div style={{
                backgroundColor: 'rgba(var(--primary-rgb), 0.04)',
                borderLeft: '4px solid var(--primary)',
                padding: '1.25rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0'
              }}>
                <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem', color: 'var(--primary-dark)' }}>
                  "My sisters' lives were cut short due to a lack of guidance and support. Fadhili Dada was built to make sure other girls in Kisumu have a protective shield and a second chance."
                </p>
                <p style={{ fontWeight: '700', fontSize: '0.85rem', margin: '0.5rem 0 0 0', textTransform: 'uppercase', color: 'var(--text-charcoal)' }}>
                  — Reverend Jared Okello, Founder
                </p>
              </div>
            </div>

            {/* Story Text Section */}
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
                Our Story
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Born Out of Lived Experience</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
                <p>
                  Fadhili Dada Organization was born out of lived experience. Our founder, Reverend Jared Okello, grew up as the eldest child in a struggling family after the loss of his mother. In his youth, he became the primary provider for seven siblings. He candidly acknowledges the personal cost of that season — how early responsibilities without adequate guidance led to failure, and how the tragic loss of two of his teenage sisters to HIV/AIDS became a defining turning point in his life.
                </p>
                <p>
                  That loss — rooted in poverty, broken family structures, and a lack of protective guidance — ignited a lifelong commitment to protecting vulnerable adolescent girls.
                </p>
                <p>
                  What began as a church-led compassion initiative in 2016 through Crossroads Fellowship Ministries in Kisumu has grown into Fadhili Dada Organization: a registered Community-Based Organization (CBO) dedicated to breaking the cycle of teenage pregnancy, poverty, and gender-based vulnerability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-bg-alt" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem' }}>

            {/* Vision Card */}
            <div className="card" style={{ padding: '2.5rem', height: '100%' }}>
              <div className="value-icon-wrapper" style={{ backgroundColor: 'rgba(var(--secondary-rgb), 0.10)', color: 'var(--secondary)' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
                We envision a world of second chances — a society where every young woman, regardless of her circumstances, has access to the healing, education, and economic empowerment she needs to build a full and dignified life.
              </p>
            </div>

            {/* Mission Card */}
            <div className="card" style={{ padding: '2.5rem', height: '100%' }}>
              <div className="value-icon-wrapper">
                <Heart size={24} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Driven by compassion for the poor and the afflicted, Fadhili Dada acts as an agent of social protection and spiritual redemption. We work to:
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Alleviate suffering and poverty among teenage mothers and their children</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Bridge the gap between single motherhood and professional development</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Reintegrate broken families and restore healthy relationships</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Keep teenage mothers and young women in school</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Equip youth with vocational skills and biblical values for economic independence</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              How We Work
            </span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>Our Core Values</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              These principles guide our interactions, structure our programs, and form the foundation of our community.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem' }}>
                <div className="value-icon-wrapper" style={{
                  backgroundColor: idx % 2 === 0 ? 'rgba(var(--primary-rgb), 0.08)' : 'rgba(223, 91, 32, 0.08)',
                  color: idx % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'
                }}>
                  {val.icon}
                </div>
                <h3 className="card-title">{val.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}

            {/* Context/Environment Side Picture */}
            <div className="card" style={{ padding: 0, overflow: 'hidden', gridColumn: 'span 1', display: 'flex', justifyContent: 'center' }}>
              <ImageWithFallback
                src="/images/The living conditions of the girls/IMG_20230408_171835.jpg"
                alt="Fadhili Dada environment"
                description="Living conditions and community setting"
                style={{ width: '100%', height: '100%', minHeight: '220px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="section section-bg-alt" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>

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
                Governance & Accountability
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Organizational Structure</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
                <p>
                  Fadhili Dada is governed by a Board of Trustees comprising nine members — four trustees and five appointed representatives. The Board provides policy oversight, financial auditing, and doctrinal accountability.
                </p>
                <p>
                  The Executive Director, Reverend Jared Okello, alongside our local management team and social workers, handles the day-to-day operations of the safe house, education programs, and family reintegrations.
                </p>
                <p>
                  The organization is registered as a Community-Based Organization (CBO) in Kisumu County, Kenya, and operates under a formal, legally adopted constitution signed in January 2025.
                </p>
              </div>
            </div>

            <div>
              <div className="img-frame img-frame-landscape">
                <ImageWithFallback
                  src="/images/The Board of trustees/IMG_20231210_163328.jpg"
                  alt="Fadhili Dada Team"
                  description="Fadhili Dada organization Board and Management team"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our People
            </span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>Meet Our Leadership Team</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Meet the dedicated individuals driving our mission of rescue, healing, restoration, and empowerment across Kisumu.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {[
              { name: 'Reverend Jared Okello', role: 'Executive Director & Founder', img: '/images/team/.jaredabout.jpg' },
              { name: 'Kennedy Odongo', role: 'Board of Trustees', img: '/images/team/kennedy odongo.png' },
              { name: 'Lilian Yongo', role: 'Board of Trustees', img: '/images/team/lilian yongo.png' },
              { name: 'Mildred Akoth', role: 'Board of Trustees', img: '/images/team/mildred akoth.png' },
              { name: 'Cecikia Bittah', role: 'Board of Trustees', img: '/images/team/cecikia bittah.png' }
            ].map((member, idx) => (
              <div key={idx} className="card" style={{ padding: '0', textAlign: 'center', overflow: 'hidden' }}>
                <ImageWithFallback
                  src={member.img}
                  alt={member.name}
                  description={member.name}
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                  <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '600', margin: 0 }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Supporters */}
      <section className="section section-bg-alt" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Network
            </span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>Trusted Partners</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              We work alongside organizations that share our commitment to protecting and empowering vulnerable young women.
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
        </div>
      </section>
    </div>
  );
};

export default About;

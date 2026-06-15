import React from 'react';
import { Home, Baby, Award, HeartHandshake, Sparkles } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const Programs = () => {
  const pillars = [
    {
      id: 1,
      title: 'Pillar 1: Safe House & Pregnancy Crisis Centre',
      icon: <Home size={24} />,
      desc: 'Our safe house is a refuge for the most vulnerable teenage mothers — girls who have been expelled from their homes, abandoned, or are at immediate risk of exploitation or self-harm.',
      details: [
        'Safe, secure, and supportive housing environment.',
        'Nutritious meals and comprehensive hygiene support.',
        '24-hour pastoral care and emotional grounding.',
        'Houses up to ten young mothers and their babies in a family-like environment.',
      ],
      image: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_112705.jpg',
      imageDesc: 'Safe house exterior and accommodation environment',
    },
    {
      id: 2,
      title: "Pillar 2: Day Care & Child Development Programme",
      icon: <Baby size={24} />,
      desc: "A critical barrier to keeping teenage mothers in school or vocational training is the absence of safe, affordable childcare. Fadhili Dada's LovelyKid's Day Care Centre provides professional early childhood development services.",
      details: [
        'Free, professional daycare for resident and community mothers.',
        'Nutritional support and regular health monitoring for babies.',
        'Cognitive stimulation and play-based age-appropriate learning.',
        'Focus on the crucial first 1,000 days of child development.',
      ],
      image: '/images/Daycar and Fadhili Dada Centre/WhatsApp Image 2024-02-01 at 18.07.28_4558dea1.jpg',
      imageDesc: 'Children and daily activities at the daycare',
    },
    {
      id: 3,
      title: 'Pillar 3: Education & Vocational Training',
      icon: <Award size={24} />,
      desc: 'Fadhili Dada walks alongside each young woman, helping them return to formal education or transition into sustainable vocational careers.',
      details: [
        'Partnerships with local certified vocational institutes.',
        'Training fields: tailoring (dressmaking), cosmetology (hair dressing), computing, and hospitality.',
        'Equipping graduates with government-recognized certificates.',
        'Providing start-up kits or seed capital where possible to start small businesses.',
      ],
      image: '/images/Group mentourship/IMG_20231219_130220.jpg',
      imageDesc: 'Vocational training and group mentorship sessions',
    },
    {
      id: 4,
      title: 'Pillar 4: Family Reintegration & Psychosocial Support',
      icon: <HeartHandshake size={24} />,
      desc: 'Healing is the foundation of every other transformation. We address deep-seated emotional trauma and work to restore broken family structures.',
      details: [
        'Professional counseling and trauma therapy.',
        'Structured family mediation and reconciliation programs.',
        'Post-reintegration follow-ups and home-based support.',
        'Spiritual formation, discipleship, and biblical life skills.',
      ],
      image: '/images/Group mentourship/IMG_20231219_130149.jpg',
      imageDesc: 'Group support and family reintegration sessions',
    },
  ];

  return (
    <div className="animate-fade">
      {/* Page Header */}
      <section className="section section-primary" style={{ padding: '3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '0.5rem' }}>Our Programs</h1>
          <p
            className="lead"
            style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto' }}
          >
            A comprehensive, four-pillar intervention model designed to rescue, heal, restore, and empower.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div
          className="container"
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <span
            style={{
              color: 'var(--primary)',
              fontWeight: '700',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            The Four-Pillar Model
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Rescue. Heal. Restore. Empower.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Our model is built around four integrated pillars. Each pillar addresses a distinct but
            interconnected stage of a young woman's journey from acute crisis to long-term independence
            and social inclusion.
          </p>
        </div>
      </section>

      {/* Pillars — Alternating Layout */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {pillars.map((pillar, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={pillar.id}
                  className="grid grid-2"
                  style={{ alignItems: 'center', gap: '4rem', direction: isEven ? 'ltr' : 'rtl' }}
                >
                  {/* Text Card */}
                  <div style={{ direction: 'ltr' }} className="pillar-card card">
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isEven
                          ? 'rgba(var(--primary-rgb), 0.08)'
                          : 'rgba(var(--secondary-rgb), 0.08)',
                        color: isEven ? 'var(--primary)' : 'var(--secondary)',
                        width: '48px',
                        height: '48px',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {pillar.icon}
                    </div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.02rem',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {pillar.desc}
                    </p>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        color: 'var(--text-charcoal)',
                        fontSize: '0.95rem',
                      }}
                    >
                      {pillar.details.map((detail, idx) => (
                        <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image — framed landscape */}
                  <div style={{ position: 'relative', direction: 'ltr' }}>
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: isEven ? '-12px' : '12px',
                        right: isEven ? '12px' : '-12px',
                        bottom: '12px',
                        border: `2px solid ${isEven ? 'var(--primary)' : 'var(--secondary)'}`,
                        borderRadius: 'var(--radius-md)',
                        zIndex: 0,
                      }}
                    />
                    <div
                      className="img-frame img-frame-landscape"
                      style={{ position: 'relative', zIndex: 1 }}
                    >
                      <ImageWithFallback
                        src={pillar.image}
                        alt={pillar.title}
                        description={pillar.imageDesc}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prevention Campaign Banner */}
      <section
        className="section section-primary"
        style={{ borderTop: '4px solid var(--primary)', borderBottom: '4px solid var(--secondary)' }}
      >
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                }}
              >
                <Sparkles size={16} /> Prevention Campaign
              </div>
              <h2
                style={{ fontSize: '2.5rem', color: 'var(--text-light)', marginBottom: '1.25rem' }}
              >
                Purity &amp; Mentorship Campaign
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '1.1rem',
                  marginBottom: '1.5rem',
                }}
              >
                Working actively with local primary/secondary schools, churches, and community
                outreach groups, Fadhili Dada runs a prevention programme to stop crisis situations
                before they occur.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                We engage adolescent girls — and boys — on matters of healthy relationships, sexual
                health, gender-based violence prevention, and life skills. Since 2021 we have reached
                over 4,200 young people through this campaign.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: '800',
                      color: 'var(--primary-light)',
                      fontFamily: 'var(--font-headings)',
                    }}
                  >
                    4,200+
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Girls Mentored
                  </div>
                </div>
                <div
                  style={{
                    width: '1px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    margin: '0 0.5rem',
                  }}
                />
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: '800',
                      color: 'var(--primary-light)',
                      fontFamily: 'var(--font-headings)',
                    }}
                  >
                    30+
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Schools Reached
                  </div>
                </div>
              </div>
            </div>

            {/* Prevention image */}
            <div style={{ position: 'relative' }}>
              <div className="img-frame img-frame-landscape">
                <ImageWithFallback
                  src="/images/Group mentourship/IMG_20240918_131122.jpg"
                  alt="Purity and mentorship campaign"
                  description="Prevention and mentorship sessions in schools"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

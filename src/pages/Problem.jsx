import React from 'react';
import { AlertCircle, TrendingUp, HelpCircle, BookOpen, AlertTriangle } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const Problem = () => {
  const challenges = [
    {
      title: 'Commercial Exploitation',
      desc: 'Exploitation of girls aged 14–24 forced into transactional relationships due to poverty.'
    },
    {
      title: 'HIV & Health Risks',
      desc: 'Kisumu County has one of Kenyas highest HIV/AIDS rates; young women are disproportionately affected.'
    },
    {
      title: 'Formal School Dropout',
      desc: 'Over 42% of pregnant girls drop out permanently, trapping them in generational cycles of poverty.'
    },
    {
      title: 'Unsafe Abortions & Abuse',
      desc: 'Substantial maternal risk and physical abuse, resulting in permanent complications or loss of life.'
    },
    {
      title: 'Infant Abandonment',
      desc: 'Newborns abandoned on streets or left in neglectful care due to lack of support or social stigma.'
    },
    {
      title: 'High Mortality Rate',
      desc: 'A combined mortality rate from drugs, unsafe abortions, physical abuse, and suicide of ~57% among crisis cases.'
    }
  ];

  return (
    <div className="animate-fade">
      {/* Page Header */}
      <section className="section section-primary" style={{ padding: '3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '0.5rem' }}>The Crisis We Address</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Understanding the systemic challenges facing adolescent girls and young mothers in Kisumu, Kenya.
          </p>
        </div>
      </section>

      {/* Narrative & Statistics */}
      <section className="section">
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
                A Crisis Rooted in Broken Systems
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Beyond Individual Failure</h2>
              
              <div style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p>
                  Kisumu County faces one of Kenya's most persistent crises: a high rate of teenage pregnancy driven not by individual failure, but by the intersection of extreme poverty, family breakdown, and systemic exclusion.
                </p>
                <p>
                  According to the <strong>2022 Kenya Demographic and Health Survey (KDHS)</strong>, 15% of girls aged 15–19 in Kisumu have experienced teenage pregnancy. More alarming, 42% of teenage girls in the region have been forced to drop out of school because of unintended pregnancy — trapping entire families in a cycle of limited opportunity.
                </p>
                <p>
                  The majority of the Ministry of Health's recorded 586 teenage pregnancies in Kisumu East Constituency in a single year had one common factor: <strong>every girl came from a broken or dysfunctional home.</strong> When family structure collapses, girls are left unprotected — vulnerable to exploitation, transactional relationships, and abandonment.
                </p>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px', right: '-12px', left: '12px', bottom: '12px',
                  border: '2px solid var(--primary)',
                  borderRadius: 'var(--radius-md)',
                  zIndex: 0,
                }} />
                <div className="img-frame img-frame-landscape" style={{ position: 'relative', zIndex: 1 }}>
                  <ImageWithFallback
                    src="/images/Surport needed/IMG_20231219_104131.jpg"
                    alt="Community Context in Kisumu"
                    description="Community context and living conditions in Kisumu County"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Crisis Details Grid */}
      <section className="section section-bg-alt" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              The Depth of the Challenge
            </span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>Interconnected Issues</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Teenage pregnancy does not happen in a vacuum. It triggers a cascade of social, physical, and psychological issues.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {challenges.map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem', borderTop: '4px solid var(--primary)' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <AlertCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--primary-dark)' }}>{item.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Service Gap */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            
            <div>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px', left: '-12px', right: '12px', bottom: '12px',
                  border: '2px solid var(--secondary)',
                  borderRadius: 'var(--radius-md)',
                  zIndex: 0,
                }} />
                <div className="img-frame img-frame-landscape" style={{ position: 'relative', zIndex: 1 }}>
                  <ImageWithFallback
                    src="/images/Surport needed/IMG_20231219_133155.jpg"
                    alt="Kisumu Neighbourhood"
                    description="General environment highlighting the need for local services"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
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
                The Service Gap
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Why We Exist</h2>
              
              <div style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p>
                  While many organizations in Kisumu focus on prevention and advocacy, very few provide direct crisis intervention for girls who are already pregnant, homeless, or abandoned.
                </p>
                <div style={{ 
                  backgroundColor: 'rgba(223, 91, 32, 0.05)', 
                  borderLeft: '4px solid var(--secondary)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '0.5rem'
                }}>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--secondary-dark)', fontWeight: '500' }}>
                    The two existing safe houses in Kisumu offer temporary accommodation and meals to general Gender-Based Violence (GBV) survivors, but lack comprehensive wraparound services specific to teenage motherhood.
                  </p>
                </div>
                <p>
                  Fadhili Dada was established specifically to fill this gap. We provide a one-stop centre for immediate physical rescue, medical crisis management, trauma healing, primary education re-entry, vocational job training, and legal family mediation to build a path out of vulnerability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── IMPACT PHOTO MARQUEE — scrolling at the bottom ── */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '5rem', overflow: 'hidden', borderTop: '1px solid var(--border-color)' }}>
        <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', textAlign: 'center', padding: '0 1.5rem' }}>
          <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
            Our Work in Action
          </span>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Fadhili Dada in Pictures</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Despite the challenges, transformation is happening every day in Kisumu. These are the faces and moments that drive our mission.
          </p>
        </div>

        {/* Full-width marquee — all community & programme photos */}
        <div className="marquee-container">
          <div className="marquee-content photo-marquee-content">
            {[
              { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_112705.jpg',    alt: 'Centre activities' },
              { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_134710.jpg',    alt: 'Centre life' },
              { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_135909.jpg',    alt: 'Daily programme' },
              { src: '/images/Daycar and Fadhili Dada Centre/IMG_20240819_125346.jpg',    alt: 'Centre 2024' },
              { src: '/images/Daycar and Fadhili Dada Centre/WhatsApp Image 2024-02-01 at 18.07.28_4558dea1.jpg', alt: 'LovelyKids Daycare' },
              { src: '/images/Group mentourship/IMG_20231219_130106.jpg',                 alt: 'Group session' },
              { src: '/images/Group mentourship/IMG_20231219_130149.jpg',                 alt: 'Group mentorship' },
              { src: '/images/Group mentourship/IMG_20240820_111908.jpg',                 alt: 'Community gathering' },
              { src: '/images/Group mentourship/IMG_20240918_131122.jpg',                 alt: 'Mentorship session' },
              { src: '/images/Group mentourship/IMG_20250804_101012.jpg',                 alt: 'Programme 2025' },
              { src: '/images/Surport needed/IMG_20231214_094434.jpg',                    alt: 'Support needed' },
              { src: '/images/Surport needed/IMG_20231219_104131.jpg',                    alt: 'Community support' },
              { src: '/images/Surport needed/IMG_20231219_133155.jpg',                    alt: 'Community support' },
              { src: '/images/Surport needed/IMG_20231219_144635.jpg',                    alt: 'Community support' },
              { src: '/images/The living conditions of the girls/20230717_130346.jpg',    alt: 'Girls at the centre' },
              { src: '/images/The living conditions of the girls/IMG_20230408_171835.jpg',alt: 'Centre environment' },
              { src: '/images/testimonial/fdoirene.jpg',                                  alt: 'Irene — graduate' },
              { src: '/images/testimonial/fdoflorence.jpg',                               alt: 'Florence — graduate' },
              { src: '/images/testimonial/Mitchell Andai an Preciouse Joy.jpg',           alt: 'Mitchelle — graduate' },
              { src: '/images/The Board of trustees/IMG_20231210_163328.jpg',             alt: 'Board of Trustees' },
              { src: '/images/The Board of trustees/IMG_20240906_140037.jpg',             alt: 'Board meeting' },
              // Duplicate set for seamless loop
              { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_112705.jpg',    alt: 'Centre activities' },
              { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_134710.jpg',    alt: 'Centre life' },
              { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_135909.jpg',    alt: 'Daily programme' },
              { src: '/images/Daycar and Fadhili Dada Centre/IMG_20240819_125346.jpg',    alt: 'Centre 2024' },
              { src: '/images/Daycar and Fadhili Dada Centre/WhatsApp Image 2024-02-01 at 18.07.28_4558dea1.jpg', alt: 'LovelyKids Daycare' },
              { src: '/images/Group mentourship/IMG_20231219_130106.jpg',                 alt: 'Group session' },
              { src: '/images/Group mentourship/IMG_20231219_130149.jpg',                 alt: 'Group mentorship' },
              { src: '/images/Group mentourship/IMG_20240820_111908.jpg',                 alt: 'Community gathering' },
              { src: '/images/Group mentourship/IMG_20240918_131122.jpg',                 alt: 'Mentorship session' },
              { src: '/images/Group mentourship/IMG_20250804_101012.jpg',                 alt: 'Programme 2025' },
              { src: '/images/Surport needed/IMG_20231214_094434.jpg',                    alt: 'Support needed' },
              { src: '/images/Surport needed/IMG_20231219_104131.jpg',                    alt: 'Community support' },
              { src: '/images/Surport needed/IMG_20231219_133155.jpg',                    alt: 'Community support' },
              { src: '/images/Surport needed/IMG_20231219_144635.jpg',                    alt: 'Community support' },
              { src: '/images/The living conditions of the girls/20230717_130346.jpg',    alt: 'Girls at the centre' },
              { src: '/images/The living conditions of the girls/IMG_20230408_171835.jpg',alt: 'Centre environment' },
              { src: '/images/testimonial/fdoirene.jpg',                                  alt: 'Irene — graduate' },
              { src: '/images/testimonial/fdoflorence.jpg',                               alt: 'Florence — graduate' },
              { src: '/images/testimonial/Mitchell Andai an Preciouse Joy.jpg',           alt: 'Mitchelle — graduate' },
              { src: '/images/The Board of trustees/IMG_20231210_163328.jpg',             alt: 'Board of Trustees' },
              { src: '/images/The Board of trustees/IMG_20240906_140037.jpg',             alt: 'Board meeting' },
            ].map((photo, idx) => (
              <div
                key={idx}
                style={{
                  flexShrink: 0,
                  width: '280px',
                  height: '200px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-grey)',
                  border: '2px solid var(--border-color)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Problem;

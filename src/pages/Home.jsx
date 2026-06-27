import { Heart, BookOpen, Users, Compass, Shield, ArrowRight } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ImageWithFallback from '../components/ImageWithFallback';
import FlipCard from '../components/FlipCard';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Hero images ──────────────────────────────────────────── */
const HERO_IMAGES = [
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_112705.webp', alt: 'Fadhili Dada Centre activities' },
  { src: '/images/Group mentourship/IMG_20231219_130106.webp', alt: 'Group mentorship session' },
  { src: '/images/The living conditions of the girls/20230717_130346.webp', alt: 'Girls at the centre' },
  { src: '/images/Surport needed/IMG_20231214_094434.webp', alt: 'Community support programme' },
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20240819_125346.webp', alt: 'Daycare and centre life' },
];

/* ── Photo marquee (all people/activity images, duplicated for loop) ── */
const MARQUEE_PHOTOS = [
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_112705.webp', alt: 'Centre activities' },
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_121025.webp', alt: 'Centre life' },
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_123115.webp', alt: 'Daily programme' },
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_134710.webp', alt: 'Centre activities' },
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_135909.webp', alt: 'Centre activities' },
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20231219_140121.webp', alt: 'Centre activities' },
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20240819_125346.webp', alt: 'Centre 2024' },
  { src: '/images/Daycar and Fadhili Dada Centre/IMG_20240819_125403.webp', alt: 'Centre 2024' },
  { src: '/images/Daycar and Fadhili Dada Centre/WhatsApp Image 2024-02-01 at 18.07.28_4558dea1.webp', alt: 'LovelyKids Daycare' },
  { src: '/images/Daycar and Fadhili Dada Centre/WhatsApp Image 2024-02-13 at 07.58.01_58c7bb56.webp', alt: 'Morning activities' },
  { src: '/images/Group mentourship/20200919_113540_1.webp', alt: 'Early mentorship' },
  { src: '/images/Group mentourship/IMG-20231115-WA0004.webp', alt: 'Mentorship outreach' },
  { src: '/images/Group mentourship/IMG_20231219_130106.webp', alt: 'Group session' },
  { src: '/images/Group mentourship/IMG_20231219_130149.webp', alt: 'Group session' },
  { src: '/images/Group mentourship/IMG_20231219_130220.webp', alt: 'Vocational training' },
  { src: '/images/Group mentourship/IMG_20240820_111908.webp', alt: 'Community gathering' },
  { src: '/images/Group mentourship/IMG_20240918_131122.webp', alt: 'Mentorship session' },
  { src: '/images/Group mentourship/IMG_20250804_101012.webp', alt: 'Programme 2025' },
  { src: '/images/Group mentourship/IMG_20250804_101101.webp', alt: 'Programme 2025' },
  { src: '/images/Group mentourship/IMG_20250804_101125.webp', alt: 'Programme 2025' },
  { src: '/images/Surport needed/IMG_20231214_094434.webp', alt: 'Support needed' },
  { src: '/images/Surport needed/IMG_20231219_104131.webp', alt: 'Support needed' },
  { src: '/images/Surport needed/IMG_20231219_133155.webp', alt: 'Community support' },
  { src: '/images/Surport needed/IMG_20231219_133208.webp', alt: 'Community support' },
  { src: '/images/Surport needed/IMG_20231219_144635.webp', alt: 'Community support' },
  { src: '/images/The living conditions of the girls/20230717_130346.webp', alt: 'Girls at the centre' },
  { src: '/images/The living conditions of the girls/IMG_20230408_171835.webp', alt: 'Centre environment' },
  { src: '/images/The Board of trustees/IMG_20231210_163328.webp', alt: 'Board of Trustees' },
  { src: '/images/The Board of trustees/IMG_20231210_163527.webp', alt: 'Board of Trustees' },
  { src: '/images/The Board of trustees/IMG_20240906_140037.webp', alt: 'Board meeting' },
  { src: '/images/The Board of trustees/jaredabout.webp', alt: 'Board meeting' },
  { src: '/images/testimonial/fdoirene.webp', alt: 'Irene — graduate' },
  { src: '/images/testimonial/fdoflorence.webp', alt: 'Florence — graduate' },
  { src: '/images/testimonial/Mitchell Andai an Preciouse Joy.webp', alt: 'Mitchelle — graduate' },
];
// Duplicate for seamless infinite loop
const MARQUEE_DOUBLED = [...MARQUEE_PHOTOS, ...MARQUEE_PHOTOS];

/* ── Stats data with portrait images ─────────────────────── */
const STATS = [
  {
    value: '78',
    label: 'Girls Rescued',
    desc: 'Pregnant girls and teen mothers rescued from crisis and sheltered since 2021.',
    portrait: '/images/testimonial/fdoflorence.webp',
  },
  {
    value: '4,200+',
    label: 'Girls Mentored',
    desc: 'Adolescent girls reached through prevention and health mentorship.',
    portrait: '/images/Group mentourship/IMG_20231219_130149.webp',
  },
  {
    value: '447',
    label: 'Families Reunited',
    desc: 'Teen mothers reconciled with families through mediation and healing.',
    portrait: '/images/testimonial/Mitchell Andai an Preciouse Joy.webp',
  },
  {
    value: '84',
    label: 'Back in School',
    desc: 'Girls re-enrolled in learning institutions through our intervention.',
    portrait: '/images/testimonial/fdoirene.webp',
  },
];

/* ── Flip cards data ─────────────────────────────────────── */
const FLIP_CARDS = [
  {
    frontImage: '/images/The living conditions of the girls/20230717_130346.webp',
    frontAlt: 'Living conditions — the challenge',
    frontLabel: 'The Challenge',
    backImage: '/images/Daycar and Fadhili Dada Centre/WhatsApp Image 2024-02-01 at 18.07.28_4558dea1.webp',
    backAlt: 'LovelyKids Daycare — hope restored',
    backLabel: 'Hope Restored',
  },
  {
    frontImage: '/images/Surport needed/IMG_20231219_133155.webp',
    frontAlt: 'Support needed — vulnerability',
    frontLabel: 'Vulnerability',
    backImage: '/images/Group mentourship/IMG_20240918_131122.webp',
    backAlt: 'Group mentorship — community',
    backLabel: 'Community Built',
  },
  {
    frontImage: '/images/Surport needed/IMG_20231219_104131.webp',
    frontAlt: 'Before intervention',
    frontLabel: 'Before',
    backImage: '/images/testimonial/Mitchell Andai an Preciouse Joy.webp',
    backAlt: 'Mitchelle and Precious Joy — graduate',
    backLabel: 'Second Chance',
  },
];

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════ */
const Home = ({ setCurrentPage }) => {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    // eslint-disable-next-line react-hooks/immutability
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Scroll-reveal refs */
  const revealWelcomeText = useScrollReveal();
  const revealWelcomeImg = useScrollReveal();
  const revealCard1 = useScrollReveal();
  const revealCard2 = useScrollReveal();
  const revealCard3 = useScrollReveal();
  const revealFlip1 = useScrollReveal();
  const revealFlip2 = useScrollReveal();
  const revealFlip3 = useScrollReveal();

  return (
    <div className="animate-fade">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero">
        <HeroSlider images={HERO_IMAGES} />
        <div className="container hero-container">
          <div className="hero-content">
            <span style={{
              display: 'inline-block',
              backgroundColor: 'var(--primary)',
              color: 'var(--text-light)',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1.25rem',
            }}>
              Kisumu, Kenya · CBO
            </span>
            <h1>Second Chances to Fullness of Life</h1>
            <p>
              Fadhili Dada Organization rescues, restores, and reintegrates teenage mothers in
              Kisumu, Kenya — giving every young woman the opportunity to reclaim her future.
            </p>
            <div className="hero-buttons">
              <button onClick={() => handleNavClick('get-involved')} className="btn btn-primary">
                Get Involved <Heart size={16} fill="currentColor" />
              </button>
              <button onClick={() => handleNavClick('about')} className="btn btn-outline-white">
                Our Story <Compass size={16} />
              </button>
              <button
                onClick={() => handleNavClick('programs')}
                className="btn btn-outline-white"
                style={{ border: 'none', textDecoration: 'underline' }}
              >
                Our Programs <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR — with portrait circles (Rec 3) ─────── */}
      <section className="stats-bar">
        <div className="container">
          <div className="grid grid-4" style={{ gap: '1.5rem' }}>
            {STATS.map((stat, idx) => (
              <div key={idx} className="stat-item">
                {/* Circular portrait grounds each number in a real face */}
                <div className="stat-portrait">
                  <img
                    src={stat.portrait}
                    alt={stat.label}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELCOME — scroll reveal (Rec 2b) ──────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>

            <div ref={revealWelcomeText} className="reveal-from-left">
              <span style={{
                color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem',
                textTransform: 'uppercase', letterSpacing: '0.05em',
                display: 'block', marginBottom: '0.5rem',
              }}>
                Welcome to Fadhili Dada
              </span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Restoring Hope and Dignity to Teen Mothers
              </h2>
              <p className="lead" style={{ marginBottom: '1.25rem', lineHeight: '1.6' }}>
                Welcome to Fadhili Dada Organization — a community-based organization rooted in
                compassion, committed to serving the most vulnerable young women in Kisumu, Kenya.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                We exist to offer a second chance to teenage mothers who have been displaced,
                abandoned, or left without support. Through safe housing, education, vocational
                training, and spiritual grounding, we walk alongside each young woman on a journey
                of rescue, healing, and restoration.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <button onClick={() => handleNavClick('about')} className="btn btn-primary">
                  Learn About Our History
                </button>
                <button onClick={() => handleNavClick('programs')} className="btn btn-outline">
                  See Our Pillars
                </button>
              </div>
            </div>

            {/* Welcome image — scroll-reveals from right */}
            <div ref={revealWelcomeImg} className="reveal-from-right" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-14px', left: '-14px', right: '14px', bottom: '14px',
                border: '3px solid var(--primary)', borderRadius: 'var(--radius-md)', zIndex: 0,
              }} />
              <div className="img-frame img-frame-landscape" style={{ position: 'relative', zIndex: 1 }}>
                <ImageWithFallback
                  src="/images/Daycar and Fadhili Dada Centre/IMG_20231219_134710.webp"
                  alt="Centre community growing together"
                  description="Community and daily programme at the centre"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRANSFORMATION FLIP CARDS (Rec 2a) — Metal Grey bg (Rec 1) ── */}
      <section className="section section-metal-grey" style={{ borderTop: '4px solid var(--primary)' }}>
        <div className="container">
          <div className="transformation-heading">
            <span style={{
              color: 'var(--primary-light)', fontWeight: '700', fontSize: '0.9rem',
              textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem',
            }}>
              The Journey of Transformation
            </span>
            <h2 style={{ color: 'var(--text-light)', fontSize: '2.2rem' }}>
              From Challenge to Restoration
            </h2>
            <p>
              Hover over each card to reveal the transformation. Every image tells a story of
              a life turned from crisis into possibility.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '1.75rem' }}>
            <div ref={revealFlip1} className="reveal-on-scroll">
              <FlipCard {...FLIP_CARDS[0]} height="360px" />
            </div>
            <div ref={revealFlip2} className="reveal-on-scroll delay-1">
              <FlipCard {...FLIP_CARDS[1]} height="360px" />
            </div>
            <div ref={revealFlip3} className="reveal-on-scroll delay-2">
              <FlipCard {...FLIP_CARDS[2]} height="360px" />
            </div>
          </div>

          <p style={{
            textAlign: 'center', marginTop: '2rem',
            color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem',
            fontStyle: 'italic',
          }}>
            ↻ Hover or tap each card to reveal the transformation
          </p>
        </div>
      </section>

      {/* ── HOW WE WALK WITH THEM — Metal Grey bg (Rec 1) ──── */}
      <section className="section section-metal-grey" style={{ borderTop: '1px solid hsl(0,0%,26%)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem' }}>How We Walk With Them</h2>
            <p style={{ color: 'rgba(255,255,255,0.78)' }}>
              Our work goes beyond crisis housing. We address the physical, emotional, spiritual, and
              educational needs of every young mother, ensuring they can step into independent, dignified lives.
            </p>
          </div>

          <div className="grid grid-3">
            <div ref={revealCard1} className="card reveal-on-scroll" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="value-icon-wrapper">
                <Shield size={24} />
              </div>
              <h3 className="card-title">1. Safe Shelter &amp; Care</h3>
              <p>
                Providing a safe home, healthy nutrition, medical access, and pastoral care for teen
                mothers and their newborns.
              </p>
            </div>

            <div ref={revealCard2} className="card reveal-on-scroll delay-1" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="value-icon-wrapper" style={{
                backgroundColor: 'rgba(var(--secondary-rgb), 0.18)', color: 'var(--secondary-light)',
              }}>
                <BookOpen size={24} />
              </div>
              <h3 className="card-title">2. Education &amp; Skills</h3>
              <p>
                Helping girls return to formal schooling or learn valuable trade skills like tailoring,
                cosmetology, and computing.
              </p>
            </div>

            <div ref={revealCard3} className="card reveal-on-scroll delay-2" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="value-icon-wrapper" style={{
                backgroundColor: 'rgba(var(--primary-rgb), 0.18)', color: 'var(--primary-light)',
              }}>
                <Users size={24} />
              </div>
              <h3 className="card-title">3. Reintegration</h3>
              <p>
                Reconciling young mothers with their families through mediated counseling and
                preparing them for social integration.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={() => handleNavClick('programs')} className="btn btn-primary">
              Explore Our Four-Pillar Model
            </button>
          </div>
        </div>
      </section>

      {/* ── PHOTO HIGHLIGHTS — scrolling marquee ──────────── */}
      <section className="section" style={{ paddingBottom: '5rem', overflow: 'hidden' }}>
        <div className="text-center" style={{
          maxWidth: '600px', margin: '0 auto 3rem auto', textAlign: 'center', padding: '0 1.5rem',
        }}>
          <h2 style={{ fontSize: '2rem' }}>Life at Fadhili Dada</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            A glimpse into the daily rhythms of hope, learning, and community at our centre.
          </p>
        </div>

        <div className="marquee-container">
          <div className="marquee-content photo-marquee-content">
            {MARQUEE_DOUBLED.map((photo, idx) => (
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

export default Home;

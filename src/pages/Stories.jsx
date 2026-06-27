import { Calendar, MapPin, Award } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';

const Stories = () => {
  const stories = [
    {
      name: 'Irene Akinyi',
      title: 'From Trauma to Technology',
      origin: 'Homa Bay County',
      date: 'Exited May 2024',
      status: 'Computer Programming Graduate',
      quote:
        'Fadhili Dada did not just give me a place to sleep; they gave me a keyboard and a future. Today, I support myself and my son, Sheldon.',
      text: [
        'Irene came to Fadhili Dada from a rural area of Homa Bay County after experiencing a violent assault on her way home from school. She was only 16 years old, scared, and abandoned.',
        'After three years in the programme — including completing her Form Four national examinations and a six-month computer software course — Irene exited the centre in May 2024 with a certificate in computer programming.',
        'She is now employed at a local cyber café in Kisumu, securing her own income. Her son, Sheldon, who was born into crisis, is now in pre-school and thriving in a healthy environment.',
      ],
      image: '/images/testimonial/fdoirene.webp',
      imageDesc: 'Irene — computer programming graduate',
    },
    {
      name: 'Mitchelle Andeyo',
      title: 'Courage After Loss',
      origin: 'Vihiga County',
      date: 'Exited July 2025',
      status: 'Dressmaking & Tailoring Graduate',
      quote:
        'After losing my father and dropping out of school, I thought my life was over. Fadhili Dada showed me that my hands could create a new beginning.',
      text: [
        'Mitchelle arrived from Vihiga County after a series of traumatic family experiences that included the wrongful imprisonment and subsequent tragic death of her father.',
        'Struggling with grief and displacement, she enrolled in primary school completion through Fadhili Dada and later transitioned to vocational training as a tailor.',
        'In July 2025, she exited the centre having completed her course in dressmaking and tailoring. She is now working in a popular boutique in Kakamega, building a name for herself.',
      ],
      image: '/images/testimonial/Mitchell Andai an Preciouse Joy.webp',
      imageDesc: 'Mitchelle — dressmaking and tailoring graduate',
    },
    {
      name: 'Florence Awino',
      title: 'A Mother Who Refused to Give Up',
      origin: 'Kisumu County',
      date: 'Exited December 2025',
      status: 'Tailoring Graduate',
      quote:
        "My daughter Kate was very sick, and I had no skills. Fadhili Dada saved my baby's life and taught me a trade that feeds us today.",
      text: [
        'Florence came to Fadhili Dada in a state of desperation with her daughter Kate, who was severely malnourished and managing sickle cell anaemia with no access to medical care.',
        'Through consistent medical support, nutritional care, and our vocational training programme, both Florence and Kate flourished.',
        'Florence completed her tailoring certification in December 2025 and has successfully entered the local job market. Kate has made remarkable health progress and is growing strong.',
      ],
      image: '/images/testimonial/fdoflorence.webp',
      imageDesc: 'Florence — tailoring graduate',
    },
  ];

  return (
    <div className="animate-fade">
      {/* Page Header */}
      <section className="section section-primary" style={{ padding: '3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ marginBottom: '0.5rem' }}>Stories of Transformation</h1>
          <p
            className="lead"
            style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto' }}
          >
            Real lives, real change. Behind every statistic is a future reclaimed.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section" style={{ paddingBottom: '0rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="lead" style={{ color: 'var(--text-charcoal)' }}>
            Behind every number in our reports is a name, a child, and a dignity restored. The
            following stories — shared with the full consent of the individuals involved — represent
            the resilient young women we have had the privilege to serve.
          </p>
        </div>
      </section>

      {/* Stories Blocks */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {stories.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-2"
                style={{ alignItems: 'center', gap: '4rem', direction: isEven ? 'ltr' : 'rtl' }}
              >
                {/* Photo — framed portrait */}
                <div style={{ position: 'relative', direction: 'ltr' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '-14px',
                      right: '14px',
                      bottom: '14px',
                      border: `2px solid ${isEven ? 'var(--primary)' : 'var(--secondary)'}`,
                      backgroundColor: 'var(--bg-sand-dark)',
                      borderRadius: 'var(--radius-lg)',
                      zIndex: 0,
                    }}
                  />
                  <div
                    className="img-frame"
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      borderRadius: 'var(--radius-lg)',
                      aspectRatio: '3/4',
                      maxHeight: '480px',
                    }}
                  >
                    <ImageWithFallback
                      src={story.image}
                      alt={story.name}
                      description={story.imageDesc}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div style={{ direction: 'ltr' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span
                      style={{
                        backgroundColor: 'rgba(var(--primary-rgb), 0.08)',
                        color: 'var(--primary)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Award size={12} /> {story.status}
                    </span>
                    <span
                      style={{
                        backgroundColor: 'var(--bg-sand-dark)',
                        color: 'var(--text-muted)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <MapPin size={12} /> {story.origin}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{story.name}</h2>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--primary)',
                      fontWeight: '600',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {story.title}
                  </h3>

                  <div className="quote-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                    <div className="quote-icon">"</div>
                    <p className="quote-text" style={{ fontSize: '1rem', margin: 0 }}>
                      {story.quote}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {story.text.map((p, pIdx) => (
                      <p key={pIdx} style={{ margin: 0 }}>
                        {p}
                      </p>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      marginTop: '1.5rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      fontWeight: '600',
                    }}
                  >
                    <Calendar size={14} />
                    <span>Rehabilitation Timeline: {story.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Group mentorship photo strip */}
      <section className="section section-bg-alt" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div
            className="text-center"
            style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}
          >
            <h2 style={{ fontSize: '1.8rem' }}>Life Together at the Centre</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Community, mentorship, and belonging are woven into everything we do.
            </p>
          </div>
          <div className="grid grid-3" style={{ gap: '1rem' }}>
            <div className="img-frame img-frame-landscape">
              <ImageWithFallback
                src="/images/Group mentourship/IMG_20240918_131122.webp"
                alt="Group session"
                description="Group mentorship and peer support"
              />
            </div>
            <div className="img-frame img-frame-landscape">
              <ImageWithFallback
                src="/images/Group mentourship/IMG_20231219_130220.webp"
                alt="Mentorship training"
                description="Vocational skills mentorship"
              />
            </div>
            <div className="img-frame img-frame-landscape">
              <ImageWithFallback
                src="/images/Group mentourship/IMG_20250804_101012.webp"
                alt="Community gathering"
                description="Community gathering and support"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;

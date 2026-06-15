import React, { useState } from 'react';

/**
 * FlipCard
 * Shows `frontImage` by default. On hover (desktop) or tap (mobile) the card
 * flips to reveal `backImage` with a label overlay.
 *
 * Props:
 *  frontImage  - src path for the "challenge" side
 *  frontAlt    - alt text for front
 *  frontLabel  - small badge shown on the front face
 *  backImage   - src path for the "hope/restoration" side
 *  backAlt     - alt text for back
 *  backLabel   - small badge shown on the back face
 *  height      - CSS height string (default '340px')
 */
const FlipCard = ({
  frontImage,
  frontAlt = '',
  frontLabel = 'The Challenge',
  backImage,
  backAlt = '',
  backLabel = 'The Transformation',
  height = '340px',
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{
        perspective: '1200px',
        cursor: 'pointer',
        height,
        userSelect: 'none',
      }}
      aria-label={`Flip card: ${frontAlt} / ${backAlt}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped((f) => !f)}
    >
      {/* Inner — rotates on flip */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Front face */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          <img
            src={frontImage}
            alt={frontAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8,8,8,0.80) 0%, transparent 55%)',
            }}
          />
          {/* Label */}
          <span
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.25rem',
              backgroundColor: 'rgba(184, 18, 18, 0.92)',
              color: '#fff',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.78rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-headings)',
            }}
          >
            {frontLabel}
          </span>
          {/* Flip hint icon */}
          <span
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(4px)',
              color: '#fff',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
            }}
            title="Hover or tap to reveal transformation"
          >
            ↻
          </span>
        </div>

        {/* Back face */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          <img
            src={backImage}
            alt={backAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8,8,8,0.75) 0%, transparent 55%)',
            }}
          />
          {/* Label */}
          <span
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.25rem',
              backgroundColor: 'rgba(112,112,112,0.92)',
              color: '#fff',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.78rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-headings)',
            }}
          >
            {backLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

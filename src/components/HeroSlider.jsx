import React, { useState, useEffect } from 'react';

/**
 * HeroSlider — slowly crossfades between a list of images with a Ken Burns effect.
 * Renders: slide track (behind overlay) + overlay gradient + dot indicators.
 * The hero text content is rendered by the parent above this component.
 */
const HeroSlider = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 6000); // advance slide every 6 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {/* Slide track — sits at z-index 0, behind the overlay */}
      <div className="hero-slider-track">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`hero-slide${idx === current ? ' active' : ''}`}
            style={{
              opacity: idx === current ? 1 : 0,
              transition: 'opacity 2s ease-in-out',
            }}
          >
            <img src={img.src} alt={img.alt || 'Fadhili Dada'} />
          </div>
        ))}
      </div>

      {/* Overlay gradient — z-index 1 */}
      <div className="hero-overlay" />

      {/* Slide indicator dots — z-index 10 */}
      {images.length > 1 && (
        <div className="hero-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot${idx === current ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HeroSlider;

import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const ImageWithFallback = ({ src, alt, description, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`image-placeholder ${className}`}>
        <div className="image-placeholder-icon">
          <ImageIcon size={40} strokeWidth={1.5} />
        </div>
        <div className="image-placeholder-title">{alt || 'Fadhili Dada Image'}</div>
        {description && <div className="image-placeholder-desc">{description}</div>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className}`}
      onError={() => setHasError(true)}
      style={{ display: 'block' }}
    />
  );
};

export default ImageWithFallback;

import React from 'react';

const SmallImage = ({ src, alt = 'image', className = '' }) => {
  return (
    <img 
      src={src} 
      alt={alt}
      className={`w-25 h-25 object-cover rounded-4xl ${className}`}
    />
  );
};

export default SmallImage;

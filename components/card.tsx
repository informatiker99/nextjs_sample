'use client'
import React, { useState } from 'react';

const HoverHighlightCard = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 70, y: 70 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGradientPosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGradientPosition({ x: 70, y: 70 })}
      style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        cursor: 'pointer',
        position: 'relative',
        background: '#fff', // Card background color
        border: '4px solid',
        borderImageSource: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(255, 100, 100, 1), rgba(255, 100, 100, 0) 70%)`,
        borderImageSlice: 1,
        transition: 'border-image-source 0.15s ease',
      }}
    >
      Hover over me!
    </div>
  );
};

export default HoverHighlightCard;

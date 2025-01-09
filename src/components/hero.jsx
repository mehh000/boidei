'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/ads_top_1.jpg',
    '/ads_top_2.jpeg', 
    '/ads_top_3.jpg'

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px]">
      <Image
        src={images[currentImageIndex]}
        alt="Advertisement"
        fill
        className="object-cover"
        priority
      />
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-[#fd7e14]' : 'bg-white'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const ServicesSlider = ({ services }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      }, 5000); // Increased interval for better viewing
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after pause
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after pause
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after pause
  };

  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl">
      <div className="relative h-96"> {/* Increased height for better visibility */}
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            service={service}
            isActive={index === currentSlide}
          />
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSlider;
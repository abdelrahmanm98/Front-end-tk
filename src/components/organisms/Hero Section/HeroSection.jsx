import React, { useState, useEffect } from 'react';
import './HeroSection.scss';
import { Bounce, JackInTheBox, Roll, Zoom } from 'react-awesome-reveal';

const HeroSection = () => {
  const slides = [
    '/images/intro/pexels-tim-mossholder.png',
    '/images/grid/grid-right-image.webp',
    '/images/grid/grid-center-image.webp',
    '/images/intro/pexels-tim-mossholder.png',
    '/images/grid/grid-right-image.webp',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideDuration = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / (slideDuration / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  return (
    <div className='hero-section relative h-full min-h-screen w-full'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='slide-image-container'>
          <div key={currentSlide} className='slide-image-wrapper'>
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className='slide-image'
            />
          </div>

          <div key={currentSlide - 1} className='old-slide-image-wrapper'>
            <img
              src={slides[(currentSlide - 1 + slides.length) % slides.length]}
              alt={``}
              className='old-slide-image'
            />
          </div>
        </div>
      </div>

      <div className='absolute inset-0 bg-black bg-opacity-30'></div>

      <div className='ps-6 lg:ps-24 relative z-10 container mx-auto px-6 pt-32 md:pt-44 lg:pt-56 pb-20 flex flex-col justify-center items-start h-full'>
        <Roll cascade triggerOnce>
          <p className='text-[#EEF4F9] text-base mb-4'>
            Welcome To TenTwenty Farms
          </p>
        </Roll>
        <Roll cascade triggerOnce>
          <h1 className='text-[#EEF4F9] text-4xl lg:text-6xl  leading-tight'>
            From Our Farms <br /> To Your Hands
          </h1>
        </Roll>

        <JackInTheBox cascade triggerOnce>
          <div className='mt-20 lg:mt-32 flex items-center space-x-4'>
            <div
              className='progress-button relative cursor-pointer'
              onClick={nextSlide}
            >
              <img
                src={slides[(currentSlide + 1) % slides.length]}
                alt='Next Slide'
                className='next-image'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-white text-xl'>Next</span>
              </div>
              <svg className='progress-ring' viewBox='0 0 100 100'>
                <rect
                  x='5'
                  y='5'
                  width='90'
                  height='90'
                  fill='none'
                  stroke='#EEF4F9'
                  strokeWidth='4'
                  strokeDasharray='360'
                  strokeDashoffset={360 - (360 * progress) / 100}
                  style={{
                    transition: 'stroke-dashoffset 0.1s linear',
                  }}
                ></rect>
              </svg>
            </div>

            <div className='text-white flex items-center'>
              <span className='text-lg font-bold'>{`0${
                currentSlide + 1
              }`}</span>
              <div className='flex-grow mx-4 w-12 md:w-24 border-t border-white'></div>
              <span className='text-lg font-bold'>{`0${slides.length}`}</span>
            </div>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};

export default HeroSection;

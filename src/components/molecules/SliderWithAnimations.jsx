import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Fade, Slide } from 'react-awesome-reveal';

const slides = [
  {
    image: '/images/grid/grid-left-image.webp',
    title: 'Flora Delight',
    description:
      "There's always something happening at Flower Exchange! New products.",
  },
  {
    image: '/images/grid/grid-center-image.webp',
    title: "Nature's Bliss",
    description:
      'Experience the beauty of nature with our exclusive collection.',
  },
  {
    image: '/images/grid/grid-right-image.webp',
    title: 'Sunny Blooms',
    description: 'Bring sunshine into your life with our vibrant flower range.',
  },
  {
    image: '/images/grid/grid-left-image.webp',
    title: 'Flora Delight',
    description:
      "There's always something happening at Flower Exchange! New products.",
  },
  {
    image: '/images/grid/grid-center-image.webp',
    title: "Nature's Bliss",
    description:
      'Experience the beauty of nature with our exclusive collection.',
  },
  {
    image: '/images/grid/grid-right-image.webp',
    title: 'Sunny Blooms',
    description: 'Bring sunshine into your life with our vibrant flower range.',
  },
];

const SliderWithAnimations = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (event) => {
      if (cursor && isMouseInside) {
        const x = event.clientX;
        const y = event.clientY;
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseInside]);

  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setTriggerAnimation(false);
    setTimeout(() => setTriggerAnimation(true), 10);
  };

  return (
    <div
      className='relative max-h-[800px] w-full h-full lg:h-screen bg-beige flex flex-col items-center justify-center !overflow-hidden'
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
      style={{ cursor: isMouseInside ? 'none' : 'default' }}
    >
      {isMouseInside && (
        <div
          ref={cursorRef}
          className='custom-cursor fixed top-0 left-0 w-12 h-12 pointer-events-none z-50 flex items-center justify-center'
        >
          <div className='relative flex justify-center items-center w-full h-full rounded-full bg-black bg-opacity-70'>
            <p className='text-white'> &lt; &gt;</p>
          </div>
        </div>
      )}

      <div className='relative w-full perspective-container '>
        <Swiper
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={0}
          onSlideChange={handleSlideChange}
          className='w-full py-8'
          breakpoints={{
            320: {
              spaceBetween: 10,
            },
            768: {
              spaceBetween: 15,
            },
            1024: {
              spaceBetween: 20,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className='flex justify-center items-center swiper-grid-slide'
            >
              <div
                className={`relative ${
                  index === activeIndex
                    ? 'active-grid-slider'
                    : 'no-active-grid-slider'
                } w-full transition-transform duration-500 ease-in-out`}
                style={{
                  transform: `
                    translateY(${index === activeIndex ? '0px' : '50px'}) 
                  translateX(${
                    index === activeIndex
                      ? '0px'
                      : index === (activeIndex + 1) % slides.length
                      ? '50px'
                      : index ===
                        (activeIndex - 1 + slides.length) % slides.length
                      ? '-50px'
                      : '0px'
                  }) 
                    rotate(${
                      index ===
                      (activeIndex - 1 + slides.length) % slides.length
                        ? '-10deg'
                        : index === (activeIndex + 1) % slides.length
                        ? '10deg'
                        : '0deg'
                    })
                  `,
                  zIndex: index === activeIndex ? 10 : 5,
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`border border-solid border-white object-cover w-full lg:p-6
                  max-h-[200px] sm:max-h-[300px] md:min-w-[280px] lg:max-h-[500px] !min-h-[300px] lg:!min-h-[540px] lg:min-w-[400px] `}
                />
                {index === activeIndex && (
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='flex items-center justify-center w-[70px] h-[70px] bg-white text-black  px-4 py-2 rounded-full shadow-lg cursor-pointer'>
                      <p>Drag</p>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {triggerAnimation && (
        <Slide key={activeIndex} direction='up' triggerOnce duration={700}>
          <div className='text-center mt-8'>
            <h3 className='text-2xl font-bold'>{slides[activeIndex].title}</h3>
            <p className='text-gray-600 mt-2'>
              {slides[activeIndex].description}
            </p>
          </div>
        </Slide>
      )}
    </div>
  );
};

export default SliderWithAnimations;

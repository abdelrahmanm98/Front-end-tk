import React, { useState } from 'react';

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
];

const ImageGrid = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleLeftClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='relative w-full py-16 bg-beige'>
      <div className='grid grid-cols-3 gap-4 items-center'>
        <img
          src={slides[(activeIndex + slides.length - 1) % slides.length].image}
          alt='Left Image'
          className='transform -rotate-6 w-3/4'
          onClick={handleLeftClick}
        />

        <div className='relative w-full'>
          <img
            src={slides[activeIndex].image}
            alt='Center Image'
            className='w-full'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='bg-black text-white font-bold px-4 py-2 rounded-full shadow-lg cursor-pointer'>
              Drag
            </div>
          </div>
        </div>

        <img
          src={slides[(activeIndex + 1) % slides.length].image}
          alt='Right Image'
          className='transform rotate-6 w-3/4'
          onClick={handleRightClick}
        />
      </div>

      <div className='text-center mt-8'>
        <h3 className='text-2xl font-bold'>{slides[activeIndex].title}</h3>
        <p className='text-gray-600 mt-2'>{slides[activeIndex].description}</p>
      </div>
    </div>
  );
};

export default ImageGrid;

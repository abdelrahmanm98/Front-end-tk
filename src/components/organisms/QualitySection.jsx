import React from 'react';
import SectionHeader from '../molecules/SectionHeader';
import ImageGrid from '../molecules/SectionImageGrid';
import SliderWithAnimations from '../molecules/SliderWithAnimations';

const QualitySection = () => {
  return (
    <section className='py-16 bg-white'>
      <SectionHeader />
      <SliderWithAnimations />
    </section>
  );
};

export default QualitySection;

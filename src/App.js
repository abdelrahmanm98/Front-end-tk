import React from 'react';
import MainTemplate from './components/templates/MainTemplate';
import HeroSection from './components/organisms/Hero Section/HeroSection';
import QualitySection from './components/organisms/QualitySection';

const App = () => {
  return (
    <MainTemplate>
      <HeroSection />
      <QualitySection />
    </MainTemplate>
  );
};

export default App;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IMAGES } from './constants';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='HeroCarousel'>
      <h1>Welcome to Faculty of Electrical and Computer Engineering</h1>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        transitionTime={1000}
      >
        {IMAGES.map((image, index) => (
          <div key={index} className='Hero-images'>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;


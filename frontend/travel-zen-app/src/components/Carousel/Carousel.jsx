import React from 'react';
import { useState } from 'react';
import './Carousel.css'
import { TourImages } from '../Carousel/Images';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
   
    const moveToPrevious = () => {
      setCurrentIndex(prevIndex =>
        prevIndex === 0 ? TourImages.length - 1 : prevIndex - 1
      );
    };
  
    const moveToNext = () => {
      setCurrentIndex(prevIndex =>
        prevIndex === TourImages.length - 1 ? 0 : prevIndex + 1
      );
    };

    const symbols = ['◀', '▶'];

    const imageClassNames = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'];
    const overlayTexts = ['Aruba', 'Costa Rica', 'Dominican Republic', 'Dubai', 'Jamaica', 'Mexico', 'Puerto Rico', 'Turks & Caicos'];

  return (
    <div className='carousel'>
        

          <button className="prev" onClick={moveToPrevious}>{symbols[0]}</button>
        <div className='carouselInner'>
        <h2>{overlayTexts[currentIndex]}</h2>
       
         <img className={`carousel-items ${imageClassNames[currentIndex]}`}
        src={TourImages[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
  
      </div>
      <button className="next" onClick={moveToNext}>{symbols[1]}</button>
      
    </div>
  );
};


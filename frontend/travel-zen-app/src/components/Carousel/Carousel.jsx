import React from 'react';
import { useState } from 'react';
import './Carousel.css'
import { TourImages } from '../Carousel/Images';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
   
    const moveToPrevious = () => {
      setCurrentIndex(prevIndex =>
        //if prevIndex is 0 it means the current img is the first img,
        prevIndex === 0 ? TourImages.length - 1 : prevIndex - 1
      );
    };
  
    const moveToNext = () => {
      setCurrentIndex(prevIndex =>
        //if preIndex is equal to TourImages.length it means current img is the last in the array
        prevIndex === TourImages.length - 1 ? 0 : prevIndex + 1
      );
    };
    // character map on windows 
    const symbols = ['◀', '▶'];
    //saved these images to my tourimages folder in my public folder from my computer
    const imageClassNames = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'];
    //created a overlay text with name and price and called it into the index below
    const bannerText = ['Aruba $999', 'Costa Rica $1100', 'Dominican Republic $899', 'Dubai $1200', 'Jamaica $900', 'Mexico $850', 'Puerto Rico $799', 'Turks & Caicos $1000'];

  return (
    <div className='carousel'>
          <button className="prev" onClick={moveToPrevious}>{symbols[0]}</button>
        <div className='carouselInner'>
        <h2>{bannerText[currentIndex]}</h2>
       
         <img className={`carousel-items ${imageClassNames[currentIndex]}`}
        src={TourImages[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
  
      </div>
      <button className="next" onClick={moveToNext}>{symbols[1]}</button>
      
    </div>
  );
};


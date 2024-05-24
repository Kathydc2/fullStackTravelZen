import React from 'react';
import './Home.css';
import Carousel from '../../components/Carousel/Carousel';

export default function Home() {
  return (
    <div className='home'>
      <div className='imageContainer'>
      <img className='homeImg' src='https://wallpapercave.com/wp/8yskgbV.jpg'/>
      </div>
      <Carousel/> 
    
    </div>
  )
}


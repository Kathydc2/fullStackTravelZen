import React from 'react';
import './Tours.css';
import Carousel from '../Carousel/Carousel';



export default function Tours() {

  return (
    <div className='tours'>
    <div className='picContainer'>
     <img className='mainPic' src='https://silversea-discover.imgix.net/2023/08/muchsmallerhero.jpg?auto=compress%2Cformat&ixlib=php-3.3.1' />
     <div className='allTours'>All Tours</div>
    </div>

    <Carousel/>

    </div>
  );
}
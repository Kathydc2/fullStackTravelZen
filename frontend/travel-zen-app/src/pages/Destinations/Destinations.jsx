import React from 'react';
import './Destinations.css'
import Tours from '../../components/Tours/Tours';

export default function Destinations({tours, setTours}) {
  //receiving the tours and settours from the home page
  return (
    <div className='destinations'>
    <Tours tours={tours} setTours={setTours} />
    </div>
  )
}


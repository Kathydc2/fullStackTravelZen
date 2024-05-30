import React from 'react';
import './Destinations.css'
import Tours from '../../components/Tours/Tours';

export default function Destinations({tours, setTours}) {
  return (
    <div className='destinations'>
    <Tours tours={tours} setTours={setTours} />
    </div>
  )
}


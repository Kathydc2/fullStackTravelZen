import React from 'react';
import './Tours.css';

export default function Tours({tours, setTours, }) {

 

  return (
    <div className='tours'>
    <div className='picContainer'>
     <img className='mainPic' src='https://silversea-discover.imgix.net/2023/08/muchsmallerhero.jpg?auto=compress%2Cformat&ixlib=php-3.3.1' />
     <div className='allTours'>All Tours</div>
    </div>
    <div className="toursInner">
        {tours.map(tour => (
          <div className="eachTour" key={tour._id}>
            <h1 className='destination'>{tour.destination}</h1>
            <img className="tourImg" src={tour.image} alt={tour.destination} />
            <p className='price'>Price: ${tour.price}</p>
            <p className='duration'>Duration: {tour.duration} days</p>
            {/* <button className='favBtn'>Add to Favorites</button> */}
            <button className='favBtn'>Book Now</button>
          </div>
        ))}
      </div>
    
     <img className='travPic' src='https://img.freepik.com/free-photo/tourist-doing-surprise-gesture_1368-7048.jpg?size=626&ext=jpg&ga=GA1.1.1539979737.1708785603&semt=ais_user' />
        


   

    </div>
  );
}
import React from 'react';
import './Tours.css';

export default function Tours({tours, setTours, }) {
//getting the tours and settours from the destinations page where it is being rendered
 // create a book now func and fix the search engine to pull the data 

  return (
    <div className='tours'>
    <div className='picContainer'>
     <img className='mainPic' src='https://silversea-discover.imgix.net/2023/08/muchsmallerhero.jpg?auto=compress%2Cformat&ixlib=php-3.3.1' />
     <div className='allTours'>All Tours</div>
    </div>
    <div className="searchBar">
     <img className='travPic' src='https://img.freepik.com/free-photo/tourist-doing-surprise-gesture_1368-7048.jpg?size=626&ext=jpg&ga=GA1.1.1539979737.1708785603&semt=ais_user' />
        <form className='searchForm'>
            <label className="searchLabel">Destination</label>
            <input className="searchInput" type="text" name="destination" placeholder="Search"/>
            <label className="searchLabel">Departure</label>
            <input className="searchInput" type="date" name="date"/>
            <label className="searchLabel">Return</label>
            <input className="searchInput" type="date" name="date"/>
            <button className="searchBtn" type="submit">Search</button>
        </form>
    </div>
    <h1 className='tourHeader'>All Inclusive Resorts</h1>

    <div className="toursInner">
      {/* //mapping through the tours to create the cards of the tours API from my mongoDb */}
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

    </div>
  );
}
import React from 'react';
import './Services.css'

export default function Services() {
  return (
    <div className='services'>
        <div >
       <img className='traveler' src='https://img.freepik.com/free-photo/tourist-presenting-something_1368-7018.jpg?size=626&ext=jpg&ga=GA1.2.1539979737.1708785603&semt=ais_user'/>
       </div>
       <div className='servCard'>
        <img className='servImg' src='https://cdn-icons-png.flaticon.com/256/129/129023.png'/>
        <h3>Weather Calculation</h3>
        <p>Plan Your Journey with Precision: Stay Ahead with Accurate Weather Insights!</p>
       </div>

       <div className='servCard'>
       <img className='servImg' src='https://cdn-icons-png.freepik.com/512/5321/5321456.png'/>
       <h3>Customization</h3>
       <p>Explore, Customize, Discover: Your Perfect Journey Awaits!</p>
       </div>

       <div className='servCard'>
       <img className='servImg' src='https://www.freeiconspng.com/uploads/travel-guide-icon-map-ticket-travel-icon-17.png'/>
       <h3>Best Tour Guide</h3>
       <p>Discover the World with Experts: Your Journey, Our Passion!</p>

       </div>
      
    </div>
  );
};

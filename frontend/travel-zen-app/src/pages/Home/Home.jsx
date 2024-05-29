import React from 'react';
import './Home.css';
import Carousel from '../../components/Carousel/Carousel';
import RemoveReview from '../../components/Review/RemoveReview';
import ReviewApi from '../../utils/ReviewApi';
import {  useState, createContext } from 'react';
import Services from '../../components/Services/Services';


export const ReviewsContext = createContext();

export default function Home() {
  const [reviews, setReviews] = useState([]);
  

  const [createReviewForm, setCreateReviewForm] = useState({
    name: "",
    description: "",
  });
  
  const [updateReviewForm, setUpdateReviewForm] = useState({
    _id: null,
    name: "",
    description: "",
  });



  return (
    <div className='home'>
      <div className='imageContainer'>
        <img className='homeImg' src='https://wallpapercave.com/wp/8yskgbV.jpg'/>
      </div>
      <div className='innerContain'>
        <div className='listContain'>
        <h2 className='header'>Discover your next adventure with <span>Travel Zen</span></h2>
          <div className='imageContain'>
            <div className='card'>
              <img className='img1' src='https://imageio.forbes.com/specials-images/dam/imageserve/1170705808/960x0.jpg?height=474&width=711&fit=bounds'/>
            </div>
            <div className='card'>
              <img className='gif' src='https://www.thehotelsnetwork.com/static/thn-nostromo-tools-prd/PWFBDMS3073VJG98CJCMV5MH10'/>
            </div>
            <div className='card'>
              <img className='img2' src='https://virtuoso-prod.dotcms.cloud/dA/bb650b30-936d-49fe-aae0-179fbfb47ec2/previewImage/TopVacationSpots_hero.jpg'/>
            </div>
          </div>
          
        </div>
        <Carousel/> 
      </div>
      <Services/>
      <ReviewsContext.Provider value={{reviews, setReviews, createReviewForm, setCreateReviewForm, updateReviewForm, setUpdateReviewForm}}>
        <ReviewApi/>
        <RemoveReview />
      </ReviewsContext.Provider>
    </div>
  )
}
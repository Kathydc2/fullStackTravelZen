import React from 'react';
import axios from 'axios';
import { useState, useContext} from 'react';
import { ReviewsContext } from '../../pages/Home/Home';
import './RemoveReview.css'
import PostReview from './PostReview';
import UpdateReview from './UpdateReview';

export default function RemoveReview({user}) {
  const { reviews, setReviews, setUpdateReviewForm } = useContext(ReviewsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const deleteReview = async (_id) => {
    if (!user._id) {
      alert("Cannot delete this feedback");
      return;
    }
    try {
      await axios.delete(`http://localhost:3000/reviews/${_id}`);
      const newReviews = reviews.filter((review) => review._id !== _id);
      setReviews(newReviews);
    } catch (error) {
      console.error(error);
      alert("Failed to delete feedback");
    }
  };

  const toggleUpdate = (review) => {
    if (!user._id) {
      alert("Cannot update this feedback");
      return;
    }
    setUpdateReviewForm({
      _id: review._id,
      name: review.name ,
      description: review.description ,
      userId: user._id, 
    });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const symbols = ['◀', '▶'];

  return (
    <div className='removeReview'>
      <div className="reviewDisplay">
      <PostReview user={user}/>
      <UpdateReview user={user}/>
      {currentReviews.map((review) => (
        <div className='review' key={review._id}>
         <h2>{review.name}</h2>
            <p>{review.description }</p>
        <div className="btnContainer">
        <button className='removeBtn' onClick={() => toggleUpdate(review)}>Update</button>
        <button className='removeBtn'onClick={() => deleteReview(review._id, review.userId)}>Delete</button>
        </div>
        </div>
        ))}
      </div>
    <div className="pages">
      <button className='pageBtn' onClick={prevPage} disabled={currentPage === 1}>{symbols[0]}</button>
      <span>{currentPage} / {totalPages}</span>
      <button className='pageBtn' onClick={nextPage} disabled={currentPage === totalPages}>{symbols[1]}</button>
    </div>
    </div>
  );
}
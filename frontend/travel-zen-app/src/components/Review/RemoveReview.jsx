import React from 'react';
import axios from 'axios';
import { useState, useContext } from 'react';
import { ReviewsContext } from '../../pages/Home/Home';
import './RemoveReview.css'
import PostReview from './PostReview';
import UpdateReview from './UpdateReview';

export default function RemoveReview() {
  const { reviews, setReviews, setUpdateReviewForm } = useContext(ReviewsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const deleteReview = async (_id) => {
    try {
      await axios.delete(`http://localhost:3000/reviews/${_id}`);
      const newReviews = reviews.filter((review) => review._id !== _id);
      setReviews(newReviews);
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const toggleUpdate = (review) => {
    console.log("CurrentReview :", review);
    setUpdateReviewForm({
      _id: review._id,
      name: review.name,
      description: review.description,
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

  return (
    <div className='removeReview'>
      <div className="reviewDisplay">
        <PostReview/>
        <UpdateReview/>
        {currentReviews.map((review) => (
          <div className='review' key={review._id}>
            <h2>{review.name}</h2>
            <p>{review.description}</p>
            <div className="btnContainer">
              <button
                onClick={() => {
                  toggleUpdate(review);
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  deleteReview(review._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
}
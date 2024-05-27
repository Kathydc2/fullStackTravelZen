import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { ReviewsContext } from '../../App';

export default function RemoveReview() {
  const { reviews, setReviews, setUpdateReviewForm } = useContext(ReviewsContext);

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

  return (
    <div className='removeReview'>
      <div className="reviewDisplay">
        {reviews.map((review) => (
          <div key={review._id}>
            <h1>{review.name}</h1>
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
    </div>
  );
}
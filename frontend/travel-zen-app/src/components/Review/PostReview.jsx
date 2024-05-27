// import { useState } from 'react';
import { useContext } from 'react';
import { ReviewsContext } from '../../App';
import axios from 'axios'
import React from 'react';

export default function PostReview() {
  const { reviews, setReviews, createReviewForm, setCreateReviewForm } = useContext(ReviewsContext);

  const createReview = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/reviews", createReviewForm);
    console.log(res);
    setReviews(() => [...reviews, res.data.review]);
    // Clear Form
    setCreateReviewForm(() => ({
      name: "",
      description: "",
    }));
  };

    
  const updateCreateFormField = (e) => {
    const { value, name } = e.target;
    setCreateReviewForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };;

  return (
    <div className='createReview'>
        <div className="formAdmin">
          <h1>+New Review</h1>
          <form onSubmit={createReview}>
            <input
              name="name"
              value={createReviewForm.name}
              placeholder="name"
              onChange={updateCreateFormField}
            />
            <textarea
              name="description"
              value={createReviewForm.description}
              placeholder="description"
              onChange={updateCreateFormField}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      
    </div>
  );
};

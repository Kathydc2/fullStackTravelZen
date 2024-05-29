import { useContext } from 'react';
import { ReviewsContext } from '../../pages/Home/Home';
import axios from 'axios'
import React from 'react';
import './PostReview.css'


export default function PostReview() {
  const { setReviews, createReviewForm, setCreateReviewForm } = useContext(ReviewsContext);
  const { user } = useContext(ReviewsContext);


  const createReview = async (e) => {
    e.preventDefault();

    if (!user || !user._id) {
      alert("User must be logged in to post a review");
      return;
    }

    const reviewData = {
      ...createReviewForm,
      user: user._id,
    };

    try {
      const res = await axios.post("http://localhost:3000/reviews", reviewData);
      console.log(res);
      setReviews((prevReviews) => [...prevReviews, res.data.review]);
      setCreateReviewForm({
        userId: " ",
        name: "",
        description: "",
      });
    } catch (error) {
      console.error("Error creating review:", error);
      alert("Failed to create review");
    }
  };

  const updateCreateFormField = (e) => {
    const { value, name } = e.target;
    setCreateReviewForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='createReview'>
        <div className="postReview">
          <h1 className='postHeader'>We'd love your feedback!</h1>
          <form onSubmit={createReview}>
            <input className='createInput'
              name="name"
              value={createReviewForm.name}
              placeholder="Name"
              onChange={updateCreateFormField}
            />
            <textarea className='createText'
              name="description"
              value={createReviewForm.description}
              placeholder="Feedback"
              onChange={updateCreateFormField}
            />

            <button className='createBtn' type="submit">Submit</button>
          </form>
        </div>
      
    </div>
  );
};

import { useContext, useState } from 'react';
import { ReviewsContext } from '../../pages/Home/Home';
import axios from 'axios'
import React from 'react';
import './PostReview.css'


export default function PostReview({user}) {
  const { setReviews ,createReviewForm, setCreateReviewForm} = useContext(ReviewsContext);
  const [createdReview, setCreatedReview] = useState(false);


  const createReview = async (e) => {
    e.preventDefault();

    if (!user._id) {
      alert("Login to leave feedback!");
      return;
    }

    if (createdReview) {
      alert("Please edit your existing feedback");
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
      setCreatedReview(true);
    } catch (error) {
      console.error(error);
      alert("failed to post");
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

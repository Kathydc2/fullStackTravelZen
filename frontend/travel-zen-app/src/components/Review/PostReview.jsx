import { useContext } from 'react';
import { ReviewsContext } from '../../pages/Home/Home';
import axios from 'axios'
import React from 'react';
import './PostReview.css'

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
        <div className="postReview">
          <h1>We'd love your feedback!</h1>
          <form onSubmit={createReview}>
            <input className='createInput'
              name="name"
              value={createReviewForm.name}
              placeholder="name"
              onChange={updateCreateFormField}
            />
            <textarea className='createText'
              name="description"
              value={createReviewForm.description}
              placeholder="description"
              onChange={updateCreateFormField}
            />

            <button className='createBtn' type="submit">Submit</button>
          </form>
        </div>
      
    </div>
  );
};

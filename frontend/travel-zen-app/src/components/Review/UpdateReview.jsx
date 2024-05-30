import React from 'react';
import axios from 'axios'
import { ReviewsContext } from '../../pages/Home/Home';
import { useContext, useEffect, useState } from 'react';
import './UpdateReview.css'

export default function UpdateReview({user}) {
  const { reviews, setReviews, updateReviewForm, setUpdateReviewForm} = useContext(ReviewsContext);
  const [updateReview, setUpdateReview] = useState(false);

  useEffect(() => {
    setUpdateReviewForm(prevForm => ({
      ...prevForm,
      user: user._id
    }));
  }, [user._id, setUpdateReviewForm]);


  const editReview = async (e) => {
    e.preventDefault();

    if (!user._id) {
      alert("Login to leave feedback!");
      return;
    }
    
    const reviewData = {
      ...updateReviewForm,
      user: user._id,
    };

    try {
      const res = await axios.put(`http://localhost:3000/reviews/${updateReviewForm._id}`, reviewData);
      console.log("Response:", res);

      const updatedReview = res.data.review;
      console.log("updatedReview:", updatedReview);
 
      setReviews((prevReviews) => prevReviews.map(review => 
        review._id === updateReviewForm._id ? res.data.review : review
      ));

      setUpdateReviewForm({
        _id: updateReviewForm._id,
        name: "",
        description: "",
      });
      setUpdateReview(true);
    } catch (error) {
      console.error(error);
      alert("failed to post");
    }
  };

  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;
    setUpdateReviewForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

   
  return (
    <div className='updateReview'>
      {updateReviewForm._id && (
        <>
          <div className="formAdmin">
            <h2>Edit Feedback</h2>
            <form onSubmit={editReview}>
              <input className='updateInput'
                name="name"
                value={updateReviewForm.name}
                placeholder="Name"
                onChange={handleUpdateFieldChange}
              />
              <textarea className='updateText'
                name="description"
                value={updateReviewForm.description}
                placeholder="Feedback"
                onChange={handleUpdateFieldChange}
              />
            
            <button className='updateBtn' type="submit">Submit</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

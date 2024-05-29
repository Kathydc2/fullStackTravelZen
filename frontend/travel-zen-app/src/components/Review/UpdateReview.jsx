import React from 'react';
import axios from 'axios'
import { ReviewsContext } from '../../pages/Home/Home';
import { useContext, useEffect } from 'react';
import './UpdateReview.css'

export default function UpdateReview({user}) {
  const { reviews, setReviews, updateReviewForm, setUpdateReviewForm, createReviewForm, setCreateReviewForm} = useContext(ReviewsContext);

  useEffect(() => {
   
    setCreateReviewForm(prevForm => ({
      ...prevForm,
      user: user._id
    }));
  }, [user._id, setCreateReviewForm]);

  
  const updateReview = async (e) => {
    e.preventDefault();
    const { name, description, user } = updateReviewForm;

    const reviewIndex = reviews.findIndex((review) => review._id === _id);

    if (reviewIndex === -1 || reviews[reviewIndex].userId !== user._id) {
      alert("Cannot update this review");
      return;
    }

    try {
      const res = await axios.put(
        `http://localhost:3000/reviews/${_id}`,
        { name, description, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      console.log(res);

      const newReviews = [...reviews];
      newReviews[reviewIndex] = res.data.review;
      setReviews(newReviews);

      // Reset the form
      setUpdateReviewForm({
        _id: null,
        name: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
    }
  };;

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
            <form onSubmit={updateReview}>
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

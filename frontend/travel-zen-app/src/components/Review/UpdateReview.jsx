import React from 'react';
import axios from 'axios'
import { ReviewsContext } from '../../pages/Home/Home';
import { useContext } from 'react';
import './UpdateReview.css'

export default function UpdateReview() {
  const { reviews, setReviews, updateReviewForm, setUpdateReviewForm} = useContext(ReviewsContext);

    const handleUpdateFieldChange = (e) => {
        const { value, name } = e.target;
        setUpdateReviewForm(() => ({
          ...updateReviewForm,
          [name]: value,
        }));
      };
    
    
      const updateReview = async (e) => {
        e.preventDefault();
        const { name, description } = updateReviewForm;
        const res = await axios.put(
          `http://localhost:3000/reviews/${updateReviewForm._id}`,
          { name, description }
        );
        console.log(res);
    

        const newReviews = [...reviews];
        const reviewIndex = reviews.findIndex((review) => {
          return review._id === updateReviewForm._id;
        });
        newReviews[reviewIndex] = res.data.review;
        setReviews(newReviews);
    
    
        setUpdateReviewForm(() => ({
          _id: null,
          name: "",
          description: "",
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

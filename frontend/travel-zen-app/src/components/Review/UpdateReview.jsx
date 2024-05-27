import React from 'react';
import axios from 'axios'
import { ReviewsContext } from '../../pages/Home/Home';
import { useContext } from 'react';

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
    
        // Update State
        const newReviews = [...reviews];
        const reviewIndex = reviews.findIndex((review) => {
          return review._id === updateReviewForm._id;
        });
        newReviews[reviewIndex] = res.data.review;
        setReviews(newReviews);
    
        // Clear Form
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
              <h1>Update Review</h1>
              <form onSubmit={updateReview}>
                <input
                  name="name"
                  value={updateReviewForm.name}
                  placeholder="name"
                  onChange={handleUpdateFieldChange}
                />
                <textarea
                  name="description"
                  value={updateReviewForm.description}
                  placeholder="description"
                  onChange={handleUpdateFieldChange}
                />
                
                 

                <button type="submit">Submit</button>
                </form>
                </div>
          </>
        )}
    
      
    </div>
  );
};

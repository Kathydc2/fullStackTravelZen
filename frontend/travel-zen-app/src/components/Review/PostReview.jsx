import { useContext, useState } from 'react';
import { ReviewsContext } from '../../pages/Home/Home';
import axios from 'axios'
import React from 'react';
import './PostReview.css'


export default function PostReview({user}) {
  //user is being passed down from removeReview
  //using useContext which is being passed down from the HomePage
  const { setReviews ,createReviewForm, setCreateReviewForm} = useContext(ReviewsContext);
  const [createdReview, setCreatedReview] = useState(false);


  const createReview = async (e) => {
    e.preventDefault();
    //checking user._id
    if (!user._id) {
      alert("Login to leave feedback!");
      return;
    }
    //if the user tries to resubmit another review
    if (createdReview) {
      alert("Please edit your existing feedback");
      return;
    }

    const reviewData = {
      //creates a new obj by spreading properties of createReviewForm and adding new property user with the user._id value
      ...createReviewForm,
      user: user._id,
    };

    try {
      const res = await axios.post("http://localhost:3000/reviews", reviewData);
      console.log(res);
      //updates the reviews state by adding new review received 
      //adding the new review to the existing preReviews using the spread operator and appends it to the res.data.review
      setReviews((prevReviews) => [...prevReviews, res.data.review]);
      //resets the state to its intial values 
      setCreateReviewForm({
        userId: " ",
        name: "",
        description: "",
      });
      //sets the createReviw to true
      setCreatedReview(true);
    } catch (error) {
      console.error(error);
      alert("failed to post");
    }
  };
  //used to update the inputs field
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

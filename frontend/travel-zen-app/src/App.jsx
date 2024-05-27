import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from "axios";

import { useState, useEffect } from 'react';
import Review from './components/Review/Review';


import  Destinations  from './pages/Destinations/Destinations';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';


export default function App() {
  const [reviews, setReviews] = useState([]);

  const [createReviewForm, setCreateReviewForm] = useState({
    name: "",
    description: "",
  });
  const [updateReviewForm, setUpdateReviewForm] = useState({
    _id: null,
    name: "",
    description: "",
  });

  const handleCreateReview = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/reviews", createReviewForm);
    // console.log(res);
    setReviews(() => [...reviews, res.data.review]);
};

  const updateCreateFormField = (e) => {
    const { value, name } = e.target;
    // console.log({ name, value });

    // Clear Form
    setCreateReviewForm(() => ({
      ...createReviewForm,
      [name]: value,
    }));
    // console.log("form cleared.");
  };



  const fetchReviews = async () => {
    const response = await axios.get("http://localhost:3000/reviews");
    const info = await response.data;
    // console.log(info);
    setReviews(info.reviews);
    // console.log("-Reviews Fetched-");
  };

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
    // console.log(res);

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

  const toggleUpdate = (review) => {
    // console.log("CurrentReview :", review);
    setUpdateReviewForm({
      _id: review._id,
      name: review.name,
      description: review.description,
    });
  };


  const deleteReview = (_id) => {
    const res= axios.delete(`http://localhost:3000/reviews/${_id}`);
    // 2. Update
    const newReviews = [...reviews].filter((review)=>{
      return review._id !== _id
    })
    setReviews(newReviews)
  };

  useEffect(() => {
    fetchReviews();
  }, []);


  return (
    <div className='App'>
      <div className="formContainer">
        <div className="formAdmin">
          <h1>+New Review</h1>
          <form onSubmit={handleCreateReview}>
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
        <hr />
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
       
            <Review reviews={reviews} editFunc={toggleUpdate} deleteFunc={deleteReview} />
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     
      <Footer/>
    
    </div>
  );
};



import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';
import  Destinations  from './pages/Destinations/Destinations';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import UpdateReview from './components/Review/UpdateReview';
import PostReview from './components/Review/PostReview';
import RemoveReview from './components/Review/RemoveReview';
import Api from './utils/Api';




export const ReviewsContext = createContext();

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


  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <ReviewsContext.Provider value={{reviews, setReviews, createReviewForm, setCreateReviewForm, updateReviewForm, setUpdateReviewForm}}>
      <Api/>
      <UpdateReview />
      <PostReview />
      <RemoveReview />
      </ReviewsContext.Provider>
      <Footer/>
    
    </div>
  );
};



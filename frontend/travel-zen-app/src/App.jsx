import './App.css';
import { useState, useEffect } from 'react';
// import { getUsers } from './utils/user-api';
import { Route, Routes } from 'react-router-dom';
import  Destinations  from './pages/Destinations/Destinations';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';



export default function App() {

  return (
    <div className='App'>
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



import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import  Destinations  from './pages/Destinations/Destinations';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';



export default function App() {
  const [user, setUser] = useState([]);
  const [tours, setTours] = useState([]);


  const fetchAllTours = async () => {
    try{
      const response = await axios.get("http://localhost:3000/tours");
      const toursData = await response.data.tours;
      console.log("Tours data:", toursData);
      setTours(toursData);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };
  
    useEffect(() => {
      fetchAllTours();
    }, []);
  

  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser}/>}/>
        <Route path='/destinations' element={<Destinations tours={tours} setTours={setTours}/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login setUser={setUser} />} />
      </Routes>
  
      
      <Footer/>
    
    </div>
  );
};



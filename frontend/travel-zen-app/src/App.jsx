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
import RegisterForm from './components/RegisterForm/RegisterForm';


export default function App() {
  // const [users, setUsers] = useState([]);
  const [updateForm, setUpdateForm] = useState({_id: null, username: '', email: '', password: ''});

  // useEffect(() => {
  //   getUsers(setUsers)
  // }, [])


  return (
    <div className='App'>
      <Nav/>
      {/* <RegisterForm setUsers={setUsers}/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    
    </div>
  )
}



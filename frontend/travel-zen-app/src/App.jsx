import './App.css';
import axios from "axios";
import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import  Destinations  from './pages/Destinations/Destinations';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';



export default function App() {
  const [user, setUser] = useState([]);

  //fetch all users to prop drill
  // const fetchUsers = async () => {
  //   try{
  //     const response = await axios.get("http://localhost:3000/users");
  //     const users = await response.data;
  //     setUser(users);
  //     console.log("-Users Fetched-", users);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };
  
    // useEffect(() => {
      // fetchUsers();
    // }, []);
  


  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser}/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login setUser={setUser} />} />
      </Routes>
  
      
      <Footer/>
    
    </div>
  );
};



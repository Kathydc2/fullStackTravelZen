import React from 'react';
// using useNavigate to navigate between diff routes
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export default function LogOutFunc() {
    const navigate = useNavigate();

    async function logOut(e) {
        //prevents the page from rerendering 
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/auth/logout', {
                method: 'GET',
            });
            if (response.ok) {
                alert("Logout Successful");
                navigate('/login');
                console.log('Logout Successful');
            } else {
                alert('Logout failed');
            }
        } catch (error) {
            console.error(error);
            alert('Logout failed');
        }
    };

  return (
    <div className='logout'>
        <button className='logoutBtn' onClick={logOut}>Log Out</button>
    </div>
  );
};

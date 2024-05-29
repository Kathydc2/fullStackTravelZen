import React from 'react';
import LoginForm from '../../components/LoginOutFunc/LoginForm';


export default function Login({setUser}) {
  return (
    <div className='Login'>
    <LoginForm setUser={setUser}/>
    
    </div>
  )
}


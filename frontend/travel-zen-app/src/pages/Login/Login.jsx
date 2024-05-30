import React from 'react';
import LoginForm from '../../components/LoginOutFunc/LoginForm';


export default function Login({setUser}) {
  //being passed down from app to loginform
  return (
    <div className='Login'>
    <LoginForm setUser={setUser}/>
    
    </div>
  )
}


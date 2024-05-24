import React from 'react';
// import { useState } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './Register.css'

export default function Register() {
  // const [users, setUsers] = useState([]); 

  return (
    <div className='Register'>
    <RegisterForm/>
    </div>
  )
}

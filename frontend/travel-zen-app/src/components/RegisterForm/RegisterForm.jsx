import React from 'react';
import './RegisterForm.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";




export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            });
            const data = await response.json();
            if (response.ok) {
                alert("Registration Successful");
                navigate('/login');
                console.log(data); 
            } else {
                alert(data.message || 'error with registration');
            }
        } catch (error) {
            console.error(error);
            alert('error with registration');
        }
    };
    

  return (
    <form className="registerForm" onSubmit={handleSubmit}>
            <img src="https://st2.depositphotos.com/1001599/43046/v/450/depositphotos_430460192-stock-illustration-sign-page-abstract-concept-vector.jpg" className='registerImg'/>
        <div className='form'>
        <img src='https://banner2.cleanpng.com/20190201/fcp/kisspng-computer-icons-scalable-vector-graphics-portable-n-martin-fritz-mibfritz-5c54bcf0846d24.0059587615490572645424.jpg' className='loginLogo'/>
        <label className='label'>Register</label>
        <input className='input'
            type="text" 
            value={username} 
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)} 
            required 
        />
        <input className='input'
            type="email" 
            value={email} 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} 
            required 
        />
        <input className='input'
            type="password" 
            value={password} 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)} 
            required 
        />
        
        <button className='submit' type="submit">Register</button>
        <p className="login">Already a member? <Link to="/login">Login</Link></p>
        </div>
    </form>
    );
};

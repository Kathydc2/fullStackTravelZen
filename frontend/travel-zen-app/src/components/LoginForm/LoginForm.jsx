import React from 'react';
import './LoginForm.css';
import { useState } from "react";
import { Link } from "react-router-dom"



export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data); 
                alert(`Welcome Back`);
            } else {
                setErrorMessage(data.message);
                alert("Sorry, we don't recognize this email/password");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="loginForm"  onSubmit={handleSubmit}>
                <img src="https://st2.depositphotos.com/1001599/43046/v/450/depositphotos_430460192-stock-illustration-sign-page-abstract-concept-vector.jpg" className='loginImg'/>
            <div className='form'>
                <img src='https://banner2.cleanpng.com/20190201/fcp/kisspng-computer-icons-scalable-vector-graphics-portable-n-martin-fritz-mibfritz-5c54bcf0846d24.0059587615490572645424.jpg' className='loginLogo'/>
                <label className='label'>Login</label>
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
                <button className="submit" type="submit">Login</button>
                <p className="register">Not a member? <Link to="/register">Register here!</Link></p>
            
            </div>
            
        </form>
    );
};
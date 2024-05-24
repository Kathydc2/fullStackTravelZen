import React from 'react';
import './RegisterForm.css';
import { useState } from "react";



export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            console.log(data); 
        } catch (error) {
            console.error(error); 
        }
    };
    

  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Username:</label>
        <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
        />
    </div>
    <div>
        <label>Email:</label>
        <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
        />
    </div>
    <div>
        <label>Password:</label>
        <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
        />
    </div>
    <button type="submit">Register</button>
</form>
);
};

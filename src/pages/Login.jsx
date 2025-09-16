import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './StyleSheet/App.css'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate() // Hook for navigation
     const { setUser } = useContext(UserContext);
   async function handleSubmit(e) {
    e.preventDefault();
    try {
        const login = await fetch('http://localhost:3333/user/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await login.json();
        setMessage(data.message);

        if (login.ok) {
            setEmail("");
            setPassword("");

            // Store token
            if (data.token) {
                localStorage.setItem('authToken', data.token);
            }

            // Fetch all users with token
            const token = localStorage.getItem("authToken");

            const details = await fetch("http://localhost:3333/user/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const users = await details.json();
            console.log("Fetched users:", users);
            setUser({userName : users.name,userEmail : users.email,userRole : users.role})
            // Redirect to dashboard
            if(users.role=== "Worker"){
                navigate('/workerdashboard')
            }
            if(users.role === "Doctor"){
                navigate('/doctor')
            }
            if(users.role === "Admin"){
                navigate('/admindashboard')
            }

        }
    } catch (error) {
        console.log(error);
        setMessage("An error occurred. Please try again.");
    }
}

    return (
        <>
            <div className="login_page">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <p className='message'>{message}</p>
                    <p>
                        Don't have an account?{" "}
                        <Link to="/landing/signup">Sign up</Link>
                    </p>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login
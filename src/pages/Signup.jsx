import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './StyleSheet/App.css'
function Signup() {
  const [role, setRole] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(i) {
    i.preventDefault()
    try {
      const signupPost = await fetch('http://localhost:3333/user/signup',
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ name, email, password, role })
        })
      const data = await signupPost.json();
      setMessage(data.message)
      console.log(data)
      if (signupPost.ok) {
        setEmail("")
        setName("")
        setPassword("")
        setRole("")
        
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="signup_page">
        <form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id='name' value={name} onChange={(i) => setName(i.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' value={password} onChange={(i) => setPassword(i.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Doctor">Doctor</option>
              <option value="Worker">Worker</option>
            </select>
          </div>
          <button type='submit'>Sign up</button>
          <p className='message'>{message}</p>
          <p>
            Already have an account?{" "} <Link to="/landing/login">Login</Link>
          </p>
        </form>
      </div>
      
    </>
  )
}

export default Signup
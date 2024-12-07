'use client';
import { useState } from 'react';
import '../login/login.css'
import Link from 'next/link';
import { redirect } from 'next/navigation';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
     redirect('/login');
    } else {
      setError(data.msg);
    }
  };

  return (
    <main>
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">name</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <Link href="/login">Login here</Link></p>
      </div>
    </div>
    </main>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const u = { email, password };

    fetch('http://localhost:3000/user')
      .then((resp1) => resp1.json())
      .then((resp2) => {
        const user = resp2.find((r) => r.email === u.email && r.password === u.password);
        if (user) {
          localStorage.setItem('login', JSON.stringify(u));
          navigate('/');
        } else {
          alert('Please enter Correct Details');
        }
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }

  return (
    <div>
     
      <nav className="navbar navbar-expand-lg navbar-stick p-3 ">
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            <img src="images/logo.png" alt="LUGX" style={{ height: '50px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-2">
                <a className="nav-link text-white btn btn-primary rounded-pill" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white" href="/shop">
                  Our Shop
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white btn btn-primary rounded-pill" href="/details">
                  Product Details
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white btn btn-primary rounded-pill" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="container-fluid banner-img">
        <h1 className="fw-bold text-center text-white text-uppercase">Login</h1>
        <p className="fw-bold text-center text-white mt-2">Home &gt; SignIn</p>
      </div>

   
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
          <div className="text-center mb-4">
            <h4>Login</h4>
            <p className="text-muted">Access your account</p>
          </div>
          <form onSubmit={(e) => login(e)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => Setemail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => Setpassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <div className="text-center mt-3">
              <p className="small">Don't have an account? <a href="/reg" className="text-decoration-none">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;

import React, { useState } from 'react'
import Footer from './Footer'

function Signup() {

  const[name , Setname] = useState("")
  const[email , Setemail] = useState("")
  const [password , Setpassword] = useState("")
  const [city , Setcity] = useState("")

  function adduser(e)
  {
    e.preventDefault()
    let user = [name,email,password,city]
    fetch('http://localhost:3000/user',{
      method:"post",
      headers:{
        "Content-type":"application/json"
      },
        body:JSON.stringify(user),
    })
    window.location.reload()
    window.location.href = "/login"
  }

  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-stick p-3">
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
                                  OurShop
            
                                </a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-white btn btn-primary rounded-pill" href="#product-details">
                                    Product Details
                                </a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-white btn btn-primary rounded-pill" href="#contact">
                                    Contact Us
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav> 
          <div className="container-fluid banner-img">
        <h1 className="fw-bold text-center text-white text-uppercase">Register</h1>
        <p className="fw-bold text-center text-white mt-2">Home &gt; Signup</p>
      </div> 
      <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 w-100" style={{maxWidth:"400px"}}>
            <div class="text-center mb-4">
                <h4>Register</h4>
                <p class="text-muted">Create your account</p>
            </div>
            <form onSubmit={adduser}>
                <div class="mb-3">
                    <label for="fullName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fullName" placeholder="Enter your full name" value={name} onChange={(e)=> Setname(e.target.value)} required/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=> Setemail(e.target.value)} required/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Create a password" value={password} onChange={(e)=> Setpassword(e.target.value)} required/>
                </div>
                <div class="mb-3">
                    <label for="City" class="form-label">City</label>
                    <input type="text" class="form-control" id="city" placeholder="Enter Your City" value={city} onChange={(e)=> Setcity(e.target.value)} required/>
                </div>
                <div class="d-grid">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
                <div class="text-center mt-3">
                    <p class="small">Already have an account? <a href="/login" class="text-decoration-none">Login</a></p>
                </div>
            </form>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Signup

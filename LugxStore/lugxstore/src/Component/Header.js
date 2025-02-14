import React from 'react'


function Header() {
  return (
    
    
    <div className="homepage-container" style={{ backgroundColor: '#0270f7' }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand text-white" href="/#">
            <img src="images/logo.png" alt="LUGX" style={{ height: '40px' }} /> 
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
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/shop">
                  Our Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/details">
                  Product Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/login">
                  SignIn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/reg">
                  SignUp
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

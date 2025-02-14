import React from 'react'


function Secondnav() {
  return (
   
    <div className='container-fluid'>
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
    </div>
  )
}

export default Secondnav

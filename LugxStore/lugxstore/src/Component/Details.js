import React from 'react';
import Trending from './Trending';

function Details() {
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
                                <a className="nav-link text-white" href="/cart">
                                    Cart
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

            {/* Product Details */}
            <div className="container mt-5">
                <div className="row bg-light">
                    <div className="col-lg-6">
                        <img src="images/single-game.jpg" alt="Product" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 mt-5">
                        <h2 className="fw-bold">Call of Duty&reg;: Modern Warfare&reg; II</h2>
                        <p className="mt-5">
                            <s style={{ color: "gray" }}>2500₹</s>
                            <sup className="fw-bold text-primary fs-3">1500₹</sup>
                        </p>
                        <p style={{ color: "gray" }} className="mt-5">
                            LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is
                            provided by TemplateMo and it is suitable for your gaming shop ecommerce websites.
                            Feel free to use this for any purpose. Thank you.
                        </p>

                        <div className="row mt-5 ">
                            <div className="col-sm-2">
                                <p style={{ color: "gray" }} className="fw-light">GameId:</p>
                            </div>
                            <div className="col-sm-2">
                                <p className="text-primary fw-bold">COD MWII</p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-2">
                                <p style={{ color: "gray" }} className="fw-light">Genre:</p>
                            </div>
                            <div className="col-sm-2">
                                <p className="text-primary fw-bold">Action,Single,Team</p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-2">
                                <p style={{ color: "gray" }} className="fw-light">MultiTags:</p>
                            </div>
                            <div className="col-sm-2">
                                <p className="text-primary fw-bold">War,BattleRoyal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="container bg-light">
                <ul className="nav nav-tabs mt-5">
                    <li className="nav-item">
                        <a className="nav-link active" href="#description" data-bs-toggle="tab">
                            Description
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#reviews" data-bs-toggle="tab">
                            Reviews (3)
                        </a>
                    </li>
                </ul>

                <div className="tab-content mt-5">
                    <div className="tab-pane fade show active" id="description">
                        <p>
                            You can search for more templates on Google Search using keywords such as
                            "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc.
                        </p>
                    </div>
                    <div className="tab-pane fade " id="reviews">
                        <p>
                            Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated
                            charcoal.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-5 p-5'>
                <Trending/>
            </div>
        </div>
    );
}

export default Details;

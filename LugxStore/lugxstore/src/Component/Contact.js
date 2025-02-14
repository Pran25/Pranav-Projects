import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-stick p-3">
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            <img src="images/logo.png" alt="LUGX" style={{ height: "50px" }} />
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
                <a className="nav-link text-white btn btn-primary rounded-pill" href="/details">
                  Product Details
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     
      <div className="container-fluid banner-img">
        <h1 className="fw-bold text-center text-white text-uppercase">Contact us</h1>
        <p className="fw-bold text-center text-white mt-2">Home &gt; Contact us</p>
      </div>

      <div className="container mt-5">
        <div className="row">
        
          <div className="col-lg-5 bg-light p-4 rounded">
            <p className="text-danger fw-lighter mt-2">Contact us</p>
            <h2 className="text-dark fw-bolder mt-3">Say Hello!</h2>
            <p className="mt-4 text-muted">
              LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo
              and it is suitable for your gaming shop ecommerce websites.
            </p>
            <p className="mt-4">📍 Address:</p>
            <p className="text-muted">Sunny Isles Beach, FL 33160, United States</p>
            <p className="mt-4">📞 Phone:</p>
            <p className="text-muted">+123 456 7890</p>
            <p className="mt-4">✉ Email:</p>
            <p className="text-muted">lugx@contact.com</p>
          </div>

          
          <div className="col-lg-7">
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59808.09127903596!2d74.96675742796647!3d20.464958863694942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9550deb6573f5%3A0xb40712816fc972bb!2sChalisgaon%2C%20Maharashtra%20424101!5e0!3m2!1sen!2sin!4v1738052091514!5m2!1sen!2sin" width="100%" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-4 rounded"/>

            <div className="mt-5 p-4 border rounded shadow bg-light">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control rounded-pill" placeholder="Your Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control rounded-pill" placeholder="Your Surname" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control rounded-pill" placeholder="Your E-mail" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control rounded-pill" placeholder="Subject" />
                </div>
                <div className="col-12 mb-3">
                  <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div className="col-12 text-center rounded-pill">
                  <button className="btn btn-danger px-4">SEND MESSAGE NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
  );
}

export default Contact;

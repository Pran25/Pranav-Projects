import React from 'react'


function Extra() {
  return (
    <div className="cta position-relative">
    <div className="container">
      <div className="row">
      
        <div className="col-lg-5 mb-4 mb-lg-0">
          <div className="shop bg-light p-4 rounded-3">
            <div className="section-heading mb-4">
              <h6>Our Shop</h6>
              <h2>
                Go Pre-Order Buy & Get Best <em>Prices</em> For You!
              </h2>
            </div>
            <p className="fw-semibold">Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
            <div className="main-button mt-4">
              <a href="/shop" className="btn btn-danger px-4 py-2 rounded-3">Shop Now</a>
            </div>
          </div>
        </div>

        
        <div className="col-lg-5 offset-lg-2 align-self-end">
          <div className="subscribe bg-light p-4 rounded-3">
            <div className="section-heading mb-4">
              <h6>NEWSLETTER</h6>
              <h2>Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!</h2>
            </div>
            <form id="subscribe" action="#" className="d-flex position-relative">
              <input
                type="email"
                className="form-control rounded-3 py-2"
                id="exampleInputEmail1"
                placeholder="Your email..."
              />
              <button type="submit" className="btn btn-danger position-absolute end-0 top-0 rounded-3">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  
    <div className="cta-background"></div>
  </div>
  )
}

export default Extra

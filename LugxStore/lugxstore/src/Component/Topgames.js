import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

function Topgames() {
  return (
    <div className='container bg-light mt-5'>
      <p className='text-danger'>Top Games</p>
      <div class="d-flex flex-row bd-highlight mb-3 justify-content-between mb-2">
        <div class=" bd-highlight">
          <h2 className='fw-bolder'>Most Played</h2>
        </div>
        <div class=" bd-highlight">
        <a href='/shop' class="btn btn-lg btn-outline-danger rounded-pill">View all</a>
        </div>
      </div>

      <Container>
        <Row>
          <Col>
            <div class="card text-center" style={{ width: "12rem" }}>
              <img src="images/top-game-02.jpg" class="card-img-top" alt='' />
              <div class="card-body">
                <p class="mb-1 text-uppercase" style={{ color: "gray" }}>Co/op</p>
                <h5 class="card-title">PUBG</h5>
                <button class="btn btn-primary explore-btn mt-3">Explore</button>
              </div>
            </div>

          </Col>
          <Col>
            <div class="card text-center" style={{ width: "12rem" }}>
              <img src="images/top-game-03.jpg" class="card-img-top" alt='' />
              <div class="card-body">
                <p class="mb-1 text-uppercase" style={{ color: "gray" }}>Co/op</p>
                <h5 class="card-title">Apex Legend</h5>
                <button class="btn btn-primary explore-btn mt-3">Explore</button>
              </div>
            </div>

          </Col>
          <Col>
            <div class="card text-center" style={{ width: "12rem" }}>
              <img src="images/top-game-06.jpg" class="card-img-top" alt='' />
              <div class="card-body">
                <p class="mb-1 text-uppercase" style={{ color: "gray" }}>Adventure</p>
                <h5 class="card-title">Destiny2</h5>
                <button class="btn btn-primary explore-btn mt-3">Explore</button>
              </div>
            </div>

          </Col>
          <Col>
            <div class="card text-center" style={{ width: "12rem" }}>
              <img src="images/top-game-02.jpg" class="card-img-top" alt='' />
              <div class="card-body">
                <p class="mb-1 text-uppercase" style={{ color: "gray" }}>Adventure</p>
                <h5 class="card-title">PUBG</h5>
                <button class="btn btn-primary explore-btn mt-3">Explore</button>
              </div>
            </div>

          </Col>
          <Col>
            <div class="card text-center" style={{ width: "12rem" }}>
              <img src="images/top-game-05.jpg" class="card-img-top" alt='' />
              <div class="card-body">
                <p class="mb-1 text-uppercase" style={{ color: "gray" }}>Action</p>
                <h5 class="card-title">Lostark</h5>
                <button class="btn btn-primary explore-btn mt-3">Explore</button>
              </div>
            </div>

          </Col>
          <Col>
            <div class="card text-center" style={{ width: "12rem" }}>
              <img src="images/top-game-01.jpg" class="card-img-top" alt='' />
              <div class="card-body">
                <p class="mb-1 text-uppercase" style={{ color: "gray" }}>Action</p>
                <h5 class="card-title">Warfram</h5>
                <button class="btn btn-primary explore-btn mt-3">Explore</button>
              </div>
            </div>

          </Col>
         
        </Row>
      </Container>

    </div>
  )
}

export default Topgames

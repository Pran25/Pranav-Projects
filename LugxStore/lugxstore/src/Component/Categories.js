import React from 'react'

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function Categories() {
    return (
        <div className='bg-light text-center mt-5 text-uppercase fw-bold'>
            <p className='text-danger'>Categories</p>
            <h2 className='text-dark fw-bold'>Top Categories</h2>
            <div className='container mt-5'>
                <Row>
                    <Col>
                        <div class="card card-cat " style={{width:"15rem", borderRadius:"0.5rem"}}>
                            <div class="category p-4">Action</div>
                            <img src="images/top-game-04.jpg"  class="card-img-top w-100"  alt="Brawlhalla" />
                        </div>
                    </Col>
                    <Col>
                    <div class="card card-cat " style={{width:"15rem", borderRadius:"0.5rem"}}>
                            <div class="category p-4">Multiplayer</div>
                            <img src="images/top-game-03.jpg"  class="card-img-top w-100"  alt="Brawlhalla" />
                        </div>

                    </Col>
                    <Col>
                    <div class="card card-cat " style={{width:"15rem", borderRadius:"0.5rem"}}>
                            <div class="category p-4">Multiplayer</div>
                            <img src="images/single-game.jpg"  class="card-img-top w-100"  alt="Brawlhalla" />
                        </div>

                    </Col>
                    <Col>
                    <div class="card card-cat " style={{width:"15rem", borderRadius:"0.5rem"}}>
                            <div class="category p-4">Action</div>
                            <img src="images/top-game-05.jpg"  class="card-img-top w-100"  alt="Brawlhalla" />
                        </div>

                    </Col>
                    <Col>
                    <div class="card card-cat " style={{width:"15rem", borderRadius:"0.5rem"}}>
                            <div class="category p-4">Multiplayer</div>
                            <img src="images/top-game-02.jpg"  class="card-img-top w-100"  alt="Brawlhalla" />
                        </div>

                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Categories

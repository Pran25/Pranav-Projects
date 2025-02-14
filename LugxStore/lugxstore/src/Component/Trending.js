import React from 'react'


function Trending() {
    return (
        <div className='container'>

            <p className='text-danger'>Trending</p>
            <div class="d-flex flex-row bd-highlight mb-3 justify-content-between mb-2">
                <div class="py-2 bd-highlight">
                    <h2 className='fw-bolder'>Trending Games</h2>
                </div>
                <div class=" bd-highlight">
                    <a href='/shop' class="btn btn-lg btn-outline-danger rounded-pill">View all</a>
                </div>
            </div>

            <div className='container mt-2 bg-light'>
                <div className='row  g-2'>
                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="images/categories-05.jpg" class="card-img-top" alt="..." />
                            <div class="position-absolute top-0 end-0 ">
                                <span className='discount'>-20%</span>
                            </div>

                            <div class="card-body">
                                <p class="card-text" style={{ color: "grey" }}>Action</p>
                                <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
                                    <div class=" bd-highlight">
                                        <p className='text-dark fw-bold'>Warframe</p>
                                    </div>
                                    <div class="bd-highlight">
                                        <a href='/#' className='btn btn-primary rounded-pill' style={{ backgroundColor: "#d44650" }}><i class="fa-solid fa-bag-shopping text-white" ></i></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="images/categories-04.jpg" class="card-img-top" alt="..." />
                            <div class="position-absolute top-0 end-0 ">
                                <span className='discount'>-20%</span>
                            </div>
                            <div class="card-body">
                                <p class="card-text" style={{ color: "grey" }}>Action</p>
                                <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
                                    <div class=" bd-highlight">
                                        <p className='text-dark fw-bold'>Super People</p>
                                    </div>
                                    <div class="bd-highlight">
                                        <a href='/#' className='btn btn-primary rounded-pill' style={{ backgroundColor: "#d44650" }}><i class="fa-solid fa-bag-shopping text-white" ></i></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="images/categories-03.jpg" class="card-img-top" alt="..." />
                            <div class="position-absolute top-0 end-0 ">
                                <span className='discount'>-20%</span>
                            </div>
                            <div class="card-body">
                                <p class="card-text" style={{ color: "grey" }}>Action</p>
                                <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
                                    <div class=" bd-highlight">
                                        <p className='text-dark fw-bold'>Tower of Fantasy</p>
                                    </div>
                                    <div class="bd-highlight">
                                        <a href='/#' className='btn btn-primary rounded-pill' style={{ backgroundColor: "#d44650" }}><i class="fa-solid fa-bag-shopping text-white" ></i></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="images/categories-02.jpg" class="card-img-top" alt="..." />
                            <div class="position-absolute top-0 end-0 ">
                                <span className='discount'>-20%</span>
                            </div>
                            <div class="card-body">
                                <p class="card-text" style={{ color: "grey" }}>Action</p>
                                <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
                                    <div class=" bd-highlight">
                                        <p className='text-dark fw-bold'>Dota 2</p>
                                    </div>
                                    <div class="bd-highlight">
                                        <a href='/#' className='btn btn-primary rounded-pill' style={{ backgroundColor: "#d44650" }}><i class="fa-solid fa-bag-shopping text-white" ></i></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Trending

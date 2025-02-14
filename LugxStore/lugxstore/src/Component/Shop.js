import React, {  useEffect, useState } from 'react';
import Footer from './Footer';

function Shop() {
    
    const [category, setCategory] = useState('');
    const [games, setGames] = useState([]);
   

    useEffect(() => {
        displayProd();
    }, []);

    function displayProd() {
        fetch('http://localhost:3000/Games')
            .then((resp1) => resp1.json())
            .then((resp2) => {
                console.log(resp2);
                setGames(resp2);
            
            });
    }

    function addcart(cartitem)
    {
        console.log(cartitem)
        fetch('http://localhost:3000/itemcart',{
            method: "post",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(cartitem)
        }).then((resp1)=>{
            resp1.json().then((resp2)=>{
                console.log(resp2)
              
            })
        })
        
        
    }

    const filteredGames =
        category === '' // Show all games when no category is selected
            ? games
            : games.filter((game) => game.category.toLowerCase() === category.toLowerCase());

    return (
        <>
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
                                <a className="nav-link text-white btn btn-primary rounded-pill" href="#product-details">
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
            <div className="container-fluid banner-img">
                <h1 className="fw-bold text-center text-white text-uppercase">Our shop</h1>
                <p className="fw-bold text-center text-white mt-2">Home &gt; Shop</p>
            </div>

            <div className="container bg-light mt-5">
                <div className="d-flex justify-content-center mb-4">
                    <button
                        className="btn btn-primary rounded-pill mx-2"
                        onClick={() => setCategory('')}
                    >
                        Show All
                    </button>
                    <button
                        className="btn btn-primary rounded-pill mx-2"
                        onClick={() => setCategory('Action')}
                    >
                        Action
                    </button>
                    <button
                        className="btn btn-primary rounded-pill mx-2"
                        onClick={() => setCategory('Adventure')}
                    >
                        Adventure
                    </button>
                    <button
                        className="btn btn-primary rounded-pill mx-2"
                        onClick={() => setCategory('Multiplayer')}
                    >
                        Multiplayer
                    </button>
                    <button
                        className="btn btn-primary rounded-pill mx-2"
                        onClick={() => setCategory('SliceofLife')}
                    >
                        Slice of Life
                    </button>
                </div>

                <div className="row row-col-4">
                    {filteredGames.length > 0 ? (
                        filteredGames.map((game, id) => (
                            <div key={id} className="col col-sm-3 p-3">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={game.image} className="card-img-top" alt={game.name} />
                                    <div className="position-absolute top-0 end-0">
                                        <span className="discount">{game.price}<br /></span>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text" style={{ color: 'grey' }}>{game.category}</p>
                                        <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
                                            <div className="bd-highlight">
                                                <p className="text-dark fw-bold">{game.name}</p>
                                            </div>
                                            <div className="bd-highlight">
                                                <button className="btn btn-primary rounded-pill" style={{ backgroundColor: '#d44650' }}>
                                                    <i className="fa-solid fa-bag-shopping text-white" onClick={()=> addcart(game)}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No games available in this category.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Shop;

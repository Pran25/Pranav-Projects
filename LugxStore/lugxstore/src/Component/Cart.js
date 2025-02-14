import React, { useEffect, useState } from 'react'
import Footer from './Footer';


function Cart() {
    const [cartitems, Setcaritems] = useState([])

    useEffect(function () {
        fetchCartItems();
        
    }, []);

   

    function fetchCartItems() {
        fetch('http://localhost:3000/itemcart')
            .then(resp => resp.json())
            .then(data => {
                Setcaritems(data);
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
                
            });
    }

    function deletecart(id) {
        fetch(`http://localhost:3000/itemcart/${id}`, { method: "delete" })
            .then(() => {
                
                Setcaritems(cartitems.filter(item => item.id !== id));
                
            })
            .catch(error => {
                console.error('Error deleting item:', error);
                
            });
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
                                <a className="nav-link text-white btn btn-primary rounded-pill" href="#product-details">
                                    Product Details
                                </a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-white btn btn-primary rounded-pill" href="#contact">
                                    Contact Us
                                </a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link text-white btn btn-primary rounded-pill" href="#cart">
                                <i class="fa-solid fa-cart-shopping p-2"></i>
                                    <sup className='rounded-pill bg-outline-danger'>{cartitems.length}</sup>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid banner-img">
                <h1 className="fw-bold text-center text-white text-uppercase">Our shop</h1>
                <p className="fw-bold text-center text-white mt-2">Home &gt; Shop &gt; Cart</p>
            </div>

            <div className="container mt-5">
                <h2 className="text-center mb-4">Cart Items</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover text-center">
                        <thead className="table-dark">
                            <tr>
                                <th>id</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartitems.map((game, id) => {

                                    return (
                                        <tr key={id}>

                                            <td>{game.id}</td>
                                            <td><img src={game.image} alt='' style={{height:"50px", width:"50px"}}/></td>
                                            <td>{game.name}</td>
                                            <td>{game.category}</td>
                                            <td>{game.price}</td>
                                            <td>

                                                <button className="btn btn-primary btn-sm rounded-pill" onClick={()=> deletecart(game.id)}>Delete</button>
                                            </td>

                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            <div className='rounded-pill' style={{marginLeft:"1200px", marginTop:"150px"}} >
                <a href='/purchase' className='btn btn-outline-danger btn-lg'>Purchase</a>

            </div>
            <Footer/>
        </div>
    )
}

export default Cart

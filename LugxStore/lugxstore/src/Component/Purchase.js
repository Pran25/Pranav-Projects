import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { jsPDF } from 'jspdf';

function Purchase() {
  const [purch, Setpurch] = useState([]);
  const [isload, Setloading] = useState(true);
  const purchasesound = new Audio('audio/purchase.mp3');

  useEffect(() => {
    dispgames();
  }, []);

  function dispgames() {
    fetch("http://localhost:3000/itemcart")
      .then((response) => response.json())
      .then((data) => {
        Setpurch(data);
        Setloading(false);
      });
  }

  function playpurchasesound() {
    purchasesound.play();
  }

  function downloadreciept() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Thankyou For The Purchase', 20, 20);
    doc.setFontSize(12);
    doc.text('ID', 20, 40);
    doc.text('Name', 40, 40);
    doc.text('Category', 80, 40);
    doc.text('Old Price', 120, 40);
    doc.text('Price', 160, 40);
    doc.text('Discount (%)', 200, 40);

    purch.forEach((item, index) => {
      const yPosition = 50 + index * 10;
      doc.text(String(index + 1), 20, yPosition);
      doc.text(item.name, 40, yPosition);
      doc.text(item.category, 80, yPosition);
      doc.text(item.oldprice.toString(), 120, yPosition);
      doc.text(item.price.toString(), 160, yPosition);
      doc.text(calculateDiscount(item.oldprice, item.price).toFixed(), 200, yPosition);
    });

    doc.save('receipt.pdf');
  }

  const calculateDiscount = (oldprice, price) => {
    const oldPrice = parseFloat(oldprice);
    const currentPrice = parseFloat(price);
  
    if (!isNaN(oldPrice) && !isNaN(currentPrice) && oldPrice > 0) {
      return oldPrice - currentPrice;
    }
  
    return 0;
  };
  

  function handlepurchase() {
    Setloading(true);
    playpurchasesound();
    downloadreciept();
    Setloading(false);
  }

  return (
    <div className='container-fluid'>
      <div className='conrainer-fluid'>
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
      </div>
      <div className="container-fluid banner-img">
        <h1 className="fw-bold text-center text-white text-uppercase">Our shop</h1>
        <p className="fw-bold text-center text-white mt-2">Home &gt; Shop &gt; Cart &gt; Purchase</p>
      </div>

      <h1 className='text-center mt-5 text-dark fw-bold fs-3'>Purchase Now</h1>

      <div className='container mt-4'>
        {
          isload ? (
            <div className='text-center'>
              <div className='spinner-border text-primary'></div>
              <p className='text-danger fw-bold'>Loading</p>
            </div>
          ) : (
            <>
              <table className='table table-bordered table-hover text-center'>
                <thead className='bg-dark text-white fw-bold'>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>OLDPRICE</th>
                    <th>PRICE</th>
                    <th>Discount %</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    purch.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px" }} />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.oldprice}</td>
                        <td>{item.price}</td>
                        <td>{calculateDiscount(item.oldprice, item.price).toFixed()}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </>
          )
        }
      </div>

      <div className="text-center mt-4">
        <button className="btn  btn-outline-danger" onClick={() => handlepurchase()}>
          Complete Purchase
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Purchase;

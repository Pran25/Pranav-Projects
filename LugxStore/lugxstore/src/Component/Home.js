import React, { useEffect, useState } from 'react'
import Special from './Special'
import Trending from './Trending'
import Topgames from './Topgames'
import Categories from './Categories'
import Extra from './Extra'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [games, setGames] = useState([])
  let login = localStorage.getItem("login")
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:3000/Games/").then((resp1) => {
      resp1.json().then((resp2) => {
        console.log(resp2)
        setGames(resp2)
      })
    })
  }, [])

  function handleSearch(e) {
    e.preventDefault()  
    const searchValue = e.target.searchInput.value 
    if (searchValue) {
      navigate("/search", { state: { s: searchValue } })
    }
  }

  return (
    <div>
      <Header />
      <div className="banner">
        <div className='container'>
          <div className="row">
            <div className='col-lg-6 align-self-center text-white'>
              <h6 className='fs-3 text-uppercase fw-bold font-monospace p-2'>Welcome to Lugx</h6>
              <h2 className='text-white fw-bold head2 p-2'>BEST GAMING SITE EVER!</h2>
              <p className='p-2'>
                LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites.
                You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.
              </p>
              <div className="search-input p-2">
                <form id="subscribe" onSubmit={handleSearch} className="d-flex position-relative">
                  <input
                    type="text"
                    name="searchInput"
                    className="form-control rounded-pill py-2"
                    id="exampleInputEmail1"
                    placeholder="Search games..."
                  />
                  <button type="submit" className="btn btn-danger position-absolute end-0 top-0 rounded-pill">
                    Search Now
                  </button>
                </form>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-2'>
              <div className='position-relative'>
                <img src='images/banner-image.jpg' alt='' className='rounded' />
                <div className="position-absolute top-0 end-0 translate-middle-x">
                  <span className='discount'>-20%</span>
                </div>
                <div className="position-absolute top-100 bottom-20 translate-middle">
                  <span className='price'>500₹</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Special />
      <Trending />
      <Topgames />
      <Categories />
      <Extra />
      <Footer />
    </div>
  )
}

export default Home

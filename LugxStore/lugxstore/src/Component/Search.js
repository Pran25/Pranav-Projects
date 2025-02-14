import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

function Search() {
  const [search, Setsearch] = useState([])
  const location = useLocation()  // To retrieve search term from location state
  const searchTerm = location.state ? location.state.s.toLowerCase() : '' // Ensure that it's lowercased for case-insensitive search

  useEffect(() => {
    gamessearch()
  }, [searchTerm]) // Re-run search when the search term changes

  // Fetch data from your API and filter based on the search term
  function gamessearch() {
    fetch("http://localhost:3000/Games")
      .then((resp1) => resp1.json())
      .then((resp2) => {
        const filteredGames = resp2.filter((g) => g.name.toLowerCase().includes(searchTerm))
        Setsearch(filteredGames)
        console.log(filteredGames) // Check if you're getting the expected results in the console
      })
  }

  return (
    <div className='container'>
      {search.length > 0 ? (
        <div className='row row-cols-1 row-cols-md-3 g-3 mt-5'>
          {search.map((sp, i) => (
            <div className='col' key={i}>
              {/* Updated Card Design */}
              <Card style={{ width: '18rem' }} className='h-100 border-0 shadow-lg rounded-4 bg-dark'>
                <div className='h-75 position-relative'>
                  <Card.Img variant="top" src={sp.image} className='img-fluid h-100 w-100 rounded-top' />
                  <div className='position-absolute top-0 start-0 p-2 bg-primary rounded-end'>
                    <span className="badge text-white">New</span>
                  </div>
                </div>
                <Card.Body className='text-white'>
                  <Card.Title>{sp.name}</Card.Title>
                  <Card.Text>
                    Experience thrilling adventures in {sp.name}. Don't miss out on this top-rated game!
                  </Card.Text>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='fs-5 fw-bold'>${sp.price}</p>
                    <Button variant="warning" className='text-white rounded-circle fs-5'>
                      <FaShoppingCart />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <h2 className='text-danger'>No products found for your search</h2>
      )}
    </div>
  )
}

export default Search

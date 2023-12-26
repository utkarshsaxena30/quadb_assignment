import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import BookTicketForm from './BookTicketForm'
import './ShowDetails.css' // Import the external CSS file

const ShowDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        setShow(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [id])

  return (
    <div className='show-details-container'>
      <h1 className='show-details-title'>Show Details</h1>
      {show ? (
        <div>
          <h2 className='show-name'>{show.name}</h2>
          <div className='show-info'>
            <img
              className='show-image'
              src={show.image?.medium}
              alt={show.name}
            />
            <p className='show-summary'>{show.summary}</p>
          </div>

          <p className='show-detail'>Runtime: {show.runtime} minutes</p>
          <p className='show-detail'>Rating: {show.rating?.average || 'N/A'}</p>

          <Link to={`/book/${id}`}>
            <button className='book-show-button'>Book Show</button>
          </Link>

          <hr className='separator' />
        </div>
      ) : (
        <p className='loading-message'>Loading...</p>
      )}
    </div>
  )
}

export default ShowDetails

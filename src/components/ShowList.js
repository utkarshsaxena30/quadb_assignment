import React from 'react'
import { Link, Route } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'

// Function to generate a random image URL
const getRandomImage = () => {
  const randomImageNumber = Math.floor(Math.random() * 1000) + 1
  return `https://picsum.photos/200/300?random=${randomImageNumber}`
}

const ShowList = ({ shows }) => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <header
        style={{
          backgroundColor: '#e50914',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white' }}>Show List</h1>
      </header>
      <ul
        style={{
          listStyleType: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '0px',
        }}
      >
        {shows.map((show) => (
          <li
            key={show.show.id}
            style={{ margin: '10px', flex: '1 0 200px', textAlign: 'center' }}
          >
            <Link
              to={`show/${show.show.id}`}
              style={{ textDecoration: 'none', color: '#333' }}
              // target="_blank" // Add this line to open link in a new window
              // rel="noopener noreferrer" // Recommended for security reasons
            >
              <img
                src={
                  show.show.image ? show.show.image.medium : getRandomImage()
                }
                alt={show.show.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  marginBottom: '10px',
                }}
              />
              <div style={{ color: 'white' }}>{show.show.name}</div>
              <div style={{ color: 'white' }}>{show.show.premiered}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowList

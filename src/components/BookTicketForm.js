import React, { useState, useEffect, useMemo } from 'react'
import './BookTicketForm.css' // Import the external CSS file
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import toast from 'react-hot-toast'

import { LocalStorageHandler } from '../utils/LocalStorageHandler'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const BookTicketForm = ({ showName }) => {
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const history = useHistory()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  })

  useEffect(() => {
    const localStorageHandler = new LocalStorageHandler()
    const fullName = localStorageHandler.getItem('fullName'),
      email = localStorageHandler.getItem('email'),
      phoneNumber = localStorageHandler.getItem('phoneNumber')

    setFormData({
      fullName: fullName ?? '',
      email: email ?? '',
      phoneNumber: phoneNumber ?? '',
    })
  }, [])

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success(`Ticket booked successfully for ${show.name}`)

    const localStorageHandler = new LocalStorageHandler()
    localStorageHandler.saveItem('fullName', formData.fullName)
    localStorageHandler.saveItem('email', formData.email)
    localStorageHandler.saveItem('phoneNumber', formData.phoneNumber)

    history.push('/')
  }

  if (!show) return <></>

  return (
    <div className='book-ticket-form-container'>
      <h2 className='form-title'>Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Movie Name: </label>
          <input
            type='text'
            name='name'
            value={show.name}
            onChange={() => void 0}
            disabled
          />
        </div>
        <div className='form-field'>
          <label>
            Full Name:
            <input
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className='form-field'>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className='form-field'>
          <label>
            Phone Number:
            <input
              type='tel'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default BookTicketForm

import React, { useState } from 'react';
import './BookTicketForm.css'; // Import the external CSS file

const BookTicketForm = ({ showName, onBookTicket }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data if needed

    // Pass form data to the parent component
    onBookTicket({
      showName,
      ...formData,
    });
  };

  return (
    <div className="book-ticket-form-container">
      <h2 className="form-title">Book Ticket for {showName}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="form-field">
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookTicketForm;

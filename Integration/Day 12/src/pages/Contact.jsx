
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import '../assets/css/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled before submitting
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Prepare the data to be sent to the server
    const formData = {
      name,
      email,
      message,
    };

    try {
      // Make a POST request to your JSON server endpoint
      const response = await axios.post('http://localhost:8081/contact/save', formData);

      // Handle success
      console.log('Response from server:', response.data);

      // Set the state to show the pop-up
      setIsSubmitted(true);
    } catch (error) {
      // Handle error
      console.error('Error submitting form data:', error);
    }
  };

  const handlePopClose = () => {
    // Reset the form and hide the pop-up
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <>
      <Navbar />
      <div className='contact-container'>
        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="form-title">Send Us a Message</h2>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-input"
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-input"
              id="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="form-submit-btn" type="submit">
            Send Message
          </button>
        </form>
        {isSubmitted && (
          <div className="pop-up">
            <div className="pop-up-content">
              <span className="pop-up-close" onClick={handlePopClose}>
                &times;
              </span>
              <h3>Your message has been sent successfully!</h3>
              <p>Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useParams, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import User_Sidebar from '../components/User_Sidebar';
import { FaSave, FaTimes } from 'react-icons/fa'; // Import Font Awesome icons
import '../assets/css/Booking_Form.css';

const Booking_Form = () => {
  const { boatName, boatType } = useParams();
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({
    userName: '',
    userEmail: '',
    contact: '',
    checkIn: new Date(),
    checkOut: new Date(),
    idProof: '',
    boatName: '',
    boatType: '',
  });
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    if (boatName) {
      setBookingData((prevData) => ({ ...prevData, boatName, boatType }));
    }
  }, [boatName, boatType]);

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/booking/bookedDates`, {
          params: {
            boatName: boatName,
            boatType: boatType,
          },
        });
        setBookedDates(response.data);
      } catch (error) {
        console.error('Error fetching booked dates:', error);
      }
    };
    fetchBookedDates();
  }, [boatName, boatType]);

  const handleBookNow = async () => {
    if (
      bookingData.userName &&
      bookingData.userEmail &&
      bookingData.contact &&
      bookingData.checkIn &&
      bookingData.checkOut &&
      bookingData.idProof
    ) {
      try {
        const baseURL = 'http://localhost:8081';

        const response = await axios.get(`${baseURL}/availability/check`, {
          params: {
            boatName: bookingData.boatName,
            startDate: bookingData.checkIn.toISOString().split('T')[0],
            endDate: bookingData.checkOut.toISOString().split('T')[0],
          },
        });

        if (response.data.available) {
          await axios.post(`${baseURL}/booking/save`, bookingData);

          alert('Successfully booked!');
          navigate('/view-boat-list');
          // You can redirect to another page after successful booking
        } else {
          alert('The boat is not available for the selected dates.');
        }
      } catch (error) {
        console.error('Error storing data:', error);
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const disabledDates = bookedDates.map((dateString) => new Date(dateString));

  return (
    <User_Sidebar>
      <div className="booking-form-container">
        <h2 className="form-header" style={{ fontSize: '34px', fontFamily: 'VT323' }}>Booking Form</h2>
        <div className="form-group">
          <label className="form-label">Boat Name:</label>
          <input type="text" value={boatName} readOnly className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Boat Type:</label>
          <input type="text" value={boatType} readOnly className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">User Name:</label>
          <input
            type="text"
            value={bookingData.userName}
            onChange={(e) => setBookingData({ ...bookingData, userName: e.target.value })}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">User Email:</label>
          <input
            type="email"
            value={bookingData.userEmail}
            onChange={(e) => setBookingData({ ...bookingData, userEmail: e.target.value })}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact Number:</label>
          <input
            type="text"
            value={bookingData.contact}
            onChange={(e) => setBookingData({ ...bookingData, contact: e.target.value })}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Check-In Date:</label>
          <DatePicker
            selected={bookingData.checkIn}
            onChange={(date) => setBookingData({ ...bookingData, checkIn: date })}
            className="form-input"
            minDate={new Date()}
            excludeDates={disabledDates}
            required
            showDisabledMonthNavigation
            disabledKeyboardNavigation
          />
        </div>
        <div className="form-group">
          <label className="form-label">Check-Out Date:</label>
          <DatePicker
            selected={bookingData.checkOut}
            onChange={(date) => setBookingData({ ...bookingData, checkOut: date })}
            className="form-input"
            minDate={bookingData.checkIn}
            excludeDates={disabledDates}
            required
            showDisabledMonthNavigation
            disabledKeyboardNavigation
          />
        </div>
        <div className="form-group">
          <label className="form-label">ID Proof:</label>
          <input
            type="text"
            value={bookingData.idProof}
            onChange={(e) => setBookingData({ ...bookingData, idProof: e.target.value })}
            className="form-input"
            required
          />
        </div>
        <div className="button-group">
          <button onClick={handleBookNow} className="submit-button">
            <FaSave /> Book
          </button>
          <span className='bookingclose-btn'>
            <button onClick={() => navigate('/view-boat-list')} className="close-button">
              <FaTimes /> Cancel
            </button>
          </span>
        </div>
      </div>
    </User_Sidebar>
  );
};

export default Booking_Form;

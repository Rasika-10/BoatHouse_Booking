import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User_Sidebar from '../components/User_Sidebar';
import '../assets/css/Curddata.css';
import { useNavigate } from 'react-router-dom';

const User_Dashboard = () => {
  const [bookdata, setBookdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('email');

    if (!userEmail) {
      // Handle case where userEmail is not set in localStorage
      console.error('User email is not set in localStorage');
      return;
    }

    axios.get(`http://localhost:8081/booking/get/email?email=${userEmail}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setBookdata(response.data);
    })
    .catch((error) => {
      console.error('Error fetching booking data:', error);
    });
    
  }, []);

  const handleCancelBooking = async (bookingId) => {
    const isConfirmed = window.confirm('Are you sure you want to cancel this booking?');
    if (!isConfirmed) {
      return;
    }
    try {
      await axios.delete(`http://localhost:8081/booking/delete/${bookingId}`);
      const updatedBookings = bookdata.filter((item) => item.bookingId !== bookingId);
      setBookdata(updatedBookings);
      alert('Booking canceled successfully!');
    } catch (error) {
      console.error('Error canceling booking:', error);
      alert('Error canceling booking. Please try again.');
    }
  };

  return (
    <User_Sidebar>
      <div className='userdashboard-row'>
        <div className='adminCard-container-data' style={{ width: '80%', paddingLeft: '40px', paddingTop: '20px' }}>
          <div className='adminCard-card'>
            <div className='adminCard-admin-card'>
              <div className='adminCard-card-title'>
                <h1 style={{ fontSize: '33px', fontFamily: 'VT323' }}>My Booking List</h1>
              </div>
              <div className='adminCard-card-body'>
                {bookdata.length === 0 ? (
                  <p>No bookings available</p>
                ) : (
                  <table className='adminCard-table table-bordered'>
                    <thead className='adminCard-bg-primary text-white'>
                      <tr>
                        <td style={{ backgroundColor: 'cadetblue' }}>Booking Id</td>
                        <td style={{ backgroundColor: 'cadetblue' ,width: '17%'}}>Boat Name</td>
                        <td style={{ backgroundColor: 'cadetblue',width: '13%' }}>Boat Type</td>
                        <td style={{ backgroundColor: 'cadetblue' }}>User Email</td>
                        <td style={{ backgroundColor: 'cadetblue' }}>Contact</td>
                        <td style={{ backgroundColor: 'cadetblue', width: '18%' }}>Check In Date</td>
                        <td style={{ backgroundColor: 'cadetblue', width: '18%' }}>Check Out Date</td>
                        <td style={{ backgroundColor: 'cadetblue' }}>Id Proof</td>
                        <td style={{ backgroundColor: 'cadetblue', width: '10%' }}>Actions</td>
                      </tr>
                    </thead>
                    <tbody>
                      {bookdata.map((item) => (
                        <tr key={item.id}>
                          <td>{item.bookingId}</td>
                          <td>{item.boatName}</td>
                          <td>{item.boatType}</td>
                          <td>{item.userEmail}</td>
                          <td>{item.contact}</td>
                          <td>{item.checkIn}</td>
                          <td>{item.checkOut}</td>
                          <td>{item.idProof}</td>
                          <td>
                            <button className='cancel-btn' onClick={() => handleCancelBooking(item.bookingId)}>
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </User_Sidebar>
  );
};

export default User_Dashboard;

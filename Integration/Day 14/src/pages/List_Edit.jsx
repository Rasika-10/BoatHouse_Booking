import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/css/List_Edit.css'
const List_Edit = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const [editedBoatHouse, setEditedBoatHouse] = useState({
    id: '',
    title: '',
    boatType:'',
    distance: '',
    facilities: '',
    cancelOp: '',
    food: '',
    ac: '',
    rating: 0,
    price: '',
    capacity: 0,
    time: '',
    imageUrl: '',
    available:'',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/boat/get?title=${title}`);
        setEditedBoatHouse(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [title]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8081/boat/put/${editedBoatHouse.id}`, editedBoatHouse);
      // Redirect back to the list page after successful update
      navigate('/add-boat');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleCancel = () => {
    // Redirect back to the list page without saving changes
    navigate('/add-boat');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBoatHouse({ ...editedBoatHouse, [name]: value });
  };

  return (
    <Sidebar>
          <h2 className="listedit-form-heading" style={{ fontSize: '30px'}}>
          <span style={{fontSize:"40px",color:"#05445E"}}>E</span>dit Boat House!!
          </h2>
      <div className="listedit-container">
        <div className="listedit-card">
       

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px'}}>Title:</label><br></br>
            <input
              type="text"
              name="title"
              value={editedBoatHouse.title}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px'}}>Boat Type:</label><br></br>
            <input
              type="text"
              name="boatType"
              value={editedBoatHouse.boatType}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>Distance:</label>
            <input
              type="text"
              name="distance"
              value={editedBoatHouse.distance}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>Facilities:</label>
            <input
              type="text"
              name="facilities"
              value={editedBoatHouse.facilities}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>Cancellation Option:</label>
            <input
              type="text"
              name="cancelOp"
              value={editedBoatHouse.cancelOp}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>Food:</label><br></br>
            <input
              type="text"
              name="food"
              value={editedBoatHouse.food}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>AC Preferences:</label>
            <input
              type="text"
              name="ac"
              value={editedBoatHouse.ac}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>Available Status:</label>
            <input
              type="text"
              name="available"
              value={editedBoatHouse.available}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>Rating:</label>
            <input
              type="number"
              name="rating"
              value={editedBoatHouse.rating}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>Price:</label><br></br>
            <input
              type="text"
              name="price"
              value={editedBoatHouse.price}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>Capacity:</label>
            <input
              type="number"
              name="capacity"
              value={editedBoatHouse.capacity}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px' }}>Time:</label><br></br>
            <input
              type="text"
              name="time"
              value={editedBoatHouse.time}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <label className="listedit-label" style={{ fontSize: '17px'}}>Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={editedBoatHouse.imageUrl}
              className='listeditform-control'
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='listeditform-group'>
            <button onClick={handleSave} className="listedit-button">
              Save
            </button>
            <button onClick={handleCancel} className="listedit-button-cancel">
              Cancel
            </button>
          </div>
        </div>
        </div>
     
    </Sidebar>
  );
};

export default List_Edit;


// List_Add.js

import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/List_Add.css'

import Sidebar from '../components/Sidebar';

const List_Add = () => {

  const [newBoatHouse, setNewBoatHouse] = useState({
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

  const handleSave = async () => {
    
  
    try {
      await axios.post('http://localhost:8081/boat/save', newBoatHouse);
        window.location.href = '/add-boat';
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  const handleCancel = () => {
  
    window.location.href = '/add-boat';
  };

  return (
    <Sidebar>
    <h2 className="listadd-form-heading" style={{fontSize:"30px"}}><span style={{fontSize:"40px",color:"#05445E"}}>N</span>ew Boat House!!</h2>
    <div className="listadd-container" >
         <div className="listadd-card">


    <div className='listaddform-group'>
    <label className="listadd-label " style={{fontSize:"17px"}}>Title:</label><br></br>
      <input
        type="text"
        value={newBoatHouse.title}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, title: e.target.value })}
        required
      />
      </div>

    <div className='listaddform-group'>
    <label className="listadd-label " style={{fontSize:"17px"}}>Boat Type:</label><br></br>
      <input
        type="text"
        value={newBoatHouse.boatType}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, boatType: e.target.value })}
        required
      />
      </div>

    <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>Distance:</label>
      <input
        type="text"

        value={newBoatHouse.distance}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, distance: e.target.value })}
        required
      />
      </div>

     <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>Facilities:</label>
      <input
        type="text"
        value={newBoatHouse.facilities}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, facilities: e.target.value })}
        required
      />
      </div>

       <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>Cancellation Option:</label>
      <input
        type="text"
        value={newBoatHouse.cancelOp}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, cancelOp: e.target.value })}
        required
      />
      </div>

     <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>Food:</label><br></br>
      <input
        type="text"
        value={newBoatHouse.food}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, food: e.target.value })}
        required
      />
     </div>
     <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>AC Preferences:</label>
      <input
        type="text"
        value={newBoatHouse.ac}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, ac: e.target.value })}
        required
      />
      </div>
     <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>Available Status:</label>
      <input
        type="text"
        value={newBoatHouse.available}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse,available: e.target.value })}
        required
      />
      </div>
    <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>Rating:</label>
      <input
        type="number"
        value={newBoatHouse.rating}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, rating: parseFloat(e.target.value) })}
        required
      />
      </div>
    <div className='listaddform-group' >
      <label className="listadd-label" style={{fontSize:"17px"}}>Price:</label><br></br>
      <input
        type="text"
        value={newBoatHouse.price}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, price: e.target.value })}
        required
      />
      </div>
    <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>Capacity:</label>
      <input
        type="number"
        value={newBoatHouse.capacity}
        className='listaddform-control'
       
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, capacity: parseInt(e.target.value) })}
        required
      />
      </div>

     <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>Time:</label><br></br>
      <input
        type="text"
        value={newBoatHouse.time}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, time: e.target.value })}
        required
      />
      </div>
      <div className='listaddform-group'>
      <label className="listadd-label" style={{fontSize:"17px"}}>Image URL:</label>
      <input
        type="text"
        value={newBoatHouse.imageUrl}
        className='listaddform-control'
        onChange={(e) => setNewBoatHouse({ ...newBoatHouse, imageUrl: e.target.value })}
        required
      />
      </div>
      <div className='listaddform-group'>
      <button onClick={handleSave} className="listadd-button">
        Save
      </button>
      <button onClick={handleCancel} className="listadd-button-cancel">
        Cancel
      </button>
      </div>
    </div>
    </div>
   
 
    </Sidebar>
   
  );
};

export default List_Add;

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../assets/css/List_Add.css';
// import Sidebar from '../components/Sidebar';

// const List_Add = () => {
//   const [pages, setPages] = useState([
//     { title: '', distance: '', facilities: '', cancelOp: '' },
//     { food: '', ac: '', rating: 0, price: '', capacity: 0 },
//     { time: '', imageUrl: '', available: '' }
//   ]);
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleNavigation = (direction) => {
//     if (direction === 'previous' && currentPage > 0) {
//       setCurrentPage(currentPage => currentPage - 1);
//     } else if (direction === 'next' && currentPage < pages.length - 1) {
//       setCurrentPage(currentPage => currentPage + 1);
//     }
//   };

//   const handleSave = async () => {
//     try {
//       const newData = pages.reduce((acc, page) => ({ ...acc, ...page }), {});
//       await axios.post('http://localhost:3001/boatHouseList', newData);
//       window.location.href = '/add-boat';
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };

//   const handleCancel = () => {
//     window.location.href = '/add-boat';
//   };

//   return (
//     <Sidebar>
//       <div className="listadd-container">
//         <div className="listadd-card">
//           <h2 className="listadd-form-heading" style={{ fontSize: '30px' }}>New Boat House!!</h2>
//           {Object.entries(pages[currentPage]).map(([key, value]) => (
//             <div key={key} className="listaddform-group">
//               <label className="listadd-label" style={{ fontSize: '17px' }}>{key}: </label>
//               <input
//                 type={typeof value === 'number' ? 'number' : 'text'}
//                 value={value}
//                 className="listaddform-control"
//                 onChange={(e) => {
//                   const newPages = [...pages];
//                   newPages[currentPage][key] = e.target.value;
//                   setPages(newPages);
//                 }}
//                 required
//               />
//             </div>
//           ))}
//           <div className="pagination">
//             <button disabled={currentPage === 0} onClick={() => handleNavigation('previous')}>Previous</button>
//             <button disabled={currentPage === pages.length - 1} onClick={() => handleNavigation('next')}>Next</button>
//           </div>
//           {/* Show Save and Cancel buttons only when on the last page */}
//           {currentPage === pages.length - 1 && (
//             <div className="listaddform-group">
//               <button onClick={handleSave} className="listadd-button">Save</button>
//               <button onClick={handleCancel} className="listadd-button-cancel">Cancel</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </Sidebar>
//   );
// };

// export default List_Add;

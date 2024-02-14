// import '../assets/css/List.css'

// const List = () => {
//   return (
//     <div className="searchItem">
//       <img
//         src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
//         alt=""
//         className="siImg"
//       />
//       <div className="siDesc">
//         <h1 className="siTitle">Tower Street Apartments</h1>
//         <span className="siDistance">500m from center</span>
//         <span className="siTaxiOp">Free airport taxi</span>
//         <span className="siSubtitle">
//           Studio Apartment with Air conditioning
//         </span>
//         <span className="siFeatures">
//           Entire studio • 1 bathroom • 21m² 1 full bed
//         </span>
//         <span className="siCancelOp">Free cancellation </span>
//         <span className="siCancelOpSubtitle">
//           You can cancel later, so lock in this great price today!
//         </span>
//       </div>
//       <div className="siDetails">
//         <div className="siRating">
//           <span>Excellent</span>
//           <button>8.9</button>
//         </div>
//         <div className="siDetailTexts">
//           <span className="siPrice">$112</span>
//           <span className="siTaxOp">Includes taxes and fees</span>
//           <button className="siCheckButton">See availability</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;

// import React from 'react';
// import '../assets/css/List.css';
// import boat1 from '../assets/images/boat1.webp';
// import boat2 from '../assets/images/boat2.jpg';
// import boat3 from '../assets/images/boat3.jpg';
// import boat4 from '../assets/images/boat4.avif';
// import boat5 from '../assets/images/boat5.webp';
// import boat6 from '../assets/images/boat6.webp';
// import boat7 from '../assets/images/boat7.webp';

// const boatHouseList = [
//   {
//     id: 1,
//     title: 'Serenity Boat House',
//     distance: '300m from lake',
//     facilities: 'Private boat dock • Lakeside view • Fishing gear included',
//     cancelOp: 'Free cancellation',
//     cancelOpSubtitle: 'You can cancel later, so lock in this great price today!',
//     rating: 4.75,
//     price: '₹14,000',
//     capacity: 6,
//     taxOp: 'Includes taxes and fees',
//     imageUrl: boat1,
//   },
//   {
//     id: 2,
//     title: 'Allepey House Boat',
//     distance: '150m from lake',
//     facilities: 'Kayaks available • BBQ area • Scenic views',
//     cancelOp: 'Free cancellation',
//     cancelOpSubtitle: 'Flexible cancellation policy for peace of mind!',
//     rating: 4.4,
//     price: '₹12,000',
//     capacity: 4,
//     taxOp: 'Includes taxes and fees',
//     imageUrl: boat2,
//   },
//   {
//     id: 3,
//     title: 'Lakeside Bliss Cabin',
//     distance: '200m from lake',
//     facilities: 'Private deck • Rowboat provided • Firepit by the lake',
//     cancelOp: 'Free cancellation',
//     cancelOpSubtitle: 'Book now and cancel without any charges!',
//     rating: 4.6,
//     price: '₹16,000',
//     capacity: 8,
//     taxOp: 'Includes taxes and fees',
//     imageUrl: boat3,
//   },
//   {
//     id: 4,
//     title: 'Sunset Cove Houseboat',
//     distance: 'On the water',
//     facilities: 'Floating deck • Solar-powered • Sunset views',
//     cancelOp: 'Free cancellation',
//     cancelOpSubtitle: 'Cancel anytime with no additional charges!',
//     rating: 4.35,
//     price: '₹18,000',
//     capacity: 10,
//     taxOp: 'Includes taxes and fees',
//     imageUrl: boat4,
//   },
//   {
//     id: 5,
//     title: 'Floating Boat',
//     distance: '100m from harbor',
//     facilities: 'Boat rental • Harbor views • Fishing equipment provided',
//     cancelOp: 'Free cancellation',
//     cancelOpSubtitle: 'Secure your spot now and cancel if needed!',
//     rating: 4.5,
//     price: '₹15,000',
//     capacity: 6,
//     taxOp: 'Includes taxes and fees',
//     imageUrl: boat5,
//   },
//   {
//     id: 6,
//     title: 'Floating Boat',
//     distance: '50m from river',
//     facilities: 'Private river access • Canoe available • Nature trails nearby',
//     cancelOp: 'Free cancellation',
//     cancelOpSubtitle: 'Book confidently with our flexible cancellation policy!',
//     rating: 4.65,
//     price: '₹17,000',
//     capacity: 8,
//     taxOp: 'Includes taxes and fees',
//     imageUrl: boat6,
//   },
//   {
//     id: 7,
//     title: 'Oceanfront Oasis Villa',
//     distance: 'On the beach',
//     facilities: 'Private beach • Jet ski rental • Oceanfront views',
//     cancelOp: 'Free cancellation',
//     cancelOpSubtitle: 'Cancel for free up to 24 hours before check-in!',
//     rating: 4.85,
//     price: '₹25,000',
//     capacity: 12,
//     taxOp: 'Includes taxes and fees',
//     imageUrl: boat7,
//   },
// ];

// const List = () => {
//   return (
//     <div>
//       {boatHouseList.map(item => (
//         <div key={item.id} className="searchItem">
//           <img
//             src={item.imageUrl}
//             alt=""
//             className="siImg"
//           />
//           <div className="siDesc">
//             <h1 className="siTitle">{item.title}</h1>
//             <span className="siDistance">{item.distance}</span>
//             <span className="siSubtitle">{item.facilities}</span>
//             <span className="siCancelOp">{item.cancelOp}</span>
//             <span className="siCancelOpSubtitle">{item.cancelOpSubtitle}</span>
//           </div>
//           <div className="siDetails">
//             <div className="siRating">
//               <span style={{color:"black",paddingLeft:"130px",paddingTop:"4px"}}><strong>Rating:</strong></span>
//               <span>{'★'.repeat(Math.round(item.rating))}</span>
//             </div>
//             <div className="siDetailTexts">
//               <span className="siPrice">{item.price}</span>
//               <span className="siCapacity">Capacity: {item.capacity} persons</span>
//               <span className="siTaxOp">{item.taxOp}</span>
//               <button className="siCheckButton">See availability</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;




// List.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import '../assets/css/List.css';

import Sidebar from '../components/Sidebar'

const List = () => {
  const [boatHouseList, setBoatHouseList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/boatHouseList');
        setBoatHouseList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/boatHouseList/${id}`);
      // Update the boatHouseList after successful deletion
      setBoatHouseList(boatHouseList.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };


  const handleEdit = (title) => {
    // Navigate to the edit page with the specific title
    navigate(`/edit/${title}`);
  };
  return (
  
    
    <Sidebar>
    <div className="listContainer">
    <div className="listWrapper">
        
           
    <div className="listResult">
    <h1>Boat House  List</h1>
      <Link to="/list"><button className="add-btn"  >Add Boat House</button></Link>
      <div>
      {boatHouseList.map((item) => (
        <div key={item.id} className="searchItem">
          <img src={item.imageUrl} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{item.title}</h1>
            <span className="siDistance">{item.distance}</span>
            <span className="siSubtitle">{item.facilities}</span>
            <span className="siCancelOp">{item.cancelOp}</span>
            <span className="siCancelOpSubtitle">{item.cancelOpSubtitle}</span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span style={{ color: 'black', paddingLeft: '130px', paddingTop: '4px' }}>
                <strong>Rating:</strong>
              </span>
              <span>{'★'.repeat(Math.round(item.rating))}</span>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{item.price}</span>
              <span className="siCapacity">Capacity: {item.capacity} persons</span>
              <span className="siTaxOp">{item.taxOp}</span>
              <button className="edit-btn" onClick={() => handleEdit(item.title)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
             
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  
    </div>
       
    </div>
    </Sidebar>
  
  );
};

export default List;

// // Admin_Dashboard.jsx
// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar.jsx';
// import houseboat from '../assets/images/houseboat.jpg';
// import motorboat from '../assets/images/motor boat.jpg';
// import shikaraboat from '../assets/images/shikaraboat.jpg';
// import { PieChart } from '@mui/x-charts/PieChart';
// import '../assets/css/Admin_Dashboard.css';

// export default function Admin_Dashboard() {
//   const data = [
//     { id: 0, value: 2, label: 'House Boat', color: '#001F3F' },
//     { id: 1, value: 2, label: 'Motor Boat', color: '#87CEEB' },
//     { id: 2, value: 2, label: 'Shikara Boat', color: '#3498db' },
//   ];

//   const [bookdata, setBookData] = useState(null);
//   useEffect(() => {
//     fetch('http://localhost:8081/booking/get')
//       .then((res) => res.json())
//       .then((res) => {
//         setBookData(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <>
//       <Sidebar>
//         <h1 style={{ fontSize: '32px', fontFamily: 'VT323' }}>
//           <center>Admin Dashboard</center>
//         </h1>

//         <div className="admindashboard-container">
//           <PieChart
//             series={[
//               {
//                 data,
//                 highlightScope: { faded: 'global', highlighted: 'item' },
//                 faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
//               },
//             ]}
//             height={150}
//             width={350}
          
//           />
//           <div className="admindashboard-item">
//             <div className="admindashboard-card">
//               <img src={houseboat} alt="Sport Activities" className="admindashboard-card-image" />
//               <div className="admindashboard-card-content">
//                 <h3 className="admindashboard-card-title">HOUSE BOATS</h3>
//                 <p className="admindashboard-card-description">No of Bookings:4</p>
//               </div>
//             </div>
//           </div>
//           <div className="admindashboard-item">
//             <div className="admindashboard-card">
//               <img src={motorboat} alt="Our Services" className="admindashboard-card-image" />
//               <div className="admindashboard-card-content">
//                 <h3 className="admindashboard-card-title">MOTOR BOATS</h3>
//                 <p className="admindashboard-card-description">No of Bookings:1</p>
//               </div>
//             </div>
//           </div>
//           <div className="admindashboard-item">
//             <div className="admindashboard-card">
//               <img src={shikaraboat} alt="Climbing Instructor" className="admindashboard-card-image" />
//               <div className="admindashboard-card-content">
//                 <h3 className="admindashboard-card-title">SHIKARA BOATS</h3>
//                 <p className="admindashboard-card-description">No of Bookings:2</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <br />
//         <div className="row">
//           <div className="adminCard-container-data" style={{ width: '80%', paddingLeft: '170px', paddingTop: '20px' }}>
//             <div className="adminCard-card">
//               <div className="adminCard-admin-card">
//                 <div className="adminCard-card-title">
//                   <h1 style={{ fontSize: '27px', fontFamily: 'VT323' }}>Recent Booking History</h1>
//                 </div>
//                 <div className="adminCard-card-body">
//                   <table className="adminCard-table table-bordered">
//                     <thead className="adminCard-bg-primary text-white">
//                       <tr>
//                         <td style={{ backgroundColor: 'grey' }}>Booking Id</td>
//                         <td style={{ backgroundColor: 'grey' }}>Boat Name</td>
//                         <td style={{ backgroundColor: 'grey' }}>Boat Type</td>
//                         <td style={{ backgroundColor: 'grey' }}>User Name</td>
//                         <td style={{ backgroundColor: 'grey' }}>User Email</td>
//                         <td style={{ backgroundColor: 'grey' }}>Contact</td>
//                         <td style={{ backgroundColor: 'grey', width: '18%' }}>Check In Date</td>
//                         <td style={{ backgroundColor: 'grey', width: '18%' }}>Check Out Date</td>
//                         <td style={{ backgroundColor: 'grey' }}>ID Proof</td>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {bookdata &&
//                         bookdata.map((item) => (
//                           <tr key={item.id}>
//                             <td>{item.bookingId}</td>
//                             <td>{item.boatName}</td>
//                             <td>{item.boatType}</td>
//                             <td>{item.userName}</td>
//                             <td>{item.userEmail}</td>
//                             <td>{item.contact}</td>
//                             <td>{item.checkIn}</td>
//                             <td>{item.checkOut}</td>
//                             <td>{item.idProof}</td>
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Sidebar>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import houseboat from '../assets/images/houseboat.jpg';
import motorboat from '../assets/images/motor boat.jpg';
import shikaraboat from '../assets/images/shikaraboat.jpg';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';
import '../assets/css/Admin_Dashboard.css';
import { FaUsers } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';

export default function Admin_Dashboard() {
  const [bookingCounts, setBookingCounts] = useState(null);
  const [bookdata, setBookData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8081/booking/get')
      .then((res) => res.json())
      .then((res) => {
        setBookData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:8081/booking/count')
      .then((response) => {
        setBookingCounts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching booking counts:', error);
      });
  }, []);

  const data = [
    { id: 0, value: bookingCounts ? bookingCounts['House Boat'] || 0 : 0, label: 'House Boat', color: '#001F3F' },
    { id: 1, value: bookingCounts ? bookingCounts['Motor Boat'] || 0 : 0, label: 'Motor Boat', color: '#87CEEB' },
    { id: 2, value: bookingCounts ? bookingCounts['Shikara Boat'] || 0 : 0, label: 'Shikara Boat', color: '#3498db' },
  ];
  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
      axios.get('http://localhost:8081/user/count')
          .then(response => {
              setUserCount(response.data);
          })
          .catch(error => {
              console.error('Error fetching user count:', error);
          });
  }, []);

  const [totalBookingsCount, setTotalBookingsCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8081/booking/totalcount')
      .then(response => {
        setTotalBookingsCount(response.data);
      })
      .catch(error => {
        console.error('Error fetching total bookings count:', error);
      });
  }, []);

  return (
    <>
      <Sidebar>
        <h1 style={{ fontSize: '32px', fontFamily: 'VT323' }}>
          <center>Admin Dashboard</center>
        </h1>

        <div className="admindashboard-container">
          <PieChart
            series={[
              {
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              },
            ]}
            height={150}
            width={350}
          />
          <div className="admindashboard-item">
            <div className="admindashboard-card">
              <img src={houseboat} alt="House Boat" className="admindashboard-card-image" />
              <div className="admindashboard-card-content">
                <h3 className="admindashboard-card-title">House Boat</h3>
                <p className="admindashboard-card-description">No of Bookings: {bookingCounts ? bookingCounts['House Boat'] || 0 : 0}</p>
              </div>
            </div>
          </div>
          <div className="admindashboard-item">
            <div className="admindashboard-card">
              <img src={motorboat} alt="Motor Boat" className="admindashboard-card-image" />
              <div className="admindashboard-card-content">
                <h3 className="admindashboard-card-title">Motor Boat</h3>
                <p className="admindashboard-card-description">No of Bookings: {bookingCounts ? bookingCounts['Motor Boat'] || 0 : 0}</p>
              </div>
            </div>
          </div>
          <div className="admindashboard-item">
            <div className="admindashboard-card">
              <img src={shikaraboat} alt="Shikara Boat" className="admindashboard-card-image" />
              <div className="admindashboard-card-content">
                <h3 className="admindashboard-card-title">Shikara Boat</h3>
                <p className="admindashboard-card-description">No of Bookings: {bookingCounts ? bookingCounts['Shikara Boat'] || 0 : 0}</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br></br>
        <br></br>
       
        <div className="usercount-container">
      <div className="usercount-card">
        <div className="usercount-card-header">
          <FaUsers /> Registered Users
        </div>
        <div className="usercount-card-body">
          <div className="usercount-count">{userCount}</div>
        </div>
      </div>
      <div className="count-card-move">
      <div className="usercount-card">
        <div className="usercount-card-header">
          <FaClipboardList /> Total Bookings
        </div>
        <div className="usercount-card-body">
          <div className="usercount-count">{totalBookingsCount}</div>
        </div>
      </div>
      </div>
    </div>

  

        <div className="row">
          <div className="adminCard-container-data" style={{ width: '80%', paddingLeft: '170px', paddingTop: '20px' }}>
            <div className="adminCard-card">
              <div className="adminCard-admin-card">
                <div className="adminCard-card-title">
                  <h1 style={{ fontSize: '27px', fontFamily: 'VT323' }}>Recent Booking History</h1>
                </div>
                <div className="adminCard-card-body">
                  <table className="adminCard-table table-bordered">
                    <thead className="adminCard-bg-primary text-white">
                      <tr>
                        <td style={{ backgroundColor: 'grey' }}>Booking Id</td>
                        <td style={{ backgroundColor: 'grey' }}>Boat Name</td>
                        <td style={{ backgroundColor: 'grey' }}>Boat Type</td>
                        <td style={{ backgroundColor: 'grey' }}>User Name</td>
                        <td style={{ backgroundColor: 'grey' }}>User Email</td>
                        <td style={{ backgroundColor: 'grey' }}>Contact</td>
                        <td style={{ backgroundColor: 'grey', width: '18%' }}>Check In Date</td>
                        <td style={{ backgroundColor: 'grey', width: '18%' }}>Check Out Date</td>
                        <td style={{ backgroundColor: 'grey' }}>ID Proof</td>
                      </tr>
                    </thead>
                    <tbody>
                      {bookdata &&
                        bookdata.map((item) => (
                          <tr key={item.id}>
                            <td>{item.bookingId}</td>
                            <td>{item.boatName}</td>
                            <td>{item.boatType}</td>
                            <td>{item.userName}</td>
                            <td>{item.userEmail}</td>
                            <td>{item.contact}</td>
                            <td>{item.checkIn}</td>
                            <td>{item.checkOut}</td>
                            <td>{item.idProof}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </div>
      </Sidebar>
    </>
  );
}

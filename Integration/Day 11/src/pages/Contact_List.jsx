// ContactList.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import axios from 'axios';

const Contact_List = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/contact/get')
      .then(response => setContactData(response.data))
      .catch(error => console.error('Error fetching contact data:', error));
  }, []);

  return (
    <>
      <Sidebar>
      <div className='adminCard-container-data'  style={{width:'75%',paddingLeft:'40px' ,paddingTop:'50px'}}>
           <div className='adminCard-card'>
             <div className='adminCard-admin-card'>
               <div className='adminCard-card-title'>
                   <h1 style={{fontSize:"27px",fontFamily:"VT323"}}>Contact Form Submission</h1>
               </div>
               
               <div className='adminCard-card-body'>

               <table className='adminCard-table table-bordered'>
                   <thead className='adminCard-bg-primary text-white'>
                       <tr >
                           {/* <td style={{backgroundColor:"cadetblue"}}>Booking Id</td> */}
                           <td style={{backgroundColor:"grey",width:'18%'}}>Name</td>
                           {/* <td style={{backgroundColor:"cadetblue"}}>Photo</td> */}
                           <td style={{backgroundColor:"grey"}}>Email</td>
                           <td style={{backgroundColor:"grey"}}>Message</td>
                          
                          
                          
                       </tr>
                   </thead>
 
                   <tbody>
                   {contactData.map((submission, index) => (
                <tr key={index}>
                  <td>{submission.name}</td>
                  <td>{submission.email}</td>
                  <td>{submission.message}</td>
                </tr>
              ))}
                   </tbody>
               </table>
               </div>
           </div>
           </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Contact_List;

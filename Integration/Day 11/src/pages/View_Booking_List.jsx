import React, { useState,useEffect } from 'react'

import '../assets/css/Curddata.css';
import Sidebar from '../components/Sidebar'

export default function View_Booking_List() {
     const [bookdata,bookchange] = useState(null);
    
    
    
     useEffect(()=>{
        fetch('http://localhost:8081/user/get').then((res)=>{
        return res.json(); 
        })
        .then((res)=>{
            bookchange(res);
            console.log(bookdata);
        }).catch((err)=>{
            console.log(err);
        })
   
    },[])
  return (
    <Sidebar>
    <div>
      <div className='row'>
       
        <div className='adminCard-container-data'  style={{width:'75%',paddingLeft:'40px' ,paddingTop:'50px'}}>
            <div className='adminCard-card'>
              <div className='adminCard-admin-card'>
                <div className='adminCard-card-title'>
                    <h1 style={{fontSize:"35px",fontFamily:"VT323"}}>Registered User List</h1>
                </div>
                
                <div className='adminCard-card-body'>

                <table className='adminCard-table table-bordered'>
                    <thead className='adminCard-bg-primary text-white'>
                        <tr >
                            <td style={{backgroundColor:"cadetblue"}}>User Id</td>
                            
                            <td style={{backgroundColor:"cadetblue"}}>User Name</td>
                            <td style={{backgroundColor:"cadetblue"}}>User Email</td>
                            {/* <td style={{backgroundColor:"cadetblue"}}>Password</td> */}
                            <td style={{backgroundColor:"cadetblue"}}>Contact</td>
                           
                            {/* <td style={{backgroundColor:"cadetblue",width:'15%'}}>Action</td> */}
                           
                        </tr>
                    </thead>
  
                    <tbody>
                    {bookdata &&
                        bookdata.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                               
                                {/* <td><img src={item.photo} width="90px" height="80px"/></td> */}
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                {/* <td>{item.password}</td> */}
                                <td>{item.number}</td>
                             
{/*                                
                                <td><button>Approve</button>
                              <button>Cancel</button>
                              </td> */}
                                
                            </tr>
                        )) 
                    }
                    </tbody>
                </table>
                </div>
            </div>
            </div>
          
        </div>
      </div>
    </div>
    </Sidebar>
  )
}
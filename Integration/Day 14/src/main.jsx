import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import './assets/css/Curddata.css'

// import Cruddata from './pages/Cruddata.jsx'

// import Create_Boat from './pages/Create_Boat.jsx'
// import Edit_Boat from './pages/Edit_Boat.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* 
     <Router>
      <Routes>
        <Route path="/" element={<View_Boat_List />} />
        <Route path="/booking-form/:boatName" element={<Booking_Form />} />
        <Route path="/success" element={<User_Dashboard />} />
      </Routes>
    </Router> */}
     <App/>   
     {/* <Edit_About/> */}

    
     </React.StrictMode>
  
)

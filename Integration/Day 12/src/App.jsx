
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Hello_World from './components/Hello_World'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Choose from "./pages/Choose";
import User_Login from "./pages/User_Login";
import Admin_Login from "./pages/Admin_Login";
import User_Dashboard from "./pages/User_Dashboard";
import Admin_Dashboard from "./pages/Admin_Dashboard";
import User_Register  from "./pages/User_Register";
import Admin_Home from "./pages/Admin_Home";
import Admin_Profile from "./pages/Admin_Profile";
import Add_Boat from "./pages/Add_Boat";

import User_Home from "./pages/User_Home";
import User_Profile from "./pages/User_Profile";



import List_Add from "./pages/List_Add.jsx";
import List_Edit from "./pages/List_Edit.jsx";
import View_Boat_List from "./pages/View_Boat_List.jsx";
import Booking_Form from "./pages/Booking_Form.jsx";
import View_Booking_List from "./pages/View_Booking_List.jsx";
import Contact_List from "./pages/Contact_List.jsx";
import Admin_About from './pages/Admin_About.jsx';



const App = () => {
  // Import required modules

  

  return (
    <div className='container'>
     <Router>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
     
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/choose" element={<Choose/>}/>
       
       <Route path="/admin" element={<Admin_Login/>}/>
       <Route path="/admin-home" element={<Admin_Home/>}/>
       <Route path="/admin-dashboard" element={<Admin_Dashboard/>}/>
       <Route path="/admin-profile" element={<Admin_Profile/>}/>
       <Route path="/add-boat" element={<Add_Boat/>}/>
       <Route path="/admin-about" element={<Admin_About/>}/>
       <Route path="/list" element={<List_Add/>}/>
       <Route path="/edit/:title" element={<List_Edit/>} />
       <Route path="/view-booking-list" element={<View_Booking_List/>} />
       <Route path="/contact-list" element={<Contact_List/>} />



       

       <Route path="/user" element={<User_Login />} />
       <Route path="/user-home" element={<User_Home/>}/>
       <Route path="/user-profile" element={<User_Profile/>}/>

        <Route path="/view-boat-list" element={<View_Boat_List/>}/>
       <Route path="/booking-form/:boatName/:boatType" element={<Booking_Form />} />
      <Route path="/user-dashboard" element={<User_Dashboard />} />

     
       <Route path="/user-register" element={<User_Register/>}/>

      </Routes>
     </Router>
      
    </div>
  )
}

export default App
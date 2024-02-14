import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Add_Boat.css';
import Sidebar from '../components/Sidebar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Add_Boat = () => {
  const [boatHouseList, setBoatHouseList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items to display per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/boat/get');
        setBoatHouseList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/boat/delete/${id}`);
      setBoatHouseList(boatHouseList.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (title) => {
    navigate(`/edit/${title}`);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the boat house list based on search query
  const filteredBoatHouseList = boatHouseList.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.distance.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.facilities.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredBoatHouseList.length / itemsPerPage);

  // Calculate index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBoatHouseList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Sidebar>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            <h1 style={{ fontSize: '34px', fontFamily: 'VT323' }}>Boat House List</h1>
            <Link to="/list">
              <button className="add-btn">Add Boat House</button>
            </Link>
            <br />
            <br />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="search-input"
            />
            <div>
              {currentItems.map((item) => (
                <div key={item.id} className="searchItem">
                  <img src={item.imageUrl} alt="" className="siImg" />
                  <div className="siDesc">
                    <h1 className="siTitle">{item.title}</h1>
                    <span className="siDistance">{item.distance}</span>
                    <span className="siSubtitle">{item.facilities}</span>
                    <span className="siCancelOpSubtitle"  style={{ color:"cadetblue"  }}> <strong style={{  fontSize: '13.3px',color:"#05445E" }}>Boat Type:</strong>{item.boatType}</span>
                    <span className="siCancelOpSubtitle" style={{ color:"cadetblue"  }}>
                    <strong style={{ fontSize: '13px',color:"#05445E"  }}>Food:</strong>
                      {item.food}
                    </span>
                    <span className="siCancelOpSubtitle"  style={{ color:"cadetblue"  }}>
                      <strong style={{ fontSize: '13px',color:"#05445E"  }}>AC Preferences:</strong>
                      {item.ac}
                    </span>
                    <span className="siCancelOp" style={{ fontSize: '14px' }}>{item.cancelOp}</span>
                  </div>
                  <div className="siDetails">
                    <div className="siRating">
                      <span style={{ color: 'black', paddingLeft: '130px', paddingTop: '4px' }}>
                        <strong>Rating:</strong>
                      </span>
                      <span>{'★'.repeat(Math.round(item.rating))}</span>
                    </div>
                    <div className="siDetailTexts">
                      <span className="siPrice">₹{item.price}</span>
                      <span className="siCapacity">Capacity: {item.capacity} persons</span>
                      <span className="siTaxOp">Timing:{item.time}</span>
                      <button className="edit-btn" style={{width:"100px"}} onClick={() => handleEdit(item.title)}>
                        Edit
                      </button>
                      <button className="delete-btn" style={{width:"100px"}} onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination buttons */}
          
            <div className="pagination">
  <button 
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1} // Disable previous button on first page
  >
    <FaAngleLeft />
    Previous
  </button>
  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
    <button
      key={page}
      onClick={() => setCurrentPage(page)}
      className={currentPage === page ? 'active' : ''}
    >
      {page}
    </button>
  ))}
  <button 
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages} // Disable next button on last page
  >
    Next
    <FaAngleRight />
  </button>
</div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Add_Boat;

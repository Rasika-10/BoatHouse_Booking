// Add_Boat.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Add_Boat.css';
import User_Sidebar from '../components/User_Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
library.add(faFilter);

const View_Boat_List = () => {
  const [boatHouseList, setBoatHouseList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filters, setFilters] = useState({
    price: '',
    boatType: '', // Changed from boatName to boatType
    capacity: '',
  });
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; 

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);

      axios.get('http://localhost:8081/boat/get', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setBoatHouseList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching boat data:', error);
      });
    }
  }, []);
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/user'); // Redirect to login page if not logged in
  //   }
  // }, [isLoggedIn]);



  const handleBookNow = async (item) => {
    try {
      navigate(`/booking-form/${item.title}/${item.boatType}`, { state: { boatName: item.title, boatType: item.boatType } })
    } catch (error) {
      console.error('Error fetching boat data:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

  const handleSort = (sortCriteria) => {
    setSortBy(sortCriteria);
  };

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const sortFunction = (a, b) => {
    if (sortBy === 'price') {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortBy === 'capacity') {
      return parseInt(a.capacity, 10) - parseInt(b.capacity, 10);
    } else if (sortBy === 'name') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  };

  const filteredBoatHouseList = [...boatHouseList]
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filters.price === '' || item.price.includes(filters.price)) &&
        (filters.boatType === '' || item.boatType.toLowerCase().includes(filters.boatType.toLowerCase())) &&
        (filters.capacity === '' || item.capacity.toString().includes(filters.capacity))
    )
    .sort(sortFunction);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredBoatHouseList.length / itemsPerPage);

  // Calculate index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBoatHouseList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <User_Sidebar>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            <h1 style={{ fontSize: '33px', fontFamily: 'VT323' }}>Boat House List</h1>
            <br></br>
            <div className="filterContainer">
              <button className="filter-icon" onClick={toggleFilterMenu}>
                Filter
              </button>
              {showFilterMenu && (
                <div className="filter-dropdown">
                  <label>
                    Price:
                    <input
                      type="text"
                      value={filters.price}
                      onChange={(e) => handleFilterChange('price', e.target.value)}
                    />
                  </label>
                  <label>
                    Boat Type:
                    <input
                      type="text"
                      value={filters.boatType}
                      onChange={(e) => handleFilterChange('boatType', e.target.value)}
                    />
                  </label>
                  <label>
                    Capacity:
                    <input
                      type="text"
                      value={filters.capacity}
                      onChange={(e) => handleFilterChange('capacity', e.target.value)}
                    />
                  </label>
                  <label className="sort-dropdown">
                    Sort By:
                    <select
                      value={sortBy}
                      onChange={(e) => handleSort(e.target.value)}
                    >
                      <option value="">Select Option</option>
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="capacity">Capacity</option>
                    </select>
                  </label>
                </div>
              )}
            </div>
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
                      <button className="add-btn" onClick={() => handleBookNow(item)}>
                       Book Now!!
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
    </User_Sidebar>
  );
};

export default View_Boat_List;

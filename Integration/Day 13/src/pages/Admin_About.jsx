import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Admin_About.css';
import Sidebar from '../components/Sidebar.jsx';
import img from '../assets/images/about.jpeg';

const Admin_About = () => {
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode
  const [aboutContent, setAboutContent] = useState({
    text: '',
    heading: '',
    text1: ''
  });

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:8081/about/get/1')
      .then(response => {
        const data = response.data;
        setAboutContent(data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error cases here
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    // Send the updated content to the backend
    axios.put('http://localhost:8081/about/put/1', aboutContent)
      .then(response => {
        console.log('Data updated successfully:', response.data);
        // You can implement further actions upon successful update if needed
      })
      .catch(error => {
        console.error('Error updating data:', error);
        // Handle error cases here
      });
  };

  const handleCancel = () => {
    setEditMode(false);
    // Optionally, you can fetch the original data again from the backend and reset the content
  };

  return (
    <>
      <Sidebar>
        <div className="adminabout-container">
          <div className="adminabout-us-container">
            <h1 className="adminabout-us-header">About Us</h1>
            <br />
            <div className="adminabout-us-content">
              <div className="adminabout-us-text">
                {editMode ? (
                  <>
                    <textarea
                      value={aboutContent.text}
                      onChange={(e) =>
                        setAboutContent({ ...aboutContent, text: e.target.value })
                      }
                    />
                    <br />
                    <h3>
                      <input
                        value={aboutContent.heading}
                        onChange={(e) =>
                          setAboutContent({ ...aboutContent, heading: e.target.value })
                        }
                      />
                    </h3>
                    <br></br>
                    <textarea
                      value={aboutContent.text1}
                      onChange={(e) =>
                        setAboutContent({ ...aboutContent, text1: e.target.value })
                      }
                    />
                    <div className="button-container">
                      <button onClick={handleSave} className="save-button">Save</button>
                      <button onClick={handleCancel} className="cancel-button">Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <p>{aboutContent.text}</p>
                    <br />
                    <h3>{aboutContent.heading}</h3>
                    <p>{aboutContent.text1}</p>
                    <div className="button-container">
                      <button onClick={handleEdit} className="adminabout-edit-button">
                        Edit
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="adminabout-us-image">
                <img src={img} alt="Placeholder Image" />
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Admin_About;

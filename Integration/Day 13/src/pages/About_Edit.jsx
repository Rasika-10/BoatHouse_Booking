import React, { useState } from 'react';
import '../assets/css/About_Edit.css';

const About_Edit = ({ aboutContent, onSave, onCancel }) => {
  const [editedContent, setEditedContent] = useState(aboutContent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContent({ ...editedContent, [name]: value });
  };

  const handleSave = () => {
    onSave(editedContent);
  };

  return (
    <div className="about-edit-container">
      <h2>Edit About Us Content</h2>
      <label htmlFor="header">Header:</label>
      <input type="text" name="header" value={editedContent.header} onChange={handleChange} />
      <label htmlFor="text">Text:</label>
      <textarea name="text" value={editedContent.text} onChange={handleChange} />
      <label htmlFor="header">Heading:</label>
      <input type="text" name="header" value={editedContent.heading} onChange={handleChange} />
      <label htmlFor="text">Text:</label>
      <textarea name="text" value={editedContent.text1} onChange={handleChange} />
      <button className="save-button" onClick={handleSave}>Save</button>
<button className="cancel-button" onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default About_Edit;
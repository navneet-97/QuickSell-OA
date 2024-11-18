import React, { useState } from 'react';
import '../styles/DisplayDropwdown.css'
import DisplayIcon from '../assets/icons/Display.svg';
import down from '../assets/icons/down.svg';

function DisplayDropdown({ groupBy, setGroupBy, sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [localGroupBy, setLocalGroupBy] = useState(groupBy);
  const [localSortBy, setLocalSortBy] = useState(sortBy);

  const handleDisplayClick = () => {
    setGroupBy(localGroupBy);
    setSortBy(localSortBy);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button 
      
        className="display-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={DisplayIcon} alt="Display Icon" />
        Display
        <span className="dropdown-icon"><img src={down} alt="down" /></span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-group">
            <label>Grouping</label>
            <select 
              value={localGroupBy} 
              onChange={(e) => setLocalGroupBy(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-group">
            <label>Sorting</label>
            <select 
              value={localSortBy} 
              onChange={(e) => setLocalSortBy(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
          
          <div className="dropdown-actions">
            <button 
              className="display-confirm-button"
              onClick={handleDisplayClick}
            >
              Apply
            </button>
            <button 
              className="display-cancel-button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayDropdown;
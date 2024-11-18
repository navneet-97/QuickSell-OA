
import React, { useState } from 'react';
import '../styles/GroupingDropdown.css';


function GroupingDropdown({ groupBy, setGroupBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [localGroupBy, setLocalGroupBy] = useState(groupBy);

  const handleDisplayClick = () => {
    setGroupBy(localGroupBy);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button 
        className="display-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Display
        <span className="dropdown-icon">▼</span>
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

export default GroupingDropdown;

import React, {useState} from 'react';
import '../styles/SortingDropdown.css';

function SortingDropdown({ sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [localSortBy, setLocalSortBy] = useState(sortBy);

  const handleDisplayClick = () => {
    setSortBy(localSortBy);
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

export default SortingDropdown;
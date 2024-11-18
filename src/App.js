import React, { useState, useEffect } from 'react';
import { fetchBoardData } from './services/apiService';
import KanbanBoard from './components/KanbanBoard';
import DisplayDropdown from './components/DisplayDropdown';
import { groupTickets, sortTickets } from './utils/groupAndSortUtils';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupBy, setGroupBy] = useState(
    localStorage.getItem('groupBy') || 'status'
  );
  const [sortBy, setSortBy] = useState(
    localStorage.getItem('sortBy') || 'priority'
  );

  useEffect(() => {
    const loadBoardData = async () => {
      try {
        setLoading(true);
        const { tickets, users } = await fetchBoardData();
        setTickets(tickets);
        setUsers(users);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadBoardData();
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  // Error and Loading States
  if (loading) {
    return <div className="loading">Loading board...</div>;
  }

  if (error) {
    return <div className="error">Error loading board: {error.message}</div>;
  }

  const groupedTickets = groupTickets(tickets, groupBy, users);
  const processedGroups = Object.fromEntries(
    Object.entries(groupedTickets).map(([key, groupTickets]) => [
      key, 
      sortTickets([...groupTickets], sortBy)
    ])
  );

  return (
    <div className="App">
      <div className="app-container">
        <div className="controls">
          <DisplayDropdown 
            groupBy={groupBy} 
            setGroupBy={setGroupBy}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
        <KanbanBoard 
          groupedTickets={processedGroups} 
          groupBy={groupBy}
        />
      </div>
    </div>
  );  
}

export default App;
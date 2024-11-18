import React from 'react';
import '../styles/TicketCard.css';

function TicketCard({ ticket, groupBy }) {
  const getStatusIcon = (status) => {
    return status === 'Done' ? '⭕️✅' : '⭕️'; 
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {groupBy !== 'user' && (
          <span className="ticket-user-icon">👤</span>
        )}
      </div>
      <div className="ticket-title">
        {ticket.title}
      </div>
      <div className="ticket-status">
        {getStatusIcon(ticket.status)} {/* Display the status icon here */}
      </div>
      <div className="ticket-tags">
        {ticket.tag.map((tagName, index) => (
          <span key={index} className="ticket-tag">
            {tagName}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TicketCard;

import React from 'react';
import TicketCard from './TicketCard';
import '../styles/KanbanBoard.css';
import TodoIcon from '../assets/icons/To-do.svg';
import InProgressIcon from '../assets/icons/in-progress.svg';
import BacklogIcon from '../assets/icons/Backlog.svg';
import AddIcon from '../assets/icons/add.svg';
import ThreeDotIcon from '../assets/icons/3 dot menu.svg';

function KanbanBoard({ groupedTickets, groupBy }) {
  const getHeaderIcon = (groupKey) => {
    switch (groupKey) {
      case 'Todo':
        return TodoIcon;
      case 'In progress':
        return InProgressIcon;
      case 'Backlog':
        return BacklogIcon;
      default:
        return null;
    }
  };

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([groupKey, tickets]) => (
        <div key={groupKey} className="kanban-column">
          <div className="column-header">
            <div className="header-left">
              {/* <img
                src={getHeaderIcon(groupKey)}
                alt={`${groupKey} icon`}
                className="column-icon"
              /> */}
              👤
              <h3>{groupKey}</h3>
              <span className="ticket-count">{tickets.length}</span>
            </div>
            <div className="header-right">
              <img
                src={AddIcon}
                alt="Add icon"
                className="action-icon"
                onClick={() => console.log('Add action for', groupKey)}
              />
              <img
                src={ThreeDotIcon}
                alt="More options"
                className="action-icon"
                onClick={() => console.log('More options for', groupKey)}
              />
            </div>
          </div>
          <div className="column-tickets">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                groupBy={groupBy}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
// import BacklogIcon from '../assets/icons/Backlog.svg';
export const groupTickets = (tickets, groupBy, users) => {
  switch(groupBy) {
    case 'status':
      return groupByStatus(tickets);
    case 'user':
      return groupByUser(tickets, users);
    case 'priority':
      return groupByPriority(tickets);
    default:
      return groupByStatus(tickets); // Default fallback
  }
};

const groupByStatus = (tickets) => {
  const statuses = [...new Set(tickets.map(ticket => ticket.status))];
  return statuses.reduce((groups, status) => {
    groups[status] = tickets.filter(ticket => ticket.status === status);
    return groups;
  }, {});
};

const groupByUser = (tickets, users) => {
  const userNames = users.map(user => user.name);
  return userNames.reduce((groups, userName) => {
    groups[userName] = tickets.filter(ticket => 
      users.find(u => u.name === userName)?.id === ticket.userId
    );
    return groups;
  }, {});
};

const groupByPriority = (tickets) => {
  const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  };

  return Object.keys(priorityLabels).reduce((groups, priority) => {
    const label = priorityLabels[priority];
    groups[label] = tickets.filter(ticket => ticket.priority === parseInt(priority));
    return groups;
  }, {});
};

export const sortTickets = (tickets, sortBy) => {
  switch(sortBy) {
    case 'priority':
      return tickets.sort((a, b) => b.priority - a.priority);
    case 'title':
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return tickets;
  }
};
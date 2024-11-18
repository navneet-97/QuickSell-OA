import axios from 'axios';

const API_ENDPOINT = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchBoardData = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    return {
      tickets: response.data.tickets,
      users: response.data.users
    };
  } catch (error) {
    console.error('Error fetching board data:', error);
    throw error;
  }
};
// eventService.js

const BASE_URL = 'http://example.com/api/events';

// Function to fetch all events
export const getEvents = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
};

// Function to create a new event
export const createEvent = async (eventData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw new Error('Failed to create event');
  }
  return response.json();
};

// Other CRUD operations for events...

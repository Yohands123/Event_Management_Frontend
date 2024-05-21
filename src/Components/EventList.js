import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('your-backend-url/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.eventName}</strong> - {event.eventDate} ({event.eventTime}) - {event.eventLocation}
            <ul>
              {event.guests.map((guest, index) => (
                <li key={index}>
                  {guest.guestName} ({guest.guestEmail})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link to="/add-event" className="button-64">
        <span className="text">Add Event</span>
      </Link>
    </div>
  );
};

export default EventList;

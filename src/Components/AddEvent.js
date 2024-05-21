import React, { useState } from 'react';

const AddEvent = ({ onAddEvent }) => {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    eventReason: '',
    eventLocation: '',
    eventTime: '',
    guests: [] // Array to store guest information
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleGuestChange = (index, value) => {
    const updatedGuests = [...eventData.guests];
    updatedGuests[index] = value;
    setEventData({ ...eventData, guests: updatedGuests });
  };

  const handleAddGuest = () => {
    setEventData({ ...eventData, guests: [...eventData.guests, ''] });
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = [...eventData.guests];
    updatedGuests.splice(index, 1);
    setEventData({ ...eventData, guests: updatedGuests });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(eventData); // Pass eventData to the parent component
    setEventData({ // Reset the form after submission
      eventName: '',
      eventDate: '',
      eventReason: '',
      eventLocation: '',
      eventTime: '',
      guests: []
    });
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" name="eventName" value={eventData.eventName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Event Date:
          <input type="date" name="eventDate" value={eventData.eventDate} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Event Reason:
          <input type="text" name="eventReason" value={eventData.eventReason} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Event Location:
          <input type="text" name="eventLocation" value={eventData.eventLocation} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Event Time:
          <input type="time" name="eventTime" value={eventData.eventTime} onChange={handleInputChange} />
        </label>
        <br />
        {eventData.guests.map((guest, index) => (
          <div key={index}>
            <label>
              Guest {index + 1}:
              <input
                type="text"
                value={guest}
                onChange={(e) => handleGuestChange(index, e.target.value)}
              />
            </label>
            <button type="button" onClick={() => handleRemoveGuest(index)}>Remove Guest</button>
          </div>
        ))}
        <button type="button" onClick={handleAddGuest}>Add Guest</button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEvent;

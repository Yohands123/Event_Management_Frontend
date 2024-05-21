import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/add-event" className="button-64">
        <span className="text">Add Event</span>
      </Link>
      <Link to="/events" className="button-64">
        <span className="text">Event List</span>
      </Link>
    </div>
  );
};

export default NavBar;

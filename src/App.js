import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import EventList from './Components/EventList';
import AddEvent from './Components/AddEvent';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {!isLoggedIn && (
            <Route
              path="/"
              element={<SignIn onSignIn={handleSignIn} />}
            />
          )}
          {isLoggedIn && (
            <>
              <Route path="/event-list" element={<EventList />} />
              <Route path="/add-event" element={<AddEvent />} />
            </>
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

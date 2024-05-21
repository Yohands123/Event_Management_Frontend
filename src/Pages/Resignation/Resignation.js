import React from 'react';

const Resignation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="resignation">
      <h2>Resignation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="reason">Reason for resignation:</label>
        <textarea id="reason" name="reason" required />
        <button type="submit">Submit Resignation</button>
      </form>
    </div>
  );
};

export default Resignation;

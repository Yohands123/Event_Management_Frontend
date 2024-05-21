import React from 'react';

const MyComponent = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
    // Add your logic here to handle the button click
  };

  return (
    <div>
      <h1>My Component</h1>
      <button className="button-64" onClick={handleButtonClick}>
        <span className="text">Button 64</span>
      </button>
    </div>
  );
};

export default MyComponent;

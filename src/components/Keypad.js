// Code Keypad Component Here
import React from "react";

function Keypad() {
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      {/* Render an input field of type "password" */}
      <input
        type="password"
        onChange={handleChange} 
        placeholder="Enter password"
      />
    </div>
  );
}

export default Keypad;

import React, { useState } from 'react';

export default function Contact() {
    
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      setName('');
      setEmail('');
      setMessage('');
    };
   
    return (
        <>
          <h1>Contact</h1>
          <form className="form">
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={Email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={Message}
          name="Message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
        </>
      );
}
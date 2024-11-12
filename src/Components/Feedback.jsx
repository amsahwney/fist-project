import React, { useState } from 'react';
import './Feedback.css';

function Feedback() {
  const [newComments, setNewComment] = useState(''); // New comment input

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on submit

    const submitComment = {
      id: Date.now(), // Generate a unique ID
      text: newComments, // The comment text
    };

    if (newComments.trim()) { // Only submit if the comment isn't empty
      // POST the new comment to json-server
      fetch('http://localhost:3000/responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // JSON format
        },
        body: JSON.stringify(submitComment), // Send the comment as JSON
      })
        .then((response) => response.json()) // Parse the response to JSON
        .then((data) => {
          setNewComment(''); // Clear the input after successful submission
        })
        .catch((error) => {
          console.error('Error submitting comment:', error); // Handle any errors
        });
    }
  };

  return (
    <div className="feedback-background">
      <div style={{ padding: '20px' }}>
        <div className="feedback">
          <h2>Tell us what you think!</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              style={{ width: '100%', height: '100px', marginBottom: '10px' }}
              placeholder="Your feedback here..."
              value={newComments}
              onChange={(event) => setNewComment(event.target.value)} // Update the state with input
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
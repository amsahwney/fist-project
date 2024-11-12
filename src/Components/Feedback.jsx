import React, { useState, useEffect } from 'react'
import "./Feedback.css"

function Feedback() {
  const [newComments, setNewComment] = useState("") // NEW COMMENT TO SUBMIT

  useEffect(() => {
    fetch("http://localhost:5174/response")
      .then((response) => response.json())
      .then((data) => newComments(data))
      .catch((error) => console.error("Error fetching comments:", error))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    // const submitComment = {
    //   text: newComments
    // }
    if (newComments.trim()) {   // NEW COMMENT TO SERVER WITH POST
      fetch("http://localhost:3000/response", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(newComments),
    })
    .then((response) => response.json())
    .then((data) => {
      setNewComment("") //RESET INPUT
    })
    .catch((error) => console.error("Error submitting comment", error))
  }
}
  
  return (
    <div className="feedback-background">
    <div style={{padding:"20px"}}>
      <div className="feedback">
      <h2>Tell us what you think!</h2>
      <form onSubmit={handleSubmit}>
        <textarea
        style={{width: "100%", height: "100px", marginBottom: "10px"}}
      placeholder="Your feedback here..."
      value={newComments}
      onChange={(event) => setNewComment(event.target.value)}>
    </textarea>
        <button type="submit">Submit</button>
      </form>

      {/* <div>
        <h2>Comments</h2>
        <div>
          {newComments.length > 0 ? (
            newComments.map((id, text) => (
              <div key={id}> <p>{text}</p>
            ))
          }) */}

        </div>
      </div>
      </div>
  )
}

export default Feedback
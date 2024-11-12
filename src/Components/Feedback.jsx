import React, { useState, useEffect } from 'react'
import "./Feedback.css"

function Feedback() {
  const [feedback, setFeedback] = useState("")
  const [comments, setComment] = useState(() => {
    const savedComments = localStorage.getItem("comments")
    return savedComments ? JSON.parse(savedComments) : []
  })

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments))
  }, [comments])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (comments.trim()) {
      setComment([{id: Date.now(), text: comments}, ...comments])
      setFeedback("") // Clear input
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
      value={feedback}
      onChange={(event) => setFeedback(event.target.value)}>
    </textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="comment-list">
        {comments.map(({id, text}) => (
          <div key={id} className="comment-list">
            <p>{text}</p>
      </div>
    ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default Feedback
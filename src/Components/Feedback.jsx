import React, { useState, useEffect } from 'react'
import "./Feedback.css"

function Feedback() {
  const [comments, setComment] = useState([
    {id: 100, text: "this is great"},
    {id: 200, text: "I use this app all the time"},
  ])

  const [newComment, setNewComment] = useState("")

  // useEffect(() => {
  //   fetch("http://localhost:5174/response")
  //     .then((response) => response.json())
  //     .then((data) => newComments(data))
  //     .catch((error) => console.error("Error fetching comments:", error))
  // }, [])

  const handleInputChange = (event) => {
    setNewComment(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (newComment.trim()) {   // NEW COMMENT TO SERVER WITH POST
      const submitComment = {
        id: comments.length +1,
        text: newComment
      }
      setNewComment("") //RESET INPUT

      fetch("http://localhost:3000/responses", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(submitComment),
    })
    .then((response) => response.json())
    .then((data) => {
      setComment((prevComments) => [...prevComments, submitComment]);
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
      value={newComment}
      onChange={handleInputChange}></textarea>
        <button type="submit">submit</button>
      </form> <br></br>

            <h2>Feedback from our users:</h2>
      <div className="comments">
        <div className="feedback-msg">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Feedback

 
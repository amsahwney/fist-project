import React, { useState } from 'react'

function Feedback() {
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div style={{padding:"20px"}}>
      <h2>Feedback Page</h2>
      <form onSubmit={handleSubmit}>
        <textarea
        style={{width: "100%", height: "100px", marginBottom: "10px"}}
      placeholder="Your feedback here..."
      value={feedback}
      onChange={(event) => setFeedback(event.target.value)}>
    </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Feedback
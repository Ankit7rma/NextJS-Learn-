import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    //{email:"ank@g,ail.com",text:"This is Post Req"}
  }
  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback);
        console.log(data.feedback);
      });
  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Email Address</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>

        <button>Submit Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            <strong>Email:</strong> {item.email} - {item.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

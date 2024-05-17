import React, { FormEvent, useEffect, useState } from "react";
import "../App.css";

function Message() {
  const [message, setMessage] = useState("");
  const [shown, setShown] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShown(message);
  }
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          id="form-textarea"
        />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
      <div className="message">{shown}</div>
    </>
  );
}

export default Message;

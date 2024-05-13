import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Advice from "./components/Advice";
import Button from "./components/Button";

function App() {
  const [show, setShow] = useState(false);
  const [isQuery, setIsQuery] = useState(false);

  const handleClick = () => {
    let element = document.getElementById("advice");
    setTimeout(() => {
      element?.classList.add("opacityIN");
    }, 0);
    setShow(true);
    setIsQuery(!isQuery);
    element?.classList.remove("opacityIN");
  };

  return (
    <div className="App">
      {show && <Advice isQuery={isQuery} />}
      <Button
        onClick={handleClick}
        children={!show ? "GET WISE ADVICE" : "NEW ADVICE"}
      />
    </div>
  );
}

export default App;

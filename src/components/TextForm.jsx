import React, { useState } from "react";

// without making class components helps to use its features are called HOOKS

// it keeps some value and can change overtime ,while props are some values we pass and it cant be changed

// example : dark and light theme of some website ide is a state

// React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Uppercase clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
};

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
};

  const [text, setText] = useState("Enter text");
  // text="new update text";  // wrong way to change text
  // setText("New Update Text")   //correct way to change state

  //   console.log(useState("Enter text 2"));
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            name=""
            id="myBox"
            cols=""
            rows="8"
            value={text}
            style={{backgroundColor:props.mode==='light'?'dark':'light'}}
            onChange={handleonChange}
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>

        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        
      </div>
      <div className="conatiner my-2">
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words , {text.length} charcters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;

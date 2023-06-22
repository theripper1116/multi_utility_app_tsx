import React, { useState } from "react";

function UtilityApps() {
  const [textFromTextArea, changeTextArea] = useState<string>("default");
  const storeTextAreaContent = (event) => {
    changeTextArea(event.target.value);
  };
  const convertToUppercase = () => {
    changeTextArea(textFromTextArea.toUpperCase());
    textFromTextArea !== "default" &&
    textFromTextArea !== "DEFAULT" &&
    textFromTextArea !== ""
      ? // here ! before innerHTML is non null assertion operator
        (document.getElementById("changedText")!.innerHTML = textFromTextArea)
      : (document.getElementById("changedText")!.innerHTML =
          "Please enter some text");
  };
  const convertToLowercase = () => {
    changeTextArea(textFromTextArea.toLowerCase());
    textFromTextArea !== "default" &&
    textFromTextArea !== "DEFAULT" &&
    textFromTextArea !== ""
      ? (document.getElementById("changedText")!.innerHTML = textFromTextArea)
      : (document.getElementById("changedText")!.innerHTML =
          "Please enter some text");
  };
  const countChar = () => {
    if (
      textFromTextArea === "default" ||
      textFromTextArea === "DEFAULT" ||
      textFromTextArea === ""
    )
      document.getElementById("changedText")!.innerHTML =
        "Words: -" + 0 + "Character: -" + 0;
    else {
      let wordCount = textFromTextArea.split(" ");
      let charCount = 0;
      for (let x in wordCount) {
        charCount += wordCount[x].length;
      }
      document.getElementById("changedText")!.innerHTML =
        "Words: - " + wordCount.length + "Character: -" + charCount;
    }
  };
  const removeExtraSpace = () => {
    textFromTextArea !== "default" &&
    textFromTextArea !== "DEFAULT" &&
    textFromTextArea !== ""
      ? (document.getElementById("changedText")!.innerHTML = textFromTextArea
          .split(" ")
          .join(" "))
      : (document.getElementById("changedText")!.innerHTML =
          "Please enter some text");
  };
  const reverseString = () => {
    textFromTextArea !== "default" &&
    textFromTextArea !== "DEFAULT" &&
    textFromTextArea !== ""
      ? (document.getElementById("changedText")!.innerHTML = textFromTextArea
          .split("")
          .reverse()
          .join(""))
      : (document.getElementById("changedText")!.innerHTML =
          "Please enter some text");
  };
  return (
    <>
      <div className="form-floating" style={{ marginTop: 100 }}>
        <textarea
          className="container form-control my-5"
          placeholder="Type Here!"
          id="floatingTextarea2"
          style={{ height: 100 }}
          onChange={storeTextAreaContent}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={convertToUppercase}
      >
        Convert to UpperCase!
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={convertToLowercase}
      >
        Convert to LowerCase!
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={countChar}
      >
        Calculate the number of words and characters
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={removeExtraSpace}
      >
        Remove Extra spaces
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={reverseString}
      >
        Reverse the content
      </button>
      {textFromTextArea !== "default" && textFromTextArea !== "" ? (
        <div className="container my-5">
          Result: -<div id="changedText"></div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default UtilityApps;

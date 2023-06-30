import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case "Save":
      return [...state, entryData(action.docData.data, action.docData.index)];
    default:
      return state;
  }
}

function entryData(data, index) {
  let UTCDate = new Date();
  return {
    id: index + 1,
    modifiedDate: UTCDate.toUTCString(),
    data: data,
    actionName: "saveTheData",
  };
}

function ToDoApp(props) {
  const [state, dispatch] = useReducer(reducer, []);
  const [index, setIndex] = useState<number>(0);

  const saveTheDoc = () => {
    setIndex(index + 1);
    dispatch({
      type: "Save",
      docData: {
        data: (document.getElementById("saveTheDoc") as HTMLInputElement).value,
        index: index,
      },
    });
  };

  useEffect(() => {
    props.receiveDocData(state);
  }, [state]);

  return (
    <>
      <Link
        className="btn btn-primary"
        style={{ marginTop: 100, marginLeft: 20 }}
        to="/ToDoApp/Archived"
      >
        Click here to get Archived docs
      </Link>
      <Link
        className="btn btn-primary"
        style={{ marginTop: 100, marginLeft: 20 }}
        to="/ToDoApp/Deleted"
      >
        Click here to get Deleted docs
      </Link>
      <Link
        className="btn btn-primary"
        style={{ marginTop: 100, marginLeft: 20 }}
        to="/ToDoApp/Saved"
      >
        Click here to get Saved docs
      </Link>
      <div className="container form-floating">
        <textarea
          className="form-control"
          placeholder="Type Your Message Here"
          id="saveTheDoc"
          style={{ marginTop: 50, height: 100 }}
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        style={{ marginTop: 50, marginLeft: 20 }}
        onClick={saveTheDoc}
      >
        Save the current Doc!
      </button>
    </>
  );
}

export default ToDoApp;

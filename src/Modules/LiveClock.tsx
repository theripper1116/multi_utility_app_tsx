import React, { useCallback, useEffect, useReducer } from "react";

function reducer(state, action) {
  // let testData = (action.data.getTime.getHours() +
  // " " +
  // action.data.getTime.getMinutes() +
  // " " +
  // action.data.getTime.getSeconds());
  // console.log(
  //   action.data.getTime
  // );
  switch (action.type) {
    case "getTime":
      return {
        time: action.data.getTime,
      };
  }
}
function LiveClock() {
  const [state, dispatch] = useReducer(reducer, { time: String });

  const getTime = useCallback(() => {
    let date = new Date();
    dispatch({
      type: "getTime",
      data: {
        getTime: date.toUTCString(),
      },
    });
    console.log(date.toUTCString());
  }, []);

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, [getTime]);

  return (
    <>
      <div className="container" style={{ marginTop: 100 }}>
        <textarea
          className="container"
          disabled={true}
          placeholder={state?.time}
        ></textarea>
      </div>
    </>
  );
}

export default LiveClock;

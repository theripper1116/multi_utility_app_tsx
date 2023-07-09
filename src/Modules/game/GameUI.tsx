import React from "react";
import store from "./store.tsx";
// import { Provider } from "react-redux";
// import changeTheNumber from "./reducers/dispatch.js";
// import { useDispatch, useSelector } from "react-redux";

store.subscribe(() => {
  console.log(store.getState());
});
function GameUI() {
  const changePlayerFromUI = () => {};

  // const myState = useSelector((state)=>{state.changeTheNumber});
  return (
    <>
      {/* <Provider store={store}> */}
        <div className="container" style={{ marginTop: 100 }}>
          <div className="container">Player Selected:</div>
          <div className="form-floating my-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              disabled={true}
            ></textarea>
          </div>
          <button className="btn btn-dark my-3" onClick={changePlayerFromUI}>
            Change Player
          </button>
        </div>
      {/* </Provider> */}
    </>
  );
}

export default GameUI;

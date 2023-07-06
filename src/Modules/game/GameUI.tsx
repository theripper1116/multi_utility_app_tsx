import React from "react";

function GameUI() {
  return (
    <>
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
        <button className="btn btn-dark my-3">Change Player</button>
      </div>
    </>
  );
}

export default GameUI;

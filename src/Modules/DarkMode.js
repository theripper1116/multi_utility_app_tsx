import React from "react";

function DarkMode(props) {
  return (
    <>
      <button
        type="button"
        className={`btn btn-${props.darkMode.color}`}
        onClick={props.toggleDarkMode}
      >
        Dark Mode
      </button>
    </>
  );
}

export default DarkMode;

import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode.tsx";

function Navbar(props) {
  const changeHeaderTitle = (event) => {
    if (document.getElementById("Home")!.innerHTML === "Home")
      document.title = document.getElementById("Home")!.innerHTML;
    else if (document.getElementById("utility")!.innerHTML === "Utility Apps")
      document.title = document.getElementById("utility")!.innerHTML;
    else if (document.getElementById("API")!.innerHTML === "Experience API")
      document.title = document.getElementById("API")!.innerHTML;
    else document.title = "unknown";
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.darkMode.backgroundColor} fixed-top`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${props.darkMode.color}`}
                  aria-current="page"
                  to="/Home"
                  onClick={changeHeaderTitle}
                  id="Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${props.darkMode.color}}`}
                  to="/UtilityApps"
                  onClick={changeHeaderTitle}
                  id="utility"
                >
                  Utility Apps
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${props.darkMode.color}}`}
                  to="/Calculator"
                  onClick={changeHeaderTitle}
                  id="utility"
                >
                  Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${props.darkMode.color}}`}
                  to="/ToDoApp"
                  onClick={changeHeaderTitle}
                  id="ToDoApp"
                >
                  ToDoApp
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${props.darkMode.color}}`}
                  to="/LiveClock"
                  onClick={changeHeaderTitle}
                  id="LiveClock"
                >
                  Live Digital Clock
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle text-${props.darkMode.color}`}
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={changeHeaderTitle}
                  id="API"
                >
                  Experience API
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Youtube">
                      Youtube
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      NewsAPI
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <DarkMode
            toggleDarkMode={props.toggleDarkMode}
            darkMode={props.darkMode}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

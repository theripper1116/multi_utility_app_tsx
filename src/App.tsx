import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Introduction from "./Modules/Introduction.tsx";
import Navbar from "./Modules/Navbar.tsx";
import Saved from "./Modules/ToDoApp/Saved";
import Deleted from "./Modules/ToDoApp/Deleted";
import Archived from "./Modules/ToDoApp/Archived";
import React from "react";

function App() {
  const UtilityApps = lazy(() => import("./Modules/UtilityApps.tsx"));
  const Home = lazy(() => import("./Modules/Home.tsx"));
  const FetchYoutubeData = lazy(
    () => import("./Modules/Youtube/FetchYoutubeData.tsx")
  );
  const Calculator = lazy(() => import("./Modules/Calculator.tsx"));
  const ToDoApp = lazy(() => import("./Modules/ToDoApp/ToDoApp.tsx"));
  const LiveClock = lazy(() => import("./Modules/LiveClock.tsx"));

  const [darkMode, changeDarkMode] = useState({
    color: "dark",
    backgroundColor: "white",
  });

  const toggleDarkMode = () => {
    if (darkMode.color === "light") {
      changeDarkMode({
        color: "dark",
        backgroundColor: "white",
      });
      console.log(darkMode);
    } else {
      changeDarkMode({
        color: "light",
        backgroundColor: "dark",
      });
      console.log(darkMode);
    }
  };

  const [toDoAppData, changeToDoAppData] = useState([]);

  const receiveDocData = (docData) => {
    changeToDoAppData(docData);
  };

  useEffect(() => {
    console.log(toDoAppData);
  }, [toDoAppData]);

  return (
    <>
      <div className={`text-${darkMode.color} bg-${darkMode.backgroundColor}`}>
        <Router>
          <Suspense>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Routes>
              <Route path="/" element=<Introduction darkMode={darkMode} /> />
            </Routes>
            <Routes>
              <Route path="/Home" element=<Home /> />
            </Routes>
            <Routes>
              <Route path="/UtilityApps" element=<UtilityApps /> />
            </Routes>
            <Routes>
              <Route path="/Youtube" element=<FetchYoutubeData /> />
            </Routes>
            <Routes>
              <Route path="/Calculator" element=<Calculator /> />
            </Routes>
            <Routes>
              <Route
                path="/ToDoApp"
                element=<ToDoApp receiveDocData={receiveDocData} />
              />
              <Route
                path="/ToDoApp/Saved"
                element=<Saved toDoAppData={toDoAppData} />
              />
              <Route path="/ToDoApp/Deleted" element=<Deleted /> />
              <Route path="/ToDoApp/Archived" element=<Archived /> />
            </Routes>
            <Routes>
              <Route path="/LiveClock" element=<LiveClock /> />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;

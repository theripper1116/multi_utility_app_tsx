import { lazy, Suspense, useEffect, useState, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Introduction from "./Modules/Introduction.tsx";
import Navbar from "./Modules/Navbar.tsx";
import Saved from "./Modules/toDoApp/Saved.tsx";
import Deleted from "./Modules/toDoApp/Deleted";
import Archived from "./Modules/toDoApp/Archived";
import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "Save":
      return action.data;
  }
}

function App() {
  const UtilityApps = lazy(() => import("./Modules/UtilityApps.tsx"));
  const Home = lazy(() => import("./Modules/Home.tsx"));
  const FetchYoutubeData = lazy(
    () => import("./Modules/youtube/FetchYoutubeData.tsx")
  );
  const Calculator = lazy(() => import("./Modules/Calculator.tsx"));
  const ToDoApp = lazy(() => import("./Modules/toDoApp/ToDoApp.tsx"));
  const LiveClock = lazy(() => import("./Modules/LiveClock.tsx"));
  const GameUI = lazy(()=> import("./Modules/game/GameUI.tsx"));

  const [darkMode, changeDarkMode] = useState<{
    color: string;
    backgroundColor: string;
  }>({
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

  const [state, dispatch] = useReducer(reducer, []);

  const receiveDocData = (docData) => {
    docData.map((element, index) => {
      if (element.actionName === "saveTheData") {
        dispatch({
          type: "Save",
          data: docData,
        });
      }
      // else if(element.actionName === "Delete"){
      //   dispatch({
      //     type: "Delete",
      //     data: "",
      //   })
      // }
    });
  };

  // useEffect(() => {
  //   console.log(toDoAppData);
  // }, [toDoAppData]);

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
              <Route
                path="/Youtube"
                element=<FetchYoutubeData darkMode={darkMode} />
              />
            </Routes>
            <Routes>
              <Route
                path="/Calculator"
                element=<Calculator darkMode={darkMode} />
              />
            </Routes>
            <Routes>
              <Route
                path="/ToDoApp"
                element=<ToDoApp
                  receiveDocData={receiveDocData}
                  darkMode={darkMode}
                />
              />
              <Route
                path="/ToDoApp/Saved"
                element=<Saved state={state} darkMode={darkMode} receiveDocData={receiveDocData}/>
              />
              <Route path="/ToDoApp/Deleted" element=<Deleted /> />
              <Route path="/ToDoApp/Archived" element=<Archived /> />
            </Routes>
            <Routes>
              <Route
                path="/LiveClock"
                element=<LiveClock darkMode={darkMode} />
              />
            </Routes>
            <Routes>
              <Route
                path="/Dice-Game"
                element=<GameUI darkMode={darkMode} />
              />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

// interface SavedData {
//   id: number;
//   modifiedDate: string;
//   data: string;
// }

export default App;

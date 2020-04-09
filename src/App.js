//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Scoreboard from "./Scoreboard";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeName] = useState("Lions");
  const [awayName] = useState("Tigers");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(20);
  const [quarter, setQuarter] = useState(1);

  // this creates an infinite loop ... how to pass in a variable to make the function reusable
  // const addScoreHome = (num) => setHomeScore(homeScore + num);

  return (
    <div className="container">
      <Scoreboard
        homeName={homeName}
        awayName={awayName}
        homeScore={homeScore}
        awayScore={awayScore}
        down={down}
        toGo={toGo}
        ballOn={ballOn}
        quarter={quarter}
      />
      <Buttons
        homeScore={homeScore}
        setHomeScore={setHomeScore}
        awayScore={awayScore}
        setAwayScore={setAwayScore}
        down={down}
        setDown={setDown}
        toGo={toGo}
        setToGo={setToGo}
        ballOn={ballOn}
        setBallOn={setBallOn}
        quarter={quarter}
        setQuarter={setQuarter}
      />
    </div>
  );
}

export default App;

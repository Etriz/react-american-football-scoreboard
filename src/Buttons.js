import React from "react";

export default function Buttons(props) {
  return (
    <section className="buttons">
      <input type="text" defaultValue="Lions" />
      <input type="text" defaultValue="Tigers" />

      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button
          className="homeButtons__touchdown"
          onClick={() => props.setHomeScore(props.homeScore + 7)}>
          Home Touchdown
        </button>
        <button
          className="homeButtons__fieldGoal"
          onClick={() => props.setHomeScore(props.homeScore + 3)}>
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          className="awayButtons__touchdown"
          onClick={() => props.setAwayScore(props.awayScore + 7)}>
          Away Touchdown
        </button>
        <button
          className="awayButtons__fieldGoal"
          onClick={() => props.setAwayScore(props.awayScore + 3)}>
          Away Field Goal
        </button>
      </div>
      <div className="utilityButtons">
        <button
          className="btn"
          onClick={() => (props.down < 4 ? props.setDown(props.down + 1) : props.setDown(1))}>
          Set Down
        </button>
        <button
          className="btn"
          onClick={() => (props.toGo > 1 ? props.setToGo(props.toGo - 1) : props.setToGo(10))}>
          Set To Go
        </button>
        <button
          className="btn"
          onClick={() =>
            props.quarter < 4 ? props.setQuarter(props.quarter + 1) : props.setQuarter(1)
          }>
          Set Quarter
        </button>
        <br />
        <button
          className="btn"
          onClick={() =>
            props.ballOn > 5 ? props.setBallOn(props.ballOn - 5) : props.setBallOn(0)
          }>
          Ball On - 5
        </button>
        <button
          className="btn"
          onClick={() =>
            props.ballOn > 1 ? props.setBallOn(props.ballOn - 1) : props.setBallOn(0)
          }>
          Ball On - 1
        </button>
        <button
          className="btn"
          onClick={() =>
            props.ballOn < 50 ? props.setBallOn(props.ballOn + 1) : props.setBallOn(49)
          }>
          Ball On + 1
        </button>
        <button
          className="btn"
          onClick={() =>
            props.ballOn < 46
              ? props.setBallOn(props.ballOn + 5)
              : props.setBallOn(50 - (5 - (50 - props.ballOn)))
          }>
          Ball On + 5
        </button>
        <br />
        <button
          className="btn"
          onClick={() => {
            props.setDown(1);
            props.setToGo(10);
            props.setBallOn(20);
            props.setQuarter(1);
            props.setHomeScore(0);
            props.setAwayScore(0);
          }}>
          RESET ALL!
        </button>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  // const [time, setTime] = useState("00:03")
  const [down, setDown] = useState(4);
  const [toGo, setToGO] = useState(7);
  const [ballOn, setBallOn] = useState(21);
  const [quarter, setQuarter] = useState(4);
  const randomizeGame = () => {
    setDown(Math.ceil(Math.random() * 4));
    setToGO(Math.floor(Math.random() * 10));
    setBallOn(Math.floor(Math.random() * 50));
    setQuarter(Math.ceil(Math.random() * 4));
  };
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <button onClick={randomizeGame}>Randomize Game</button>
    </div>
  );
};

export default BottomRow;

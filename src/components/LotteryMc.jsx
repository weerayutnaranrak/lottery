import React, { useState } from "react";
import "./Lottery.css";
export default function LotteryMc({ title, size, value }) {
  const arrayLength = Array(size).fill(0);
  const [counter, setCounter] = useState(arrayLength);
  function randomNumber() {
    return Math.ceil(Math.random() * 9);
  }
  function ramdom() {
    const newCounter = counter.map((_) => randomNumber());
    setCounter(newCounter);
  }
  return (
    <>
      <div className="lottery-title">{title}</div>
      <div className="lottery-container">
        {counter.map((e) => (
          <div className="lottery-number">{e}</div>
        ))}
      </div>
      <button
        className="lottery-button"
        onClick={() => {
          ramdom();
        }}
      >
        Click
      </button>
    </>
  );
}

import React, { useState } from "react";
import "./Lottery.css";
import LotteryMc from "./LotteryMc";
export default function Lottery({ value }) {
  return (
    <>
      <LotteryMc
        title="หวยสามตัวงวดนี้คือ...."
        size={3}
        value={value}
      ></LotteryMc>
      <LotteryMc title="หวยสองตัวงวดนี้คือ...." size={2}></LotteryMc>
    </>
  );
}

import React, { useState, useRef, useEffect } from "react";
import { Speed } from "./Speed";
import { Accuracy } from "./Accuracy";

import { Count } from "./Count";
import { useDispatch, useSelector } from "react-redux";
import { resetStat, updateCount, updateAccuracy } from "../Redux/action";

// define quotes to be used
export const MainCont = () => {
  let quotes_array = [
    "Push yourself, because no one else is going to do it for you.",
    "Failure is the condiment that gives success its flavor.",
    "Wake up with determination. Go to bed with satisfaction.",
    "It's going to be hard, but hard does not mean impossible.",
    "Learning never exhausts the mind.",
    "The only way to do great work is to love what you do.",
  ];
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.typing);
  const idx = useRef(0);
  const nextLetter = useRef("");

  const [localInput, setLocalInput] = useState("");

  function handleInputChange(e) {
    let value = e.target.value;
    setLocalInput(e.target.value);
    if (quotes_array[idx.current] === value) {
      idx.current = idx.current + 1;
      setLocalInput("");
      return;
    }
  }
  function handleKeyDown(e) {
    let key = e.key;

    if (key === "Tab") {
      dispatch(resetStat());
      setLocalInput("");
    }

    if (key.length === 1) {
      dispatch(updateCount());
    }
  }

  useEffect(() => {
    if (quotes_array[idx.current].startsWith(localInput)) {
      let accuracy = (localInput.length / count) * 100;
      nextLetter.current = quotes_array[idx.current][localInput.length];

      dispatch(updateAccuracy(accuracy ? Math.floor(accuracy) : 0));
    }
  }, [localInput]);
  return (
    <div className="main_cont">
      <h2 className="cont_heading">Touch Typing</h2>
      <div className="stats_box">
        <Speed />
        <Accuracy />
        <Count />
      </div>
      <h3 className="sample_text">{quotes_array[idx.current]}</h3>
      <div style={{display : "flex", justifyContent : "flex-end", width : "100%"}}>
        <p>Next Letter -: {nextLetter.current} </p>
      </div>
      <input
        type="text"
        value={localInput}
        className="text_input"
        onChange={(e) => {
          handleInputChange(e);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />

      <p>To start type above sample text </p>
      <p>To restart press Tab Key </p>
    </div>
  );
};

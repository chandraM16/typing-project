import React, { useState, useRef, useEffect } from "react";
import { Error } from "./Error";
import { Accuracy } from "./Accuracy";

import { Count } from "./Count";
import { useDispatch, useSelector } from "react-redux";
import {
  resetStat,
  updateCount,
  updateAccuracy,
  updateError,
} from "../Redux/action";

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
  const localAcc = useRef(0);
  const [localInput, setLocalInput] = useState("");
  const [nextLetter, setNextLetter] = useState("");

  function handleInputChange(e) {
    let value = e.target.value;
    setLocalInput(e.target.value);
    if (quotes_array[idx.current] === value) {
      idx.current = idx.current + 1;
      dispatch(updateAccuracy(localAcc.current));
      dispatch(updateError((100 - localAcc.current).toFixed(2)));
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
      let accu = (localInput.length / count) * 100;
      setNextLetter(quotes_array[idx.current][localInput.length]);
      localAcc.current = +accu.toFixed(2);
    }
  }, [localInput]);
  return (
    <div className="main_cont">
      <h2 className="cont_heading">Touch Typing</h2>
      <div className="stats_box">
        <Accuracy ref={localAcc} />
        <Error ref={localAcc} />
        <Count />
      </div>
      <h3 className="sample_text">{quotes_array[idx.current]}</h3>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <p>Next Supposed Letter -: {nextLetter} </p>
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

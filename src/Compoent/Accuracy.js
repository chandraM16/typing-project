import React from "react";
import { useSelector } from "react-redux";

export const Accuracy = () => {
    const { accuracy } = useSelector((store) => store.typing);
  return (
    <div className="stat_item">
      <p>Accuracy</p>
      <h1>{accuracy}<span>%</span></h1>
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";

export const Count = () => {
  const { count } = useSelector((store) => store.typing);
  return (
    <div className="stat_item">
      <p>Total Count</p>
      <h1>{count}</h1>
    </div>
  );
};

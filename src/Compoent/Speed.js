import React from "react";
import { useSelector } from "react-redux";
export const Speed = () => {
  const { speed } = useSelector((store) => store.typing);
  return (
    <div className="stat_item">
      <p>Speed</p>
      <h1>{speed}</h1>
    </div>
  );
};

import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
export const Error = forwardRef((prop, ref) => {
  const { error } = useSelector((store) => store.typing);

  return (
    <div className="stat_item">
      <p>Error</p>
      <h1>
        {" "}
        {ref.current ? (100 - ref.current).toFixed(2) : error.at(-1)}{" "}
        <span>%</span>
      </h1>
    </div>
  );
});

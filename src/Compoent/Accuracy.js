import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

export const Accuracy = forwardRef((prop, ref) => {
  const { accuracy } = useSelector((store) => store.typing);
  return (
    <div className="stat_item">
      <p>Accuracy</p>
      <h1>
        {ref.current ? ref.current : accuracy.at(-1)}
        <span>%</span>
      </h1>
    </div>
  );
});

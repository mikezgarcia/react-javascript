import React from "react";
import { useState } from "react";

export default function GetLargestInput() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const getHighestNumber = () => {
    if (isNaN(firstInput, secondInput, thirdInput)) {
      return "Please Input a Number!";
    } else {
      return Math.max(firstInput, secondInput, thirdInput);
    }
  };

  return (
    <div className="container py-5">
      <div className="col-12 md-5">
        <input
          type="text"
          className="firstInput w-25 lead"
          placeholder="First Input"
          value={firstInput}
          onChange={(e) => setFirstInput(e.target.value)}
        />
        <input
          type="text"
          className="firstInput w-25 lead"
          placeholder="First Input"
          value={secondInput}
          onChange={(e) => setSecondInput(e.target.value)}
        />
        <input
          type="text"
          className="firstInput w-25 lead"
          placeholder="First Input"
          value={thirdInput}
          onChange={(e) => setThirdInput(e.target.value)}
        />
      </div>
      <div className="col-12 md-5">
        <h2 className="text-primary lead fw-bold">
          The Largest Number from all of them is: {getHighestNumber()}
        </h2>
      </div>
    </div>
  );
}

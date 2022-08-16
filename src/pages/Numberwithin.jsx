import React, { useState } from "react";

export default function Numberwithin() {
  const [input, setInput] = useState("");

  const isWithinRange = () => {
    var numRange = "false";
    if (isNaN(input)) {
      return "Please Input a Number!";
    } else if (parseInt(input) >= 100 && parseInt(input) <= 500) {
      numRange = "true";
    }

    return numRange;
  };
  return (
    <div className="container py-5">
      <div className="col-12 md-5">
        <input
          type="text"
          className="w-25"
          placeholder="Input"
          onChange={(inputEvent) => setInput(inputEvent.target.value)}
        />
      </div>
      <div className="col-12 md-5">
        <h2 className="text-primary">{isWithinRange()}</h2>
      </div>
    </div>
  );
}

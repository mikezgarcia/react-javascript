import React from "react";
import { useState } from "react";

export default function SumofDigits() {
  const [input, setInput] = useState("");

  const getSumOfDigits = () => {
    let total = 0;
    input.split("").forEach((character) => {
      if (!isNaN(character)) {
        total = total + parseInt(character);
      }
    });

    return total;
  };

  return (
    <div className="container py-5">
      <div className="col-12 md-5">
        <input
          type="text"
          className="w-25 lead"
          placeholder="Input"
          value={input}
          onChange={(inputEvent) => setInput(inputEvent.target.value)}
        />
      </div>
      <div className="col-12 md-5">
        <h2 className="text-primary">{getSumOfDigits()}</h2>
      </div>
    </div>
  );
}

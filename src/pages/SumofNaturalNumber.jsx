import React from "react";
import { useState } from "react";

export default function SumofNaturalNumber() {
  const [input, setInput] = useState("");

  const getSumOfNumbers = () => {
    var sum = 0;

    for (let i = 1; i <= parseInt(input); i++) {
      sum = sum + i;
    }

    return sum;
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
        <h2 className="text-primary py-3">{getSumOfNumbers()}</h2>
      </div>
    </div>
  );
}

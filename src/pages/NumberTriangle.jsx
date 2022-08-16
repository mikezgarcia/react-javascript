import React from "react";
import { useState } from "react";

export default function NumberTriangle() {
  const [input, setInput] = useState("");

  const generateTriangle = () => {
    var displayNumbers = "";
    var generatedTriangle = [];

    for (let i = 1; i <= input; i++) {
      displayNumbers = displayNumbers.concat(" ", i);
      generatedTriangle.push(displayNumbers);
    }

    return generatedTriangle.map((data) => (
      <h2 className="text-primary">{data}</h2>
    ));
  };

  return (
    <div className="container py-5">
      <div className="col-12 md-5">
        <input
          type="text"
          className="w-25 lead"
          value={input}
          placeholder="Input"
          onChange={(inputEvent) => setInput(inputEvent.target.value)}
        />
      </div>
      <div className="col-12 md-5">
        <h2 className="text-primary">{generateTriangle()}</h2>
      </div>
    </div>
  );
}

import React from "react";
import { useState } from "react";

export default function NumberIso() {
  const [input, setInput] = useState("");

  const getNumberIsoTriangle = () => {
    var char = " ";
    var regularTriangle = [];

    if (isNaN(input) || parseInt(input) < 1) {
      return "Please Input a number greater than 1.";
    } else {
      for (let i = 1; i <= input; i++) {
        char = char.concat(" ", i);
        regularTriangle.push(char);
      }
    }
    return regularTriangle.map((data) => (
      <h2 className="text-primary">{data}</h2>
    ));
  };

  return (
    <div className="container py-5">
      <div className="col-12 md-5">
        <input
          type="text"
          className="w-25"
          placeholder="Input"
          value={input}
          onChange={(inputEvent) => setInput(inputEvent.target.value)}
        />
      </div>
      <div className="col-12 md-5">
        <h2 className="text-primary">{getNumberIsoTriangle()}</h2>
      </div>
    </div>
  );
}

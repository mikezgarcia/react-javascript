import React from "react";
import { useState } from "react";

export default function Isotriangle() {
  const [input, setInput] = useState("");

  const generatedIsoTriangle = () => {
    var char = "*";
    const regularTriangle = [];

    for (let i = 1; i <= input; i++) {
      regularTriangle.push(char);
      char = char.concat(" ", "*");
    }

    const invertedTriangle = regularTriangle.slice().reverse().slice(1);
    const displayTriangle = [].concat(regularTriangle, invertedTriangle);

    return displayTriangle.map((data) => (
      <h2 className="text-primary">{data}</h2>
    ));
  };

  return (
    <div className="container py-5">
      <div className="col-12 md-5">
        <input
          type="text"
          className="w-25"
          value={input}
          placeholder="Input"
          onChange={(inputEvent) => setInput(inputEvent.target.value)}
        />
      </div>
      <div className="col-12 md-5">
        <h2 className="text-primary">{generatedIsoTriangle()}</h2>
      </div>
    </div>
  );
}

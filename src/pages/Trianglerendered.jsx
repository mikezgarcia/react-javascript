import React, { useState } from "react";

export default function Trianglerendered() {
  const [input, setInput] = useState("");

  const generateTriangle = () => {
    let displayChar = "*";
    const outputArray = [];

    for (let i = 1; i <= input; i++) {
      outputArray.push(displayChar);
      displayChar = displayChar.concat(" ", "*");
    }
    return outputArray.map((data) => <h2 className="text-primary">{data}</h2>);
  };

  return (
    <div className="container p-5">
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
        <h2 className="text-primary">{generateTriangle()}</h2>
      </div>
    </div>
  );
}

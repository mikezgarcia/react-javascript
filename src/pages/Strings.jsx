import React, { useState } from "react";

export default function Strings() {
  const [input, setInput] = useState("");

  const processString = () => {
    var reverseInput = input
      .split("")
      .reverse("")
      .join("")
      .split(" ")
      .reverse("")
      .join(" ");

    return reverseInput;
  };

  return (
    <div className="container p-5">
      <div className="col-12 md-5">
        <input
          type="text"
          className="w-25 mb-5 lead"
          placeholder="Input"
          value={input}
          onChange={(inputEvent) => setInput(inputEvent.target.value)}
        />
      </div>
      <div className="col-12 md-5">
        <h2 className="text-primary" placeholder="Output">
          {processString()}
        </h2>
      </div>
    </div>
  );
}

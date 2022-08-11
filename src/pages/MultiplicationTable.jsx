import React from "react";
import { useState } from "react";

function MultiplicationTable() {
  const [input, setInput] = useState("");
  const result = [];

  const getMultiplicationTable = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return "Please enter a number";
    }
    for (let i = 1; i < 10; i++) {
      result.push(input * i);
    }
    return result.map((data) => data);
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            readOnly={true}
            placeholder="Output"
            value={getMultiplicationTable()}
          />
        </div>
      </div>
    </div>
  );
}

export default MultiplicationTable;

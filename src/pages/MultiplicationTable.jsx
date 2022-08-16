import React from "react";
import { useState } from "react";

export default function MultiplicationTable() {
  const [input, setInput] = useState("");

  const getTable = () => {
    const generatedTable = [];
    var number = 0;
    for (let i = 1; i <= input; i++) {
      number = parseInt(input * i);
      generatedTable.push(number);
    }

    return generatedTable.map((data, index) => (
      <div className="d-flex flex-row text-primary ">
        <div className="p-2 w-25">{input}</div>
        <div className="p-2 w-25">x</div>
        <div className="p-2 w-25">{index + 1}</div>
        <div className="p-2 w-25">=</div>
        <div className="p-2 w-25 text-dark fw-bold">{data}</div>
      </div>
    ));
  };

  return (
    <div className="container py-5 ">
      <div className="col-12 md-5">
        <input
          type="text"
          className="w-25 lead"
          placeholder="Input"
          value={input}
          onChange={(inputEvent) => setInput(inputEvent.target.value)}
        />
      </div>
      <div className="col-12 md-5 mb-3">
        <h2 className="text-primary">{getTable()}</h2>
      </div>
    </div>
  );
}

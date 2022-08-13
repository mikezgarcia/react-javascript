import React from "react";
import { useState } from "react";

function NumberIso() {
  const [number, setNumber] = useState(null);

  var initial = " ";
  const sequence = [];

  const generateTriangle = () => {
    // Check if letter or null
    if (isNaN(number) || !number) {
      return <h2 className="text-primary">Please enter a number</h2>;
    }

    // Check if negative number
    else if (parseInt(number) <= 0) {
      return (
        <h2 className="text-primary">
          Please enter a positive number greater than zero
        </h2>
      );
    }

    for (let i = 1; i <= number; i++) {
      initial = initial.concat(" ", i);
      sequence.push(initial);
    }
    const decendingSeq = sequence.slice().reverse().slice(1);
    const combinedSeq = [].concat(sequence, decendingSeq);

    return combinedSeq.map((data) => <h2 className="text-primary">{data}</h2>);
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="w-50 lead"
            placeholder="Please enter a positive number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="col-12">
          <div className="pt-5">{generateTriangle()}</div>
        </div>
      </div>
    </div>
  );
}

export default NumberIso;

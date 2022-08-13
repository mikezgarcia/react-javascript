import React from "react";
import { useState } from "react";

function NumberTriangle() {
  const [number, setNumber] = useState(null);

  var initial = " ";
  const sequence = [];

  const generateFibonacci = () => {
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

    // // First 2 scenarios
    // else if (number === 1) {
    //   return <h2 className="text-primary">{initial}</h2>;
    // } else if (number === 2) {
    //   return <h2 className="text-primary">{initial.concat(" ", "*")}</h2>;
    // }

    // Third scenario
    for (var i = 1; i <= number; i++) {
      //   initial = initial + " " + i;
      initial = initial.concat(" ", i);
      sequence.push(initial);
    }

    return sequence.map((data, index) => (
      <h2 key={index} className="text-primary">
        {data}
      </h2>
    ));
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
          <div className="pt-5">{generateFibonacci()}</div>
        </div>
      </div>
    </div>
  );
}

export default NumberTriangle;

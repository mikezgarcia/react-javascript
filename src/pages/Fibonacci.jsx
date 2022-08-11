import React from "react";
import { useState } from "react";

function Fibonacci() {
  const [number, setNumber] = useState(null);
  var first = 0;
  var second = 1;
  const sequence = [];

  const generateFibonacci = () => {
    // Check if letter or null
    if (isNaN(number) || !number) {
      return <h2 className="text-primary">Please enter a number</h2>;
    }
    // First 2 scenarios
    else if (number === 1) {
      return <h2 className="text-primary">0</h2>;
    } else if (number === 2) {
      return [0, 1].map((data, index) => (
        <h2 className="text-primary" key={index}>
          {data}
        </h2>
      ));
    }

    // Third scenario
    for (var i = 1; i <= number; i++) {
      sequence.push(first);

      var nextTerm = first + second;
      first = second;
      second = nextTerm;
    }

    return sequence.map((data, index) => (
      <h2 className="text-primary" key={index}>
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
          <div className="pt-5">
            <h1>Enter the number of terms: {number}</h1>
            <h2>Fibonacci Series: </h2>
            {generateFibonacci()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fibonacci;

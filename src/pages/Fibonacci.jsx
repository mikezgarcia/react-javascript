import React from "react";
import { useState } from "react";

export default function Fibonacci() {
  const [input, setInput] = useState("");

  const getFibonacci = () => {
    let fib = [0, 1];
    let allfib = [];

    if (isNaN(input) || parseInt(input) < 1) {
      return "Please Input a Number or Greater than 1.";
    } else if (parseInt(input) === 1) {
      allfib.push(fib[0]);
    } else if (parseInt(input) === 2) {
      allfib = fib;
    } else {
      allfib = [0, 1];
      for (let i = 2; i <= input; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        // fib[2]= fib[2-1] + fib[2-2]
        // fib[2] = fib[1] + fib[0]
        // fib[2] = 1 + 0
        // fib[2] = 1     || 3rd entry

        allfib.push(" ", fib[i]);
      }
      // Remove the last data on array, since 0 or index 0 is counted as 1st entry
      allfib.pop();
    }
    return allfib.map((data) => (
      <h2 className="text-primary">{data.toLocaleString("en-US")}</h2>
    ));
  };

  return (
    <div className="container py-5">
      <div className="col-12 md-5">
        <input
          type="text"
          className="w-25"
          placeholder="Input"
          onChange={(inputEvent) => setInput(inputEvent.target.value)}
        />
      </div>
      <div className="col-12 md-5">
        <h2 className="text-primary">{getFibonacci()}</h2>
      </div>
    </div>
  );
}

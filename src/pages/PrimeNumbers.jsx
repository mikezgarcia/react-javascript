import React from "react";
import { useState } from "react";

export default function PrimeNumbers() {
  const [input, setInput] = useState("");

  const isPrime = () => {
    var checkPrime = "Prime";

    switch (!isNaN(input)) {
      case parseInt(input) === 0:
        return "not a prime";

      case parseInt(input) === 1:
        return "neither prime nor composite ";

      case parseInt(input) > 1:
        for (let i = 2; i < parseInt(input); i++) {
          if (parseInt(input) % i === 0) {
            checkPrime = "Composite";
          }
        }
        break;

      default:
        return "Please input a number.";
    }
    return checkPrime;
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
        <h2 className="text-primary">
          The number {input} is {isPrime()} number.
        </h2>
      </div>
    </div>
  );
}

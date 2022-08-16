import React from "react";
import { useState } from "react";

export default function CountVowels() {
  const [input, setInput] = useState("");

  const getVowelsCount = () => {
    let vowelCount = 0;
    if (isNaN(input)) {
      input.split("").forEach((char) => {
        console.log(char);
        if (char.toLocaleLowerCase().match(/[aieou]/)) {
          vowelCount = vowelCount + 1;
        }
      });
      return vowelCount;
    }
  };

  return (
    <div className="container py-5">
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
        <h2 className="text-primary lead fw-bold py-3">
          Total Vowels from Inputed Characters: {getVowelsCount()}
        </h2>
      </div>
    </div>
  );
}

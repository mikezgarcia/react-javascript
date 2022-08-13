import React from "react";
import { useState } from "react";

function Numberwithin() {
  const [input, setInput] = useState("");

  let value = "false";
  const getNumberwithin = () => {
    //check if Number
    if (isNaN(input) || !input) {
      return "Please Enter a Number!";
    }
    //Check Range
    else if (parseInt(input) >= 100 && parseInt(input) <= 500) {
      value = "true";
    }
    return value;

    // return `${parseInt(input) >= 100 && parseInt(input) <= 500}`;
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
            value={getNumberwithin()}
          />
        </div>
      </div>
    </div>
  );
}

export default Numberwithin;

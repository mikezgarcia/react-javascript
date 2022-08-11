import React from "react";
import { useState } from "react";

function SumofDigits() {
  const [input, setInput] = useState("");

  let total = 0;
  const getSumofDigits = () => {
    input.split("").map((data) => {
      if (!isNaN(data)) {
        total = total + parseInt(data);
      }

      return total;
    });
    return total;
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
            value={getSumofDigits()}
          />
        </div>
      </div>
    </div>
  );
}

export default SumofDigits;
